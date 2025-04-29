import { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  Add,
  Asset,
  Category,
  ChevronDown,
  Close,
  DecisionNode,
  Number_7,
  Query,
  Share,
  Subflow,
  Warning,
  ArrowUpRight,
  Industry,
  Activity,
  EventWarning,
  TransformInstructions,
  ArrowRight,
  RequestQuote,
  SupportVectorMachine,
  DataAnalytics,
  Headset,
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  QuestionAnswering,
  Search,
} from "@carbon/icons-react";
import { Paperclip } from "lucide-react";
import fansblowers from "../../../public/assets/FANSBLOWERS.png";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  subtitle: string;
  keywords: string;
  description: string;
  tags: string;
  author: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), "src", "posts");
  const filenames = await fs.readdir(postsDir);
  const posts: Post[] = [];

  for (const filename of filenames) {
    if (filename.endsWith(".md")) {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContent);
      posts.push({
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Sin título",
        excerpt:
          data.excerpt || content.substring(0, 200).replace(/\n/g, " ") + "...",
        content: content,
        date: data.date || "",
        subtitle: data.subtitle || "",
        keywords: data.keywords || "",
        description: data.description || "",
        tags: data.tags || "",
        author: data.author || "",
      });
    }
  }

  return posts;
}

export const metadata: Metadata = {
  title: "BLOG",
  description: "DESC BLOG",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="">
      <div className="px-[0vw]">
        <div className="relative h-[32vh] flex items-center justify-start ">
          {/* Contenido */}
          <div className="relative z-10 text-whites w-[40vw] h-full bg-gray10 p-[2vw]  flex flex-col justify-between">
            <div>
              <div className="flex flw-row">
                <span className="text-blue60 font-light">
                  Inicio <span className="mx-2 text-gray60">{"/"}</span>{" "}
                  Publicaciones técnicas
                </span>
              </div>
              <h1 className="text-5xl font-light text-black  ">
                Publicaciones
              </h1>
            </div>
            <div className="bg-gray20 p-4 hover:bg-white group">
              <div className="text-[1vw] leading-[136%]">
                Encuentra aquí las publicaciones más recientes de RP Tech &
                Associates. <br />
                si deseas publicar tu articulo a traves de RP tech & Associates,
                comunicate con nosotros.
              </div>
              <button className="mt-4 font-light text-[0.9rem] flex flex-row items-center gap-8 group-hover:bg-gray90 transition-100">
                <span>Comparte tu artículo</span>
                <Paperclip size={20} className="text-white" />
              </button>
            </div>
          </div>
          <div className="h-full z-10 w-[60vw] bg-[url('/assets/bgMantenibilidad.jpg')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="px-[2vw] pt-[2vw]">
        <div className="bg-gray10 p-4 border flex flex-row justify-between items-center">
          <div>
            <strong className="text-gray60">
              Recibe notificaciones sobre nuevas publicaciones y noticias de RP
              Tech Team.{" "}
            </strong>
          </div>
          <div>
            <button className="border-2 bg-transparent text-gray60 border-gray60 hover:bg-white">
              Suscribirse al newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="px-[4vw] mt-12">
        <div className="flex flex-col items-center"></div>

        <div className=" mb-8">
          <h2>Publicaciones destacadas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.slice(0, 4).map((post) => (
            <div
              key={post.slug}
              className="hover:shadow-lg transition-shadow border border-gray60 shadow-md hover:bg-gray10 min-h-[50vh] hover:cursor-pointer bg-white"
            >
              <div className="h-[50%] w-full relative">
                <Image
                  src={fansblowers}
                  alt="Criticidad"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="h-[50%] flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-xl mb-2 leading-[125%]">
                    <Link href={`/blog/${post.slug}`} className="font-normal ">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray60 font-normal text-sm">
                    {post.excerpt}
                  </p>
                </div>
                <div className="text-sm mt-2 px-2   border border-gray50 w-fit flex flex-row items-center bg-gray80 text-white">
                  <span>{post.tags}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[4vw] mb-48">
        <div className="mt-24 mb-8 flex flex-row justify-between items-center">
          <h2>RP Tech & Associates Publications</h2>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Buscar"
              className="shadow-[0_0px_15px_rgba(0,0,0,0.15)] h-12 w-full outline outline-1 outline-gray30 focus:outline-gray60 p-4 pl-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-gray60 " />
            </div>
          </div>
        </div>
        <div className="mt-16">
          {posts.slice(4, 100).map((post) => (
            <div
              key={post.slug}
              className="hover:bg-gray10 hover:cursor-pointer flex flex-row gap-8 p-4 border-t border-gray60 h-fit justify-between"
            >
              <div className="">
                <div>
                  <h2 className="text-xl mb-2">
                    <Link href={`/blog/${post.slug}`} className="font-normal">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray60 font-normal text-sm mb-0">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div>
                <ArrowUpRight size={20} className="text-gray60 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

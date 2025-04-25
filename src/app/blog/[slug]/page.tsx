import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import reliaplantMini from "@../../../public/assets/reliaplantMini.svg";
import remarkGfm from "remark-gfm"; // Already imported, now we'll use it

interface Post {
  slug: string;
  title: string;
  content: string;
}

async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.md`);
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: typeof data.title === "string" ? data.title : "Sin título",
      content,
    };
  } catch (error) {
    console.error(`Error al leer el archivo ${slug}.md:`, error);
    return null;
  }
}

// Use 'any' type to bypass Next.js type checking completely
export default async function BlogArticle(props: any) {
  const { slug } = props.params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4 w-[60vw] mt-[10vh] pb-[10vh]">
      <h1 className="text-[2.6vw] font-bold mb-6">{post.title}</h1>
      <div className="border-b-2 border-black pb-2 mb-24 flex flex-row items-center">
        <div>
          <span>
            <span className="p-1 px-2 bg-blue-200 text-blue-600">
              Artículo técnico
            </span>{" "}
            - Autor: RP Tech Team
          </span>
        </div>
        <div>
          <Image
            src={reliaplantMini}
            alt="Reliaplant Mini Logo"
            width={24}
            height={24}
            className="ml-2"
          />
        </div>
      </div>
      <div className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Add this to enable GFM (tables, etc.)
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-4xl font-bold my-4 text-gray-900"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-3xl font-bold my-3 text-gray-800 uppercase mb-8 mt-16"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-2xl uppercase font-bold my-2 text-gray-800 mt-12"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="my-4 text-lg text-gray-600 leading-relaxed"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul className="text-lg list-disc my-4 space-y-2" {...props} />
            ), // Removed list-inside
            ol: ({ node, ...props }) => (
              <ol className="text-lg list-decimal my-4 space-y-2" {...props} />
            ), // Changed to list-decimal
            li: ({ node, ...props }) => (
              <li className="text-gray-600 text-lg pl-4" {...props} />
            ), // Removed list-inside
            code: ({ inline, className, children, ...props }: any) => {
              return inline ? (
                <code
                  className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              ) : (
                <pre className="bg-gray-100 rounded p-4 my-4 overflow-x-auto text-sm font-mono">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="mt-8 p-4 border-l-4 border-gray-300 bg-gray-100 text-gray-600 italic"
                {...props}
              />
            ),
            table: ({ node, ...props }) => (
              <table
                className="min-w-full bg-white border border-gray-300"
                {...props}
              />
            ),
            thead: ({ node, ...props }) => (
              <thead className="bg-gray-200 border-b" {...props} />
            ),
            tbody: ({ node, ...props }) => (
              <tbody className="bg-white" {...props} />
            ),
            tr: ({ node, ...props }) => <tr className="border-b" {...props} />,
            th: ({ node, ...props }) => (
              <th
                className="px-4 py-2 text-lg text-left font-semibold bg-gray-100 border"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td className="px-4 py-2 text-lg border" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

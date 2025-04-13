import Link from "next/link";
import { PostMetadata } from "../components/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-700">Tag: {props.tags}</p>
      <p className="text-slate-700">Keyword: {props.keywords}</p>
      <p className="text-slate-700">Description: {props.description}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
    </div>
  );
};

export default PostPreview;
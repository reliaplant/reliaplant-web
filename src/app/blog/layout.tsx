export const metadata = {
  title: "Blog",
  description: "Artículos y noticias sobre la confiabilidad en Latinoamérica.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-50">{children}</div>;
}

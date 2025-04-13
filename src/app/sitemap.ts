import { MetadataRoute } from "next";
import path from "path";
import fs from 'fs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get static routes
  const appDirectory = path.join(process.cwd(), 'src/app');
  const postsDirectory = path.join(process.cwd(), 'src/posts');

  const getRoutesFromApp = (dir: string): string[] => {
    const files = fs.readdirSync(dir);
    const routes = [];

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const isDynamicRoute = /\[.*\]/.test(file)
        if (!isDynamicRoute) {
          const subFiles = fs.readdirSync(fullPath);
          const filesWithBrackets = subFiles.filter((subFile) => /\[.*\]/.test(subFile));
          if (filesWithBrackets.length === 0) {
            routes.push(file)
          }
        } 
      }
    });
    return routes;
  };

  // Get MD files
  const getMDRoutes = (dir: string): string[] => {
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  };

  const staticRoutes = getRoutesFromApp(appDirectory);
  const mdRoutes = getMDRoutes(postsDirectory);

  const staticEntries = staticRoutes.map((route): MetadataRoute.Sitemap[0] => ({
    url: `${process.env.HOST_URL}/${route}`,
    changeFrequency: 'monthly',
    priority: 1,
  }));

  const mdEntries = mdRoutes.map((route): MetadataRoute.Sitemap[0] => ({
    url: `${process.env.HOST_URL}/blog/${route}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...mdEntries];
}
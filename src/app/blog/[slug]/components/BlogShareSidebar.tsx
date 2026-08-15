import { FaLinkedin, FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import AbrirFormContacto from "@/components/AbrirFormContacto";

interface BlogShareSidebarProps {
  url: string;
  title: string;
}

export default function BlogShareSidebar({ url, title }: BlogShareSidebarProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, Icon: FaLinkedin },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, Icon: FaFacebook },
    { name: "WhatsApp", href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`, Icon: FaWhatsapp },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, Icon: FaXTwitter },
  ];

  return (
    <aside className="hidden 2xl:flex flex-col gap-6 w-64 flex-shrink-0 sticky top-10 self-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Compartir</p>
        <div className="flex gap-2">
          {links.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Compartir en ${name}`}
              className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Reliaplant</p>
        <h4 className="text-lg font-bold mb-2 leading-snug">¿Quieres llevar esto a tu planta?</h4>
        <p className="text-sm text-gray-300 mb-5">
          Habla con un especialista sobre cómo aplicar esto en tu operación.
        </p>
        <AbrirFormContacto
          buttonText="Hablar con un especialista"
          variant="white"
          especial={`Blog sidebar: ${title}`}
        />
      </div>
    </aside>
  );
}

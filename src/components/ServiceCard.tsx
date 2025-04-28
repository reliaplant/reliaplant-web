import Link from "next/link";
import { ArrowUpRight } from "@carbon/icons-react";

interface ServiceCardProps {
  href: string;
  Icon: React.ElementType;
  title: string;
  description: string;
}

export function ServiceCard({
  href,
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Link href={href} className="no-underline min-w-[300px]">
      <div className="border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between bg-white hover:border-reliablue">
        <div>
          <div className="bg-relialightblue p-4 w-fit rounded-full mb-4">
            <Icon size={32} className="text-reliablue" />
          </div>
          <h3 className="text-2xl font-normal mb-4">{title}</h3>
          <p className="text-reliagray">{description}</p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <span className="text-reliablue font-light">Conocer más</span>
          <ArrowUpRight size={20} className="text-reliablue" />
        </div>
      </div>
    </Link>
  );
}

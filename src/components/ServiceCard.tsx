import Link from "next/link";
import { ArrowUpRight } from "@carbon/icons-react";

interface ServiceCardProps {
  href?: string;
  Icon: React.ElementType;
  title: string;
  description: string;
  variant?: "default" | "dark";
  className?: string;
}

export function ServiceCard({
  href = "",
  Icon,
  title,
  description,
  variant = "dark",
  className = "",
}: ServiceCardProps) {
  const Card = () => (
    <div
      className={`border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between ${
        variant === "dark"
          ? "border-gray60 hover:border-blue60"
          : "bg-white hover:border-blue60"
      } ${className}`}
    >
      <div>
        <Icon size={32} className={`text-blue60 mb-4`} />
        <h3
          className={`text-xl font-bold mb-3 ${
            variant === "dark" ? "text-blue60" : ""
          }`}
        >
          {title}
        </h3>
        <p className={variant === "dark" ? "text-gray30" : "text-gray60"}>
          {description}
        </p>
      </div>
      {href && (
        <div className="mt-8 flex justify-between items-center">
          <span className="text-blue60 font-light">Conocer más</span>
          <ArrowUpRight size={20} className="text-blue60" />
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="no-underline min-w-[300px]">
      <Card />
    </Link>
  ) : (
    <Card />
  );
}

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
          ? "border-gray-700 hover:border-blue-500 bg-gray-900/50"
          : "bg-white border-gray-300 hover:border-blue-500"
      } ${className}`}
    >
      <div>
        <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
          variant === "dark" ? "bg-blue-500/10" : "bg-blue-50"
        }`}>
          <Icon size={24} className="text-blue-600" />
        </div>
        <h3
          className={`text-lg font-bold mb-3 ${
            variant === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
      {href && (
        <div className="mt-6 flex justify-between items-center group-hover:gap-2 transition-all">
          <span className="text-blue-600 font-medium text-sm">Conocer más</span>
          <ArrowUpRight size={18} className="text-blue-600" />
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="no-underline group">
      <Card />
    </Link>
  ) : (
    <Card />
  );
}

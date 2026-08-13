import React from "react";
import Link from "next/link";

export type BotonVariant = "primary" | "outline" | "outline-light" | "white" | "dark";
export type BotonSize = "sm" | "md" | "lg";

interface BotonBaseProps {
  variant?: BotonVariant;
  size?: BotonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

type BotonAsButton = BotonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type BotonAsLink = BotonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type BotonProps = BotonAsButton | BotonAsLink;

const variantClasses: Record<BotonVariant, string> = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20",
  outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  "outline-light": "bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-gray-900 text-gray-300 hover:text-white",
  white: "bg-white hover:bg-gray-100 text-blue-600",
  dark: "bg-gray-900 hover:bg-black text-white",
};

const sizeClasses: Record<BotonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Boton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}: BotonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "font-semibold rounded-lg transition-all whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, target, rel, ...anchorRest } = rest as BotonAsLink;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
        {...(anchorRest as Omit<BotonAsLink, "href" | "target" | "rel" | keyof BotonBaseProps>)}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as BotonAsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}

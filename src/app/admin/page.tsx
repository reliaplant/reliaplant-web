"use client";

import Link from "next/link";
import {
  FiEdit,
  FiUsers,
  FiSettings,
  FiMail,
  FiBarChart2,
} from "react-icons/fi";
import { IconType } from "react-icons";

interface AdminCardProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
  href?: string;
  onClick?: () => void;
}

function AdminCard({
  title,
  description,
  icon: Icon,
  color,
  href,
  onClick,
}: AdminCardProps) {
  const CardContent = () => (
    <div className="h-full bg-white overflow-hidden shadow rounded-lg transition-transform hover:scale-105 hover:shadow-md cursor-pointer">
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-start flex-grow">
          <div className={`flex-shrink-0 bg-${color}-100 rounded-md p-3`}>
            <Icon className={`h-6 w-6 text-${color}-600`} />
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href}>
      <CardContent />
    </Link>
  ) : (
    <div onClick={onClick}>
      <CardContent />
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AdminCard
            title="Editor del Blog"
            description="Escribir y publicar entradas del blog"
            icon={FiEdit}
            color="green"
            href="/admin/blog-editor"
          />

          <AdminCard
            title="Gestor del Blog"
            description="Gestionar y moderar contenido del blog"
            icon={FiEdit}
            color="red"
            href="/admin/blog-manager"
          />

          <AdminCard
            title="Gestión de Formularios"
            description="Administrar los formularios de contacto y sus datos"
            icon={FiUsers}
            color="blue"
            href="/admin/form-manager"
          />

          <AdminCard
            title="Configuración de cuenta"
            description="Configurar, añadir y editar usuarios"
            icon={FiSettings}
            color="gray"
            href="/admin/account"
          />

          <AdminCard
            title="Campañas de Email"
            description="Crear y gestionar campañas de email marketing"
            icon={FiMail}
            color="yellow"
            onClick={() => console.log("Email campaigns clicked")}
          />

          <AdminCard
            title="Estadísticas"
            description="Ver estadísticas y análisis del sitio"
            icon={FiBarChart2}
            color="purple"
            onClick={() => console.log("Analytics clicked")}
          />
        </div>
      </div>
    </div>
  );
}

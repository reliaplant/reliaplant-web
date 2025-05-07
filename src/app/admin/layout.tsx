"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHome, FiUser, FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutAdmin } from "@/lib/firebase/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          router.push("/admin/login");
        } else {
          setUser(currentUser);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error checking authentication:", error);
        router.push("/admin/login");
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin" className="text-xl font-bold text-gray-800">
                  Panel de Administración
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center">
                  <div className="flex items-center text-gray-600">
                    <FiUser className="mr-1" />
                    <span className="text-sm font-medium">
                      {user.displayName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="ml-4 flex items-center text-red-600 hover:text-red-800"
                  >
                    <FiLogOut className="mr-1" />
                    <span className="text-sm">Salir</span>
                  </button>
                </div>
              )}
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FiHome className="mr-1" />
                Volver al sitio
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

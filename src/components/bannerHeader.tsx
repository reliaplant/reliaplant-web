import BotonAsesorRCM from "@/app/consultoria/rcm/BotonAsesorRCM";
import { fetchLatestSettingsP21 } from "@/services/database.service";
import Image from "next/image";

export default async function BannerHeader() {
  // Obtener los datos de configuración del banner
  const headerData = await fetchLatestSettingsP21();

  // Si no se debe mostrar el banner, retorna null
  if (!headerData?.bannerShow) {
    return null;
  }

  return (
    <div className="mx-auto">
      {/* Banner para escritorio */}
      {headerData.bannerDesktop && (
        <div className="hidden md:flex w-full">
          <a
            href={headerData.bannerUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="relative w-full h-[150px]"> {/* Altura dinámica */}
              <Image
                src={headerData.bannerDesktop}
                alt="Banner de escritorio"
                layout="fill"
                objectFit="cover" // Ajuste para cubrir el contenedor
                priority // Optimización de carga
              />
            </div>
          </a>
        </div>
      )}

      {/* Banner para móvil */}
      {headerData.bannerMovil && (
        <div className="block md:hidden w-full">
          <a
            href={headerData.bannerUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="relative w-full h-[130px]"> {/* Altura dinámica */}
              <Image
                src={headerData.bannerMovil}
                alt="Banner móvil"
                layout="fill"
                objectFit="cover" // Ajuste para cubrir el contenedor
                priority // Optimización de carga
              />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

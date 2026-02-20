import { Metadata } from "next";
import Image from "next/image";
import {
  CheckmarkFilled,
  ArrowRight,
  Partnership,
  Idea,
  DataStructured,
  Security,
} from "@carbon/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Sobre Reliaplant | Confiabilidad Industrial",
  },
  description:
    "Conoce al equipo detrás de Reliaplant. Ingenieros especializados en confiabilidad industrial, RCA, RCM y gestión de activos.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/planta.jpg"
            alt="Planta industrial"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-blue-400 font-medium uppercase tracking-wide text-sm mb-4 block">
            Sobre nosotros
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ingeniería de confiabilidad{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              hecha plataforma
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Reliaplant nace de la experiencia real en plantas industriales.
            Conocemos los problemas porque los hemos vivido: análisis
            incompletos, datos dispersos y decisiones sin respaldo técnico.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                Nuestra misión
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Que la confiabilidad deje de ser un ideal y se convierta en
                práctica diaria
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creemos que las empresas industriales tienen el conocimiento
                técnico — lo que falta son herramientas que lo estructuren, lo
                hagan trazable y lo conviertan en decisiones mejores.
              </p>
              <ul className="space-y-3">
                {[
                  "Simplificar procesos técnicos complejos",
                  "Reducir la burocracia sin perder rigor",
                  "Conectar datos con decisiones reales",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckmarkFilled
                      size={20}
                      className="text-blue-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/bgDiagnostico.jpg"
                alt="Diagnóstico de confiabilidad industrial"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              Nuestro enfoque
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Principios que guían lo que construimos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <DataStructured size={28} className="text-blue-600" />,
                title: "Rigor técnico",
                desc: "Cada módulo sigue estándares reconocidos: ISO 14224, SAE JA1011, metodologías RCA probadas.",
                color: "bg-blue-50",
              },
              {
                icon: <Idea size={28} className="text-purple-600" />,
                title: "Simplicidad",
                desc: "Interfaces limpias que eliminan complejidad innecesaria sin sacrificar profundidad.",
                color: "bg-purple-50",
              },
              {
                icon: <Partnership size={28} className="text-teal-600" />,
                title: "Cercanía",
                desc: "Trabajamos con cada cliente para entender su realidad operativa antes de proponer soluciones.",
                color: "bg-teal-50",
              },
              {
                icon: <Security size={28} className="text-orange-600" />,
                title: "Confianza",
                desc: "Datos protegidos, resultados trazables y procesos auditables.",
                color: "bg-orange-50",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-14 h-14 ${v.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              Equipo
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ingenieros que entienden la operación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo combina experiencia en plantas industriales con
              desarrollo de software para crear herramientas que realmente
              funcionan en el campo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/assets/consultor1.jpg",
                name: "Consultor Senior",
                role: "Ingeniería de Confiabilidad",
              },
              {
                img: "/assets/consultor2.jpg",
                name: "Especialista RCM",
                role: "Estrategias de Mantenimiento",
              },
              {
                img: "/assets/consultor3.jpg",
                name: "Analista RCA",
                role: "Análisis de Causa Raíz",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="text-center group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] shadow-lg">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-white font-bold text-lg">
                      {member.name}
                    </p>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres conocer más?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Conversemos sobre cómo podemos ayudar a tu operación.
          </p>
          <Link
            href="/#contacto"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all shadow-lg"
          >
            Agenda una conversación
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}

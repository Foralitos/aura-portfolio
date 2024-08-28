import React from "react";
import { Star, Check, AppWindowIcon, AppWindowMac } from "lucide-react";

const OfferItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 mr-6 flex-shrink-0 text-white flex items-center justify-center">
      {React.cloneElement(icon as React.ReactElement, {
        size: 32,
        strokeWidth: 3,
      })}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

function AboutUs() {
  return (
    <section className="bg-[#2B2C32] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-5xl font-bold mb-4 tracking-wider leading-tight">
              LO QUE HACEMOS
            </h2>
            <div className="w-16 h-1 bg-white" />
          </div>
          <div className="lg:w-2/3 lg:pl-16">
            <div className="space-y-8">
              <OfferItem
                icon={<AppWindowIcon />}
                title="DISEÑO UI/UX MODERNO"
                description="En Aura, nos enfocamos en crear interfaces modernas y atractivas que cautivan a los usuarios desde el primer momento. Combinamos diseño innovador con usabilidad, asegurando que cada interacción con tu producto digital sea una experiencia memorable y efectiva.."
              />
              <OfferItem
                icon={<AppWindowIcon />}
                title="EXPERTOS EN DESARROLLO DE APPS"
                description="En Aura, somos expertos en crear aplicaciones móviles que no solo funcionan a la perfección, sino que también destacan en el mercado. Nuestro equipo transforma ideas en aplicaciones intuitivas y potentes, diseñadas para ofrecer una experiencia de usuario fluida y satisfactoria."
              />
              <OfferItem
                icon={<AppWindowIcon />}
                title="MAESTROS DEL DISEÑO WEB"
                description="Diseñamos y desarrollamos sitios web que no solo son visualmente impactantes, sino también altamente funcionales. En Aura, entendemos que tu sitio web es la puerta de entrada a tu marca, por lo que nos aseguramos de que cada detalle refleje tu identidad y cumpla con los más altos estándares de calidad."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

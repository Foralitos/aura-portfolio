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
              WHAT WE DO
            </h2>
            <div className="w-16 h-1 bg-white" />
          </div>
          <div className="lg:w-2/3 lg:pl-16">
            <div className="space-y-8">
              <OfferItem
                icon={<AppWindowIcon />}
                title="MODERN UI/UX DESIGN"
                description="At Aura, we focus on crafting modern and attractive interfaces that captivate users from the first moment. We combine innovative design with usability, ensuring that every interaction with your digital product is a memorable and effective experience."
              />
              <OfferItem
                icon={<AppWindowIcon />}
                title="EXPERTS IN APP DEVELOPMENT"
                description="At Aura, we excel in creating mobile applications that not only function flawlessly but also stand out in the market. Our team transforms ideas into intuitive and powerful apps, designed to deliver a smooth and satisfying user experience."
              />
              <OfferItem
                icon={<AppWindowIcon />}
                title="MASTERS OF WEB DESIGN"
                description="We design and develop websites that are not only visually striking but also highly functional. At Aura, we understand that your website is the gateway to your brand, so we ensure every detail reflects your identity and meets the highest quality standards."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

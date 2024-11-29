'use client'
import Image from "next/image";

const ServicesSection = () => {
    const services = [
        {
          imageSrc: "/consumer1.webp", // Replace with actual image paths
          title: "Registration & Recovery",
          description:
            "Register your jewelry in IGI’s database to ensure the best chance of recovery if damaged, lost or stolen.",
        },
        {
          imageSrc: "/consumer2.webp",
          title: "Appraisals",
          description:
            "IGI can accommodate independent estate valuations for the purposes of estate tax or liquidation.",
        },
        {
          imageSrc: "/consumer1.webp",
          title: "Screening Services",
          description:
            "IGI offers the industry’s most advanced screening and detection services.",
        },
      ];
      

  return (
    <div className="px-8 lg:px-16 py-6  w-full lg:my-16">
      <div className="w-full py-5 md:py-10">
        <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#682A2A]">
          Consumer Services
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-400 xl:flex    p-4"
            >
              <div className="w-full">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="w-full md:h-[250px]  lg:h-[150px]  h-full  "
                />
              </div>
              <div className="p-4 flex flex-col  flex-grow">
                <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-base font-bold text-[#682A2A]">
                  {service.title}
                </h3>
                <div className="my-2">
                <p className="text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-[#682A2A] ">
                  {service.description}
                </p>
                </div>
                {/* <div className="my-2">
                <button  className="text-[#682A2A] border px-2 py-1 border-[#682A2A] md:text-base text-sm">
                  Learn More
                </button>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ServicesSection;

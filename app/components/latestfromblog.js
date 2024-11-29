'use client'
import Image from "next/image";

const slides = [
    {
      backgroundImage: "/callout-bg.webp",
      paragraph: 'IGI’s supreme position in the gemological world is no coincidence. It is the result of continuous research, support and synergy with professionals and consumers alike.',
    },
    
  ];
  

 

function Latestfromblog() {
  return (
     <>
      <div className="mx-auto  font-hankenGrotesk px-8 lg:px-16 py-6 flex items-center w-full lg:my-16">
  {slides.map((slide, index) => (
    <main key={index} className="relative bg-cover bg-center-top h-full my-6 py-10 lg:px-32 px-10 md:px-20 font-hankenGrotesk" style={{ backgroundImage: `url(${slide.backgroundImage})` }}
    >
      <p className="text-[#682A2A] text-lg md:text-xl lg:text-2xl  xl:text-4xl
      2xl:text-4xl md:text-center text-justify font-hankenGrotesk ">{slide.paragraph}</p>

      <div className=" pt-10 flex justify-center">
      <span>
              <Image
                src="/logo_igi.webp"
                alt="Logo_igi"
                width={200}
                height={200}
                className="h-[150px] w-[200px]"
              />
            </span>
      </div>
    </main>
  ))}
</div>

     </>
  )
}

export default Latestfromblog
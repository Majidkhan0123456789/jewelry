'use client';
 
import Image from 'next/image';
import Link from 'next/link';
function Diamond() {
  const cards = [
    {
      title: 'Diamond Screening',
      description:'IGI offers the industry’s most advanced screening and detection services. The world’s most prestigious brands rely on IGI as their authoritative resource for authenticity and quality assessment.',
      image: '/screening.webp', // Replace with actual image path
  
    },
    {
      title: 'Diamond Sorting',
      description: 'IGI offers sorting services for diamond parcels up to 0.25ct which includes screening and detection for laboratory grown diamonds and/or simulants.',
      image: '/sorting.webp', // Replace with actual image path
      
    },
   
  ];

  return (
    <div className="px-8 lg:px-16 py-6  w-full lg:my-16">
      <div className="container    md:w-[60%]">
        <h1 className="sm:text-lg md:text-xxl lg:text-3xl xl:text-5xl font-semibold text-[#682A2A]   mb-4">
          Diamond Services
        </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
        <div key={index} className=" overflow-hidden flex flex-col justify-between  min-h-[200px]">
        <div className="p-4">
        <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base font-bold text-[#682A2A]">
          {card.title}
        </h3>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#682A2A] mt-2">
          {card.description}
        </p>
      </div>
      <Image
        src={card.image}
        alt={card.title}
        width={500}
        height={300}
        className="w-full  object-cover"
      />
    </div>
  ))}
</div>

      </div>
  );
}

export default Diamond;
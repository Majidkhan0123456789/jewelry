'use client';
 
import Image from 'next/image';
import Link from 'next/link';
function Reports() {
  const cards = [
    {
      title: 'Colored Stone Report',
      description:
        'IGI analyzes every gemstone to identify species and variety, provide detailed information and disclose any treatments that may be present.',
      image: '/grading-process.webp', // Replace with actual image path
      learnMoreLink: '#',
      verifyLink: '#',
    },
    // {
    //   title: 'Jewelry Report',
    //   description:
    //     'IGI pioneered grading reports for finished jewelry, providing peace of mind for millions of consumers who purchase jewelry every day.',
    //   image: '/report2.webp',  
    //   learnMoreLink: '#',
    //   verifyLink: '#',
    // },
    // {
    //   title: 'Diamond Reports',
    //   description:
    //     'IGI’s loose diamond reports clearly identify natural or lab-grown origin and document all aspects of the diamond’s value-setting 4Cs.',
    //   image: '/report3.webp', // Replace with actual image path
    //   learnMoreLink: '#',
    //   verifyLink: '#',
    // },
  ];

  return (
    <div className="px-8 lg:px-16 py-6  w-full lg:my-16">
      <div className="md:flex md:justify-between items-center mb-10">
        <div className="md:w-1/2 w-full">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#682A2A]">
          IGI Services
        </h1>
        </div>
        <div className="md:w-1/2 w-full">
        <p className=" text-[#682A2A] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl   ">
        IGI offers expert services designed to facilitate transparency, protection and added value for buyers and sellers alike.
        </p>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {cards.map((card, index) => ( 
            
              <Image src={card.image}  alt={card.title} width={500} height={300} className="w-full h-full object-cover" key={index}/>
            
          ))}
        </div>
      </div>
  );
}

export default Reports;

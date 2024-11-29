'use client';
import Image from 'next/image';
import Link from 'next/link';
function Reports() {
  const cards = [
    {
      title: 'Colored Stone Report',
      description:
        'IGI analyzes every gemstone to identify species and variety, provide detailed information and disclose any treatments that may be present.',
      image: '/report1.webp', // Replace with actual image path
      learnMoreLink: '#',
      verifyLink: '#',
    },
    {
      title: 'Jewelry Report',
      description:
        'IGI pioneered grading reports for finished jewelry, providing peace of mind for millions of consumers who purchase jewelry every day.',
      image: '/report2.webp', // Replace with actual image path
      learnMoreLink: '#',
      verifyLink: '#',
    },
    {
      title: 'Diamond Reports',
      description:
        'IGI’s loose diamond reports clearly identify natural or lab-grown origin and document all aspects of the diamond’s value-setting 4Cs.',
      image: '/report3.webp', // Replace with actual image path
      learnMoreLink: '#',
      verifyLink: '#',
    },
  ];

  return (
    <div className="px-8 lg:px-16 py-6  w-full lg:my-16">
      <div className="container    md:w-[60%]">
        <h1 className="sm:text-lg md:text-xxl lg:text-3xl xl:text-5xl font-semibold text-[#682A2A]   mb-4">
          IGI Reports
        </h1>
        <p className=" text-[#682A2A] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  mb-8">
          IGI grading reports play an essential role in the global diamond, gem, and jewelry market, serving as the common language of trust and confidence in the gemological world.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className=" overflow-hidden">
              
              <div className="py-4">
                <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base font-bold text-[#682A2A]">{card.title}</h3>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#682A2A]  mt-2">{card.description}</p>
              </div>
              <Image src={card.image}  alt={card.title} width={500} height={300} className="w-full md:h-48 object-cover"/>
              <div className="flex items-center space-x-8 py-4">
                  <Link href={card.verifyLink} className="text-[#682A2A] border px-2 py-1 border-[#682A2A] md:text-base text-sm">
                    Verify Report</Link>
                  <Link href={card.learnMoreLink} className="text-[#682A2A] hover:underline md:text-base text-sm">
                    Learn More</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Reports;

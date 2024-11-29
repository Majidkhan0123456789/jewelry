 'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Product() {
  const router = useRouter(); // Initialize useRouter

  const cards = [
    {
      title: 'Colored Stone Report',
      description:
        'IGI analyzes every gemstone to identify species and variety, provide detailed information and disclose any treatments that may be present.',
      image: '/report1.webp', // Replace with actual image path
    },
    {
      title: 'Jewelry Report',
      description:
        'IGI pioneered grading reports for finished jewelry, providing peace of mind for millions of consumers who purchase jewelry every day.',
      image: '/report2.webp', // Replace with actual image path
    },
    {
      title: 'Diamond Reports',
      description:
        'IGI’s loose diamond reports clearly identify natural or lab-grown origin and document all aspects of the diamond’s value-setting 4Cs.',
      image: '/report3.webp', // Replace with actual image path
    },
  ];

  const handleVerifyClick = () => {
    router.push('/verify'); // Navigate to the /verify page
  };

  return (
    <>
      <div className="px-8 lg:px-16 py-6 w-full lg:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="overflow-hidden">
              <div className="py-4">
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
                className="w-full md:h-48 object-cover"
              />
              <div className="flex items-center space-x-8 py-4">
                <button
                  onClick={handleVerifyClick} // Trigger navigation
                  className="text-[#682A2A] border px-2 py-1 border-[#682A2A] md:text-base text-sm"
                >
                  Verify Report
                </button>
                <a
                  href="#"
                  className="text-[#682A2A] hover:underline md:text-base text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;

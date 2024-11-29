 'use client';
import Image from 'next/image';

// Dynamic data for the history section
const historyData = [
  {
    description: `With 31 laboratories and 18 schools in 10 countries, IGI employs a global workforce of experts and educators dedicated to industry service and consumer protection.`,
  },
];

function Grading() {
  return (
    <div className="mx-auto bg-[#f2f4f7] font-hankenGrotesk  px-8 lg:px-16 py-6 flex items-center w-full">
      <div className="md:flex py-4 justify-center space-y-3 md:space-y-0 md:space-x-6">
        <div className="max-w-full w-full md:w-[50%] lg:w-[55%]  md:space-y-6 space-y-3">
          {historyData.map((data, index) => (
            <div className="w-full px-3 py-3 md:py-0 md:px-0" key={index}>
              <h2 className="2xl:text-4xl xl:text-5xl text-lg md:text-2xl lg:text-3xl text-left text-[#682A2A] font-semibold  font-hankenGrotesk block pb-4">
                One of the World&#39;s Largest Independent Grading and Accreditation Services Providers
              </h2>
              
              <p className="md:text-lg text-justify 2xl:text-2xl lg:text-xl xl:text-xl text-sm text-[#682A2A] font-normal font-hankenGrotesk">
                {data.description}
              </p>
               
            </div>
          ))}
        </div>

        <div className="lg:w-[45%] md:w-[50%] max-w-full px-3 md:px-0">
          <Image
            src="/grading.webp"
            alt="history"
            width={400}
            height={400}
            className="w-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Grading;

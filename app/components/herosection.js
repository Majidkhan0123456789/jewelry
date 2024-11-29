'use client';
import Slider from 'react-slick';
import { useRouter } from 'next/navigation';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true,
};

// Dynamic slide data
const slidesData = [
  {
    heading: 'Your Global GateWay...',
    paragraph: 'For over 14 years, we have been the best recruitment agency in Pakistan for overseas recruitment, staffing, and finding jobs for Pakistani Candidates in foreign countries...',
    backgroundImage: '/expression_bg.webp',
    buttons: [
      {
        text: 'Recruit Manpower',
        bgColor: 'bg-gray-200',
        hoverBgColor: 'hover:bg-[#E9b122]',
        hoverColor: 'hover:text-white',
        textColor: 'text-[#5d5d5d]',
        link: '/contactform',
      },
    ],
  },
  {
    heading: 'Your Global GateWay...',
    paragraph: 'Helping thousands of professionals secure jobs with top companies in Gulf countries...',
    backgroundImage: '/expression_bg.webp',
    buttons: [
      {
        text: 'Contact Us',
        bgColor: 'bg-gray-200',
        hoverBgColor: 'hover:bg-[#E9b122]',
        hoverColor: 'hover:text-white',
        textColor: 'text-[#5d5d5d]',
        link: '#contact-us', // Target the footer with the 'contact-us' ID
      },
    ],
  },
];

export default function HeroSection() {
  const router = useRouter();

  // const handleScroll = (link) => {
  //   if (link.startsWith('contact-us"')) {
  //     // Scroll to the element with the matching ID
  //     document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     router.push(link);
  //   }
  // };

  const handleScroll = (link) => {
    if (link.startsWith('#')) {
      // Smooth scroll to the element with the matching ID
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(link);
    }
  };
  

  return (
    <Slider {...sliderSettings}>
      {slidesData.map((slide, slideIndex) => (
        <div key={slideIndex}>
          <main className="relative bg-cover bg-center-top h-screen my-6"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {/* 50% overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

            {/* Centered content */}
            {/* <div className="relative z-10 flex flex-col justify-center h-full px-8 lg:px-16 xs:w-[100%] sm:w-[70%] md:w-[60%] font-poppins">
              <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-2xl text-xl text-[#E9b122] text-left font-poppins">
                {slide.heading}
              </h1>
              <p className="md:mt-6 mt-3 max-w-xl 2xl:text-4xl xl:text-2xl md:text-xl text-sm text-left md:block hidden font-poppins text-white">
                {slide.paragraph}
              </p>
              <div className="md:mt-8 mt-3 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 md:w-auto w-[60%]">
                {slide.buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`md:px-6 md:py-2 lg:py-3 px-3 py-2  font-poppins rounded-full w-auto 2xl:text-3xl xl:text-xl md:text-lg text-sm ${button.bgColor} ${button.textColor} ${button.hoverColor} ${button.hoverBgColor}`}
                    onClick={() => handleScroll(button.link)} // Handle the scroll or navigation
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div> */}
          </main>
        </div>
      ))}
    </Slider>
  );
}
'use client'
import { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaChevronDown, FaChevronUp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  // Accordion State
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle Accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <footer className="bg-[#000000] mx-auto flex flex-col justify-center overflow-x-hidden" id="contact-us">
        <div className="py-4 md:py-8 px-4 md:px-8 lg:px-16 max-w-full w-full mx-auto md:border-t border-[#E9b122]">
          
          {/* Logo Section */}
          <div className="md:mt-8 mt-4 md:mb-8 mb-4 flex justify-center md:justify-start">
            <Image src="/footerlogo_igi.webp" alt="Logo" width={120} height={50} className="h-[50px] w-[150px]" />
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3">
            
            {/* Overseas Employment Promoters Licence */}
            <div className='hidden md:block'>
              <ul className="space-y-2">
                <li className="md:text-lg text-sm text-[#ffffff] font-normal w-80">
                One of the World&apos;s Largest Independent Certification and Accreditation Services Provider since 1975
                </li>
              </ul>
            </div>

            {/* Accordion Wrapper for Small Screens */}
            <div className="block md:hidden">
              {/* Information Links Accordion */}
              <div className="w-full">
                <h2
                  className="cursor-pointer text-base text-[#ffffff] md:text-lg font-normal py-4 flex justify-between items-center"
                  onClick={() => toggleAccordion(0)}
                >
                  Information Links
                  {activeIndex === 0 ? (
                    <FaChevronUp className="text-[#ffffff]" />
                  ) : (
                    <FaChevronDown className="text-[#ffffff]" />
                  )}
                </h2>
                {activeIndex === 0 ? (
                  <ul className="space-y-2 pb-5">
                    <li>
                      <Link href="/about" className="text-sm md:text-lg font-normal  text-[#ffffff] font-hankenGrotesk">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-sm md:text-lg font-normal  text-[#ffffff] font-hankenGrotesk">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="text-sm md:text-lg font-normal  text-[#ffffff] font-hankenGrotesk">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" className="text-sm md:text-lg font-normal  text-[#ffff] font-hankenGrotesk">
                        Contact
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>

              {/* Contact Us Accordion */}
              <div className="w-full">
                <h2 className="cursor-pointer text-base md:text-lg font-normal text-[#ffffff] py-4 flex justify-between items-center font-hankenGrotesk"
                  onClick={() => toggleAccordion(1)}
                >
                  Contact Us
                  {activeIndex === 1 ? (
                    <FaChevronUp className="text-gray-700" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </h2>
                {activeIndex === 1 && (
                  <ul className="space-y-2 block pb-5">
                    <li>
                      <span className="text-sm md:text-lg font-normal text-[#ffffff] font-hankenGrotesk">
                      +953366551104
                      </span>
                    </li>
                    <li>
                      <span className="text-sm md:text-lg font-normal text-[#ffffff] font-poppins">
                        infoigi@gmail.com
                      </span>
                    </li>
                    <li>
                      <Link href="/" className="text-sm md:text-lg font-normal  text-[#ffffff] font-poppins">
                        Lorem ipsum dolor  
                      </Link>
                    </li>
                    <li>
                      <span className="text-sm md:text-lg font-normal text-[#ffffff] font-poppins">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolor  
                      </span>
                    </li>
                    {/* <li className="flex space-x-4 font-poppins justify-center">
                      <Link href="https://www.facebook.com/profile.php?id=100064035455711&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d]">
                        <FaFacebook size={24} />
                      </Link>
                      <Link href="https://www.instagram.com/lolaab_enterprises?igsh=emxzeWxoamtreXhh" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                        <FaInstagram size={24} />
                      </Link>
                      <Link href="https://youtube.com/@lolaab-enterprises?si=AhRyybke7befhsLM" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                        <FaYoutube size={24} />
                      </Link>
                      <Link href="https://www.linkedin.com/company/lolaab-enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                        <FaLinkedin size={24} />
                      </Link>
                    </li>  */}
                  </ul>
                )}
              </div>
            </div>

            {/* Non-accordion layout for larger screens */}
            <div className="hidden md:block">
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm md:text-lg font-normal  text-[#fff] font-poppins">
                   About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm md:text-lg font-normal  text-[#ffffff] font-poppins">
                      Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm md:text-lg font-normal  text-[#ffffff] font-poppins">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contect" className="text-sm md:text-lg font-normal text-[#ffffff] font-hankenGrotesk">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <ul className="space-y-2">
                <li>
                  <span className="text-sm md:text-lg font-normal text-[#ffffff] font-hankenGrotesk">
                    +953366551104
                  </span>
                </li>
                <li>
                  <span className="text-sm md:text-lg font-normal text-[#ffffff] font-hankenGrotesk">
                    infigi@gmail.com
                  </span>
                </li>
                <li>
                  <Link href="/" className="text-sm md:text-lg font-normal   text-[#ffffff] font-hankenGrotesk">
                    Lorem ipsum dolor sit  
                  </Link>
                </li>
                <li>
                  <span className="text-sm md:text-lg font-normal text-[#ffffff] font-hankenGrotesk">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,  
                  </span>
                </li>
                {/* <li className="flex space-x-4 font-poppins">
                  <Link href="https://www.facebook.com/profile.php?id=100064035455711&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d]">
                    <FaFacebook size={24} />
                  </Link>
                  <Link href="https://www.instagram.com/lolaab_enterprises?igsh=emxzeWxoamtreXhh" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                    <FaInstagram size={24} />
                  </Link>
                  <Link href="https://youtube.com/@lolaab-enterprises?si=AhRyybke7befhsLM" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                    <FaYoutube size={24} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/lolaab-enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9b122] text-[#5d5d5d] font-poppins">
                    <FaLinkedin size={24} />
                  </Link>
                </li>  */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
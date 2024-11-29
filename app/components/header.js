 'use client';
import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header className="px-8 lg:px-24 py-6 flex items-center w-full bg-white border-t border-b border-[#F2F4F7]">
      <div className="flex justify-between w-full">
        <div className="flex space-x-10">
          <div className="flex items-center">
            {/* Replace this block with the appropriate logo if needed */}
            <span>
              <Image
                src="/logo_igi.webp"
                alt="Logo_igi"
                width={120}
                height={50}
                className="h-[50px] w-[150px]"
              />
            </span>
          </div>
          <div className="lg:flex hidden">
            <Navbar />
          </div>
        </div>

        {/* Mobile Navbar Placeholder */}
        <div className="lg:hidden flex flex-col w-full justify-end">
          {/* <Mobile_Navbar /> */}
        </div>

        {/* Button and Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-5 items-center">
            {/* Search Icon */}
        <FaSearch className="text-[#465B5D] text-xl cursor-pointer hover:text-black" />
            {/* User Icon */}
          <FaUser className="text-[#465B5D] text-xl cursor-pointer hover:text-black" />

        
        <button
            className="px-5 h-10 bg-[#465B5D] hover:outline text-white rounded-sm text-sm md:text-base hover:bg-white hover:text-[#465b5d]"
            onClick={() => router.push('/verifyreport')}
          >
            Verify Report
          </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;

'use client';

import Diamond from "../components/diamond";
import Footer from "../components/footer";
import Header from "../components/header";
import IGI_Services from '../components/igiservices'
import Consumer from '../components/consumer'
import Retailer_Support from '../components/retailersupport'
function page() {
  return (
   <>
   <Header/>
   <IGI_Services/>
   <Diamond/>
   <Consumer/>
   <Retailer_Support/>
   <Footer/>
    
   </>  
  )
}

export default page
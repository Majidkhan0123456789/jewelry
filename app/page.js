'use client';
import Footer from './components/footer';
import Grading from './components/grading';
import Header from './components/header'
import HeroSection from './components/herosection';
import Latestfromblog from './components/latestfromblog';
import Reports from './components/reports';
export default function Home() {
  return (
     <>
     <Header/>
     <HeroSection/>
     <Grading/>
     <Latestfromblog/>
     <Reports/>
      <Footer/>
     </>
  );
}

import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import About2 from "./About2";
import About3 from "./About3";
import Counter from "./Counter";
import Pricing from "./Pricing";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import { pricingplan } from "../../export";

export default function MainPage() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <section id="services" className="w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-5">
        <h1 data-aos="zoom-in" data-aos-delay="400" className="font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">Select Your Sport</h1>
        <div data-aos="zoom-in" data-aos-delay="600" className="w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3">
          {pricingplan.map((item, index) => (
            <Link key={index} to={`/about${index + 1}`} className="relative w-full h-[250px] p-5 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer shadow-lg block  border-4 border-white">
            <div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.img})` }}></div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white  bg-opacity-50 hover:bg-opacity-70 transition duration-100">
              <h1 className="absolute top-2 text-white text-5xl font-bold  font-ubuntu">{item.type}</h1>
              <p className="text-white text-lg font-semibold font-ubunt">{item.specs}</p>
            </div>
          </Link>
          
          ))}
        </div>
      </section>

      <Routes>
        <Route path="/" element={<About2 />} />
        <Route path="/about1" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
      </Routes>

      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import React from "react";
import Features from "./components/features/Features";
function App() {
  return (
   <>
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="border border-white-200 border-[30px] max-w-screen-2xl mx-auto px-16"> 
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
   </>
  );
}

export default App;
// afdasf
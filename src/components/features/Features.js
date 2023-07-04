import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { SiProgress , SiAntdesign} from 'react-icons/si'
import {FaMobile,FaGlobe,FaBars} from 'react-icons/fa'
import {AiFillAppstore} from "react-icons/ai";


const Features = () => {
  return (
    
    <section 
    id="features"
    className="w-full py-20 border-b-[1px] border-b-black">
      <Title title = "Features" des="What I do  "/>
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title="Mobile Development"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<FaMobile />}
        />
        <Card 
          title="Business Strategy"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<FaBars />}
        />
        <Card 
          title="SEO optimisation"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<SiProgress />}
        />
        <Card 
          title="React Native"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<AiFillAppstore />}
        />
        <Card 
          title="Hosting Websites"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<FaGlobe />}
        />
        <Card 
          title="Ux Design"
          des= "Lorem ipsum dolor sit amer consectetur adipiscing elit. Atque soluta"
          icon={<SiAntdesign />}
        />
      </div>
    </section>
    
  )
}

export default Features
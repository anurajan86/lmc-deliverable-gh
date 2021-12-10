import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import '../../../App.css'

function Projects() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <div style={{marginTop:'-15em'}}>
      <HeroSection {...homeObjTwo} />
      </div>
    </>
  );
}

export default Projects;
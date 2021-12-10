import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import { homeObjTwo } from './Data';
import Pricing from '../../Pricing';

function Contribute() {
  return (
    <>
    <HeroSection {...homeObjTwo} />
 
     <HeroSection {...homeObjOne} />
     
    </>
  );
}

export default Contribute;
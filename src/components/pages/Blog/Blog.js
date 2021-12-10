import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';
import  article4  from '../../../images/article4.jpeg';
import  article5  from '../../../images/article5.jpeg';

function Blog() {
  return (
    <>
     <div className='row' style={{padding:'0', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img style={{height:'50%', width:'50%'}} src={article4} />
      </div>
      <div style={{marginTop:'-5em'}}>
      <HeroSection {...homeObjOne} />
      </div>
    <div style={{marginTop:'-10em'}}>
      <div className='row' style={{padding:'3', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img style={{height:'50%', width:'50%'}} src={article5} />
      </div>
      <div style={{marginTop:'-10em'}}>
      <HeroSection {...homeObjTwo} />
      </div>
    </div>
    </>
  );
}

export default Blog;
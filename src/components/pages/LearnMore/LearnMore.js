import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import '../../HeroSection.css'
import  article1  from '../../../images/article1.png'
import  article2 from '../../../images/article2.png'
import  article3  from '../../../images/article3.png'
function LearnMore() {
  return (
    // <div className='home__hero-section darkBg'>
    <>
      <div className='container' style={{padding:'6em', marginBottom:'-10em'}}>
        <div className='row home__hero-row'>
          <div className='col'>
            <div className='home__hero-text-wrapper'>
              <div className='top-line'>The importance.</div>
              <h1 className='heading'>
                Why environement is regeneration important?
              </h1>

              <p className='home__hero-subtitle' style={{color:'white'}}>
                There are a myriad of reasons why this matters. Take a look below at some of the concerns, importance, and plans regarding environmental restoration, especially right here in Georgia.

                </p>
                        
              </div>
          </div>
        </div>
      {/* </div> */}
    </div>
             <div className='row' style={{padding:'5em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'60%', width:'60%'}} src={article3} />
                </div>

              <div className='row' style={{padding:'5em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div className = 'col'>
                <img src={article1} />

                </div>
              
                <div className = 'col' style={{padding:'-10em'}} >
                <img  src={article2} />

                </div>
                
              </div>
              <div className='container'>
                <div className='col'>
                <h2 className='heading' style={{fontSize:'15px'}}> Learn more by visitng the following links:</h2>

                <h2 onClick={() => window.location.href='https://www.wsbtv.com/news/local/2-animal-species-found-georgia-among-dozens-now-likely-extinct/MA6PMA4HHZB7BPZ4B32XJE6OKI'}className='heading' style={{cursor:'pointer', fontSize:'15px', fontWeight:'300'}}> Image One </h2>

                <h2 onClick={() => window.location.href='https://gatrees.org/learn-explore/ecosystem-services/'}className='heading' style={{cursor:'pointer', fontSize:'15px', fontWeight:'300'}}> Image Two </h2>

                <h2 onClick={() => window.location.href='https://gaswcc.georgia.gov/agricultural-conservation-programs/wildlife-habitat-georgia'}className='heading' style={{cursor:'pointer', fontSize:'15px', fontWeight:'300'}}> Image Three</h2>


              </div>
              </div>
              </>

               


    
  );

}

export default LearnMore;
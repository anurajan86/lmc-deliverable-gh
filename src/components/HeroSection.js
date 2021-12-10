import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { TiWeatherPartlySunny, TiTree, TiWorldOutline } from 'react-icons/ti';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  goto,
  img,
  alt,
  imgStart,
  buttonBool
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={goto} className  ={ buttonBool
                      ? 'seeButton'
                      : 'noButton'}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='img-col'>
              <div className='home__hero-img-wrapper'>
                {/* <img src={img} alt={alt} className='home__hero-img' /> */}
                <TiTree className='navbar-icon' size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
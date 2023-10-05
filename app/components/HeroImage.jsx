
'use client'
import {isMobile} from 'react-device-detect';
import Image from 'next/image'
import hero_image from '../assets/hero_image.jpg'
import hero_image_mobile from '../assets/hero_image_mobile.jpg'

function HeroImage() {
    let heroImageElement = ""
    if(!isMobile){
        heroImageElement = hero_image
    } else {
        heroImageElement = hero_image_mobile
    }
    
  return (
    <Image className='w-full mx-auto mb-10' src={heroImageElement} alt=""/>
  )
}

export default HeroImage
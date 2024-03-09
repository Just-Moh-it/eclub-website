'use client'
import logo from '../assets/logo.png'
import Link from 'next/link';
import {isMobile} from 'react-device-detect';
import Image from 'next/image';

function NavBar() {
  if(isMobile){
    return(
      <div className='navbar w-full mb-10'>
        <div className="w-full">
            <Link href='/'>
               <Image className='inline' id="logo" src={logo} alt="Entreprenership Club" width={'130'} />
            </Link>
        </div>
        <details className="dropdown dropdown-end">
            <summary className="float-right m-1 btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </summary>
            <ul className="float-right shadow menu dropdown-content bg-base-100 rounded-box mt-10">
                <li>
                   <Link className='text-right float-right' href='/leadership'>Leadership</Link> 
                </li>
                <li>
                  <Link className='font-semibold' href='/events'>Events</Link>
                </li>
                <li>
                  <Link className='text-secondary font-semibold ' href='/startupsprint'>Startup Sprint</Link>
                </li>
            </ul>
        </details>
                
      </div>
    )
  } else {
  return (
    <div className='navbar mb-10 p-2 pb-6 w-11/12 mx-auto'>

        <Link href='/'>
            <Image className='w-1/3' id="logo" src={logo} alt="" />
        </Link>

        <div className="lg:float-right">
          <Link className='text-xl ml-20' href='/leadership'>Leadership</Link>
          <Link className='text-xl ml-20' href='/events'>Events</Link>
          <Link className='text-xl ml-20 text-secondary font-semibold' href='/venture-weekend'>Venture Weekend</Link>
        </div>
    </div>
  ) 
  }
}

export default NavBar
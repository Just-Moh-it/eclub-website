import Image from 'next/image'
import {BsLinkedin} from 'react-icons/bs'

function LeadershipProfile({headshot, name, title, linkedin, yearsActive, bio}) {
  return (
    <div className='mb-20'>
        <Image className='lg:w-1/4 lg:float-left' src={headshot} alt="" width={400}/>
        <div className="lg:float-left lg:ml-6 mt-6">
          <span className='lg:float-left text-2xl text-primary'>{name}</span>
          <br />
          <div className="clear-left"></div>
          <span className='text-xl'>{title}</span>
          <br />
            <a className='btn mt-6' href={linkedin} target='_blank'>
              <BsLinkedin className='text-primary text-2xl'></BsLinkedin>
              Connect
            </a>
          
        </div>
        <div className="clear-left"></div>
    </div>
  )
}

export default LeadershipProfile
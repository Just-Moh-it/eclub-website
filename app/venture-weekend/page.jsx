import React from 'react'
import Image from 'next/image';
import uxIcon from './ux.png'
import codeIcon from './code.png'
import marketing from './marketing.png'
import pitching from './pitching.png'
import ventureWeekendFlyer from '../events/venture-weekend.png'

const workshops = [
    {
        title: 'UI/UX Design',
        description: 'Gain the skills to design apps and websites with professional tools. Learn the importance of user experience and how to design a user-friendly interface.',
        icon: uxIcon
    },
    {
        title: 'Full Stack Development',
        description: 'Learn how to build a web application from scratch. This workshop will cover front-end and back-end development, databases, and APIs. No prior experience required.',
        icon: codeIcon
    },
    {
        title: 'Marketing',
        description: 'Learn how to market your startup and reach your target audience. This workshop will cover social media marketing, content creation, and SEO.',
        icon: marketing
    },
    {
        title: 'Pitching and Public Speaking',
        description: 'Learn how to present your ideas with confidence. This workshop will cover public speaking, storytelling, and how to pitch your startup to investors.',
        icon: pitching
    }
]

function VentureWeekend() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Venture Weekend</h1>


      <div className="lg:grid lg:grid-cols-2">

        <div>
          <h2 className='text-xl font-bold text-secondary'>Meet students building startups, level up your skillset, win prizes</h2>
          <br />
          <p className="text-lg mb-8">
            Virginia Tech's Entrepreneurship Club is hosting a Venture Weekend from April 19th to the 21st. 
            This event is open to all students and will be a great opportunity to learn about entrepreneurship and 
            meet other students interested in startups. Venture Weekend will feature a series of workshops, activities,
            and demos where students will present their startups and the progress they've been making.
          </p>

          <h3 className="text-xl text-secondary font-bold my-10">Friday April 19th - Sunday April 21st</h3>

          <h2 className="text-xl text-secondary font-bold">Startup Demos</h2>
          <p className="text-lg mb-8">
            Meet the Virginia Tech students who are building innovative startups and disrupting markets.
          </p>
            
            <a href='https://forms.gle/wL4aNiZv875HszhUA' target='_blank' className="btn-block btn btn-secondary float-right mt-10 mb-20">Register</a>
        </div>

        <div className=''>
          <div className='lg:w-4/6 float-right'>
            <Image className='float-right mb-10' src={ventureWeekendFlyer}></Image>
          </div>
        </div>
      </div>


      
      <h2 className="text-xl text-secondary font-bold mt-20 lg:mt-0">Workshops</h2>



      <div className="lg:grid lg:grid-cols-2">

        {workshops.map((workshop, index) => {
            return(
                <>
                <div key={index} className='my-10 mx-auto w-fit border border-accent rounded-lg p-4 lg:w-11/12'>
                    <h2 className='text-secondary text-lg font-bold'>{workshop.title}</h2>
                    <div className="lg:flex lg:items-center lg:align-middle">
                        <Image className='lg:w-[100px] lg:h-[100px]' src={workshop.icon} alt="" />
                        <p className='lg:w-1/2 lg:mt-8 lg:ml-2'>{workshop.description}</p>
                    </div>
                </div>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default VentureWeekend
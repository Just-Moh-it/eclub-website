
import {BsFillExclamationOctagonFill, BsPeopleFill, BsFileCodeFill, BsLink45Deg} from 'react-icons/bs'
import Image from 'next/image'
import sponsorsImg from './sponsors.png'
import Link from 'next/link'
import applicationQR from './application_qr_code.png'

function StartupSprint2023() {
    return (
      <div>
          <h1 className="text-4xl font-bold mb-4">
              Startup Sprint 2023
          </h1>
          <h2 className="text-2xl text-primary">
              Dare to Dream, Take the Leap
          </h2>
          <p className="text-lg mb-8">
            Are you ready to embark on an entrepreneurial journey like no other?
            Virginia Tech's Entrepreneurship Club, in partnership with the
            Apex Center for Entrepreneurs, presents {' '}
            <span className="text-secondary">Startup Sprint</span> – your chance to turn innovative ideas into reality in just one week!
          </p>
  
          <div className="shadow-lg border rounded-lg p-6 mb-10 lg:grid lg:grid-cols-2 ">
              <div className="lg:w-1/2">
                  <h2 className="text-3xl font-semibold mb-2">📅  Event Dates</h2>
                  <br />
                  
                  <h3 className="text-2xl font-semibold text-secondary">Application Deadline:</h3>
                  <p className='text-xl'>Sunday November 5th 11:59pm</p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Startup Sprint Kickoff:</h3>
                  <p className='text-xl'>Wednesday November 8th at the Apex Center</p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Submission Deadline:</h3>
                  <p className='text-xl'>Sunday November 12th</p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Pitch Day:</h3>
                  <p className='text-xl'>Wednesday November 15th at the Apex Center</p>
                  <br />

              </div>
              <div className="lg:w-1/2 lg:mx-auto lg:float-right">
                  <h2 className='text-3xl font-semibold'>Apply</h2>

                  <Image src={applicationQR}></Image>
                  <Link className="btn btn-secondary btn-block mt-10" target={'_blank'} href='https://vt.startuptree.co/event/s/T8LLpTq56zfhzJAfPKxJRA/Startup-Sprint-2023-Registration' >
                    <BsLink45Deg className='text-2xl'></BsLink45Deg>
                    Register
                  </Link>
              </div>
           </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="p-6 border shadow-lg rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                💡 What is Startup Sprint?
                </h2>
                <p className='text-xl'>
                  The Virginia Tech Startup Sprint is an exhilarating week-long event
                  where students from all backgrounds come together to build innovative
                  solutions to real-world problems. Whether you're a coding whiz, a
                  marketing guru, a design genius, or just bursting with entrepreneurial
                  spirit, this is your chance to shine!
                </p>
                <br />
                <p className='text-xl'>You will have one week to <span className='text-secondary'>identify a problem</span>, build a 
                  <span className="text-secondary"> product</span>, and form a 
                  <span className="text-secondary"> business model</span> that you will present
                  in front of a panel of judges.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="p-6 border shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-secondary">🌟 Why Should You Join?</h2>
                <ul className="list-disc">
                  <li className='text-xl'>
                      <span className="font-semibold text-primary">Hands-On Experience:</span> You're going to be dropped into a fast-paced environment where you'll have to identify a problem, deploy a solution, and craft a business model.
                  </li>
                  <li className='text-xl'>
                      <span className="font-semibold text-primary">Teamwork:</span> Form teams with diverse skill sets and learn the art of collaboration.
                  </li>
                  <li className='text-xl'>
                      <span className="font-semibold text-primary">Skill Development:</span> Learn to use hyper-modern technologies with workshops led by industry partners.
                  </li>
                  <li className='text-xl'>
                      <span className="font-semibold text-primary">Win $$$:</span> Impress our panel of judges and secure capital. There is over <span className="text-secondary">$5000</span> in prize money!
                  </li>
                  <li className='text-xl'>
                      <span className="font-semibold text-primary">Boost Your Resume:</span> Add this exciting experience to your resume.
                  </li>
              </ul>
  
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="p-6 border shadow-lg rounded-lg h-full">
                    <h2 className="text-2xl font-bold mb-4 text-secondary">Our Sponsors:</h2>
                    <Image className='lg:w-2/3' src={sponsorsImg} alt="Startup Sprint Sponsors" />
                </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="p-6 border shadow-lg rounded-lg h-full">
                    <h2 className="text-2xl font-bold mb-4 text-secondary">FAQs</h2>

                    
                    <div className="text-xl inline-block mb-4">
                        <h3 className='text-2xl text-primary font-bold'>Can I apply with a startup or product I'm already working on?</h3>
                        <BsFillExclamationOctagonFill className='text-error text-2xl inline mr-4' />
                        No previous work may be done before the event. Any evidence of prior work will result in disqualification. 
                    </div>

                    <div className="text-xl inline-block mb-4">
                        <h3 className='text-2xl text-primary font-bold'>Do I need a team to apply?</h3>
                        <BsPeopleFill className='text-error text-2xl inline mr-4' />
                        You do not need a team to participate but you are encouraged to form teams of up to 4 people.
                    </div>
                    
                    <div className="text-xl inline-block">
                        <h3 className='text-2xl text-primary font-bold'>Do I need to know how to code?</h3>
                        <BsFileCodeFill className='text-error text-2xl inline mr-4' />
                        No you do not need to know how to code. You must still submit a product however, and this could
                        simply be a landing page made with Wix and a spreadsheet on your end.
                    </div>

                </div>
            </div>
          </div>

         
      </div>
    )
  }
  
  export default StartupSprint2023
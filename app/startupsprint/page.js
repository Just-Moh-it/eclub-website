
import {BsFillExclamationOctagonFill, BsPeopleFill, BsFileCodeFill, BsLink45Deg, BsFillInfoCircleFill, BsPersonFill} from 'react-icons/bs'
import Image from 'next/image'
import sponsorsImg from './sponsors.png'
import Link from 'next/link'
import applicationQR from './application_qr_code.png'
import CountdownTimer from './CountdownTimer'

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

          <div className="alert alert-info mb-10">
          <BsFillInfoCircleFill className='text-2xl'></BsFillInfoCircleFill>
            Check on this page regularly for updates and new information.</div>
  
          <div className="shadow-lg border rounded-lg p-6 mb-10 lg:grid lg:grid-cols-2 ">
            
              <div className="lg:w-3/4 lg:float-left">
                  <h2 className='text-3xl font-semibold'> 🚫 Registration Closed</h2>
                  <Link href='' className="btn btn-accent btn-block mt-10">Discord</Link>
                  <Link href='' className="btn btn-info btn-block mt-10">Resources</Link>
                  {/* <CountdownTimer></CountdownTimer>
                  <div className='mt-4 text-xl text-error'>Note: If you have a team, ALL members should register.</div>
                  <Image className='lg:w-1/2' src={applicationQR}></Image>
                  <Link className="btn btn-secondary btn-block mt-10 lg:w-1/2" target={'_blank'} href='https://forms.gle/82jP5SR23r8Aze3p8' >
                    <BsLink45Deg className='text-2xl'></BsLink45Deg>
                    Register
                  </Link> */}
              </div>

              <div className="lg:w-1/2 mt-10 lg:mt-0">
                  <h2 className="text-3xl font-semibold mb-2">📅  Event Dates</h2>
                  <br />
                  
                  <h3 className="text-2xl font-semibold text-secondary">Application Deadline:</h3>
                  <p className='text-xl'>Sunday November 5th <span className="text-error font-bold">11:59PM</span></p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Kickoff and Opening Ceremony:</h3>
                  <p className='text-xl'>Wednesday November 8th <span className="text-primary font-bold">6PM to 8PM</span> at the Apex Center</p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Meet Community Labs</h3>
                  <p className='text-xl'>Friday November 10th <span className="text-error font-bold">12:00PM - 3:00PM</span></p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Business Model Workshop</h3>
                  <p className='text-xl'>Friday November 10th <span className="text-error font-bold">4:00PM - 6:00PM</span></p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">MVP Submission Deadline:</h3>
                  <p className='text-xl'>Monday November 13th <span className="text-error font-bold">8:00AM</span></p>
                  <br />

                  <h3 className="text-2xl font-semibold text-secondary">Final Pitch Day:</h3>
                  <p className='text-xl'>Wednesday November 15th at the Apex Center</p>
                  <br />
              </div>

           </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="p-6 border shadow-lg rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                💡 What is Startup Sprint?
                </h2>
                <p className='text-xl'>
                  Startup Sprint is an event designed to get you to ideate, problem solve, and deploy a 
                  startup with speed. There will be food, swag, cash prizes, and workshops for technical and business
                   skill sets. Network with industry experts, local startups, mentors, and have fun 
                   with building your ideas!
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
                
                  <div className='text-xl mt-4'>
                      <span className="font-semibold text-primary">Hands-On Experience:</span> You're going to be dropped into a fast-paced environment where you'll have to identify a problem, deploy a solution, and craft a business model.
                  </div>
                  <div className='text-xl mt-4'>
                      <span className="font-semibold text-primary">Workshops:</span> Learn business model creation and Arweave blockchain development from faculty and industry partners.
                  </div>
                  <div className='text-xl mt-4'>
                      <span className="font-semibold text-primary">Skill Development:</span> Learn to use hyper-modern technologies and apply them to a practical problem.
                  </div>
                  <div className='text-xl mt-4'>
                      <span className="font-semibold text-primary">Win $$$:</span> Impress our panel of judges and secure capital. There is over <span className="text-secondary">$5000</span> in prize money!
                  </div>
                  <div className='text-xl mt-4'>
                      <span className="font-semibold text-primary">Boost Your Resume:</span> Add this exciting experience to your resume.
                  </div>
  
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
                        You are free to funnel prize money into previous ventures however. But your submissions must be developed
                        during the event and no earlier.
                    </div>

                    <div className="text-xl inline-block mb-4">
                        <h3 className='text-2xl text-primary font-bold'>Do I need a team to apply?</h3>
                        <BsPeopleFill className='text-error text-2xl inline mr-4' />
                        You do not need a team to participate but you are encouraged to form teams of up to 4 people.
                    </div>
                    
                    <div className="text-xl inline-block mb-4">
                        <h3 className='text-2xl text-primary font-bold'>Do I need to know how to code?</h3>
                        <BsFileCodeFill className='text-error text-2xl inline mr-4' />
                        No you do not need to know how to code. You must still submit a product however, and this could
                        simply be a landing page made with Wix and a spreadsheet on your end.
                    </div>


                    <div className="text-xl inline-block mb-4">
                        <h3 className='text-2xl text-primary font-bold'>Who should I contact if I have questions?</h3>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          ebenezer@vt.edu
                        </div>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          htsours@vt.edu
                        </div>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          samuelr20@vt.edu
                        </div>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          mbutler23@vt.edu
                        </div>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          jeremiahhohn@vt.edu
                        </div>
                        <div>
                          <BsPersonFill className='text-error text-2xl inline mr-4' />
                          brodyemery11@vt.edu
                        </div>
                    </div>

                </div>
            </div>
          </div>

         
      </div>
    )
  }
  
  export default StartupSprint2023
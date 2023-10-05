import Image from 'next/image'
import Link from 'next/link'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import groupme_qr from './assets/groupme_qr.png'
import HeroImage from './components/HeroImage'

export default function Home() {

  return (
    <div className='container w-11/12 mx-auto'>
    <HeroImage></HeroImage>
      <h1 className='text-3xl lg:text-4xl text-primary'>Where Entrepreneurship Becomes Community</h1>
      <p className='mt-4 mb-8 text-xl lg:text-2xl'>
        Right at the center of Virginia Tech's startup ecosystem, we bridge gaps between students, industry leaders, and 
        startups that are building spectacular products.
      </p>
      <p className='text-xl mb-8 lg:text-2xl'>
        In collaboration with the <a className='externalLink' target="_blank" href="https://www.apex.vt.edu/">Apex Center</a>, the Entrepreneurship Club helps students get integrated into
        the startup ecosystem.
      </p>
  
      <div className="lg:mb-20"></div>
  
      <div className='lg:w-1/2 lg:float-left'>
        <h2 className='text-3xl text-primary mx-auto mb-4 lg:text-4xl'>What We Do</h2>
        <Image className='border lg:w-11/12' src={image2} alt="" width={'500'} />
        <p className='text-xl mt-4 mb-6 lg:w-11/12 lg:text-2xl'>We provide connections, knowledge, and inspiration for members 
          to get started and continue down their entrepreneurial journey.
        </p>
      </div>
      <div className="lg:w-1/2 lg:float-left">
        <h2 className='text-3xl text-primary mx-auto mb-4 lg:text-4xl'>Our Mission</h2>
        <Image className='border lg:w-11/12' src={image3} width={'500'} alt="" />
        <p className='text-xl mt-4 lg:text-2xl'>
          Our mission is to create a community of individuals who are 
          comfortable and confident in starting projects and building ideas.
        </p>
      </div>
  
      <div className='lg:clear-left'></div>
      <div className="lg:mb-8"></div>
  
      <div className="lg:grid lg:grid-cols-2">
        {/* Newsletter Sign Up */}
        <div>
          <h2 className='text-3xl mt-8 text-primary mx-auto lg:text-4xl'>Sign up for our Newsletter</h2>
          <p className='mt-4 text-xl'>
            Join 2,000 others in finding out what's new in the entrepreneurial community around Blacksburg. Delivered weekly to your inbox during the semester.
          </p>
          <div className="form-control">
                <form
                  action="https://vteclub.us8.list-manage.com/subscribe/post?u=5fa06e1fdfbb4ff1646ba3d2f&amp;id=1dea666573&amp;f_id=00c00fe0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate form-control mt-6"
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                      <input type="email" name="EMAIL" className="required email w-full py-2 px-3 input input-primary mt-4" id="mce-EMAIL" required="" placeholder='Email'/>
                      <span id="mce-EMAIL-HELPERTEXT" className="block text-sm mt-1"></span>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response"></div>
                      <div className="response" id="mce-success-response"></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      <input type="text" name="b_5fa06e1fdfbb4ff1646ba3d2f_1dea666573" tabIndex="-1" value="" />
                    </div>
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary mt-4 btn-block" value="Subscribe" />
                  </div>
                </form>
          </div>
        </div>
        {/* GroupMe */}
        <div>
          <h2 className='text-3xl mt-8 text-primary mx-auto lg:text-4xl lg:float-right'>Join Our Group Me</h2>
          <div className="clear-right"></div>
          <Image src={groupme_qr} className='lg:w-1/2 lg:float-right mt-4' alt="" width={'500'} />
        </div>
      </div>
    </div>
  );
  
}

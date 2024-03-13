import startup_sprint_flyer from './startup_sprint.jpg'
import meet_the_founders from './meet_founders.jpg'
import women_in_eship from './women_in_eship.png'
import Image from 'next/image'
import venture_weekend from './venture-weekend.png'

function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary">Upcoming Events</h1>
      <Image className='lg:w-1/3 mt-10' src={venture_weekend}></Image>
      

        <h2 className="text-3xl font-bold text-primary mt-20">Previous Events</h2>
        <div className="lg:grid lg:grid-cols-3 mt-10">
            <Image className='lg:w-11/12 mx-auto' src={startup_sprint_flyer}></Image>
            <Image className='lg:w-11/12 mx-auto mt-12 lg:mt-0' src={meet_the_founders}></Image>
            <Image className='lg:w-11/12 mx-auto mt-12 lg:mt-0' src={women_in_eship}></Image>
        </div>
    </div>
  )
}

export default page
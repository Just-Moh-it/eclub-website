import startup_sprint_flyer from './startup_sprint.png'
import meet_the_founders from './meet_founders.jpg'
import Image from 'next/image'

function page() {
  return (
    <div>
        <h1 className="text-3xl text-primary">Upcoming Events</h1>
        <div className="lg:grid lg:grid-cols-2 mt-10">
            <Image className='lg:w-3/4 mx-auto' src={startup_sprint_flyer}></Image>
            <Image className='lg:w-3/4 mx-auto mt-12 lg:mt-0' src={meet_the_founders}></Image>
        </div>
    </div>
  )
}

export default page
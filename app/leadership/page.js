
import ebenezer_zergabachew from '../assets/leadership_photos/ebenezer_zergabachew.jpg'
import sam_radocha from '../assets/leadership_photos/sam_radocha.jpg'
import brody_emery from '../assets/leadership_photos/brody_emery.jpg'
import henry_sours from '../assets/leadership_photos/henry_sours.jpg'
import jeremiah_hohn from '../assets/leadership_photos/jeremiah_hohn.jpg'
import sid from '../assets/leadership_photos/sid.jpg'
import mason_butler from '../assets/leadership_photos/mason_butler.png'
import LeadershipProfile from '../components/LeadershipProfile'

export const metadata = {
  title: 'Leadership',
  description: "The leadership of the Entrepreneurship Club at Virginia Tech."
}

function LeadershipPage() {
  

  const leadershipData = [
    {
      headshot: ebenezer_zergabachew,
      name: "Ebenezer Zergabachew",
      title: "President",
      linkedin: "https://www.linkedin.com/in/ebenezer-zergabachew"
    },
    {
      headshot: jeremiah_hohn,
      name: "Jeremiah Hohn",
      title: "Vice President",
      linkedin: "https://www.linkedin.com/in/jeremiahhohn/"
    },
    {
      headshot: brody_emery,
      name: "Brody Emery",
      title: "Vice President",
      linkedin: "https://www.linkedin.com/in/brody-emery-88539321b/"
    },
    {
      headshot: mason_butler,
      name: "Mason Butler",
      title: "Videographer / Photographer",
      linkedin: "https://www.linkedin.com/in/mason-butler/"
    },
  ]

  return (
    <div className='container'>
       <h1 className='text-4xl mb-20 text-primary'>Leadership</h1> 
       <div className="lg:grid lg:grid-cols-2">
       {
          leadershipData.map((leader) => (
            <LeadershipProfile
            name={leader.name}
            headshot={leader.headshot}
            title={leader.title}
            linkedin={leader.linkedin}
            ></LeadershipProfile>
          ))
        }
       </div>
        
    </div>
  )
}

export default LeadershipPage
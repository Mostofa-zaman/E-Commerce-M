import { Link } from 'react-router-dom'
import banImg from '../assets/image/bannerHome.png'

const Banner = () => {
  return (
    <section className='w-full overflow-hidden'>
      
      <Link to='/shop' className='block w-full'>
        <img
          src={banImg}
          alt="banner"
          className='
            w-full 
            object-cover 
            h-[180px] 
            sm:h-[260px] 
            md:h-[380px] 
            lg:h-[500px] 
            xl:h-[700px]
          '
        />
      </Link>

    </section>
  )
}

export default Banner

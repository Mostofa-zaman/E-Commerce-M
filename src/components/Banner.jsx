import { Link } from 'react-router-dom'
import banImg from '../assets/image/bannerHome.png'

const Banner = () => {

  return (
    <>
      <section className='w-full'>
        <div className="">
          <Link to='/shop'>
            <img className='w-full object-cover lg:h-175' src={banImg} alt="banner" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Banner
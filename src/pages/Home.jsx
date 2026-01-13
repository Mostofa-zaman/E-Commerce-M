import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Featured from '../components/Featured'
import Latest from '../components/Latest'
import Support from '../components/Support'
import TopCate from '../components/TopCate'
import Trending from '../components/Trending'
import Unique from '../components/Unique'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Featured></Featured>
            <Latest></Latest>
            <Support></Support>
            <Unique></Unique>
            <Trending></Trending>
            <TopCate></TopCate>
            <Blog></Blog>
        </>
    )
}

export default Home
import '../../styles/utility.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Solution from '../../components/Solution'
import Testimonials from '../../components/Testimonials'
import Pricing from '../../components/Pricing'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}
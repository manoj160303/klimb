import './App.css'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWork.jsx'
import JourneyTrack from './components/JourneyTrack.jsx'
import Navbar from './components/Navbar'
import QuizLaunch from './components/QuizLaunch.jsx'
import Testimonial from './components/Testimonial.jsx'

function App() {

    return (
        <>
            <Navbar />
            <section id='/' className='scroll-offset'>
                <Hero />
            </section>
            <section id='how-it-works' className='scroll-offset'>
                <HowItWorks />
            </section>
            <section id='tracker' className='scroll-offset'>
                <JourneyTrack />
            </section>
            <section id="quiz-section" className='scroll-offset'>
                <QuizLaunch />
            </section>
            <section id="testimonials" className='scroll-offset'>
                <Testimonial/>
            </section>
            <Footer/>
        </>
    )
}

export default App

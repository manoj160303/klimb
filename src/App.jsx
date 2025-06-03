import './App.css'
import Hero from './components/Hero.jsx'
import JourneyTrack from './components/JourneyTrack.jsx'
import Navbar from './components/Navbar'
import QuizLaunch from './components/QuizLaunch.jsx'

function App() {

    return (
        <>
            <Navbar />
            <section id='hero'>
                <Hero />
            </section>
            <section id='how-it-works'>
                <JourneyTrack />
            </section>
            <section id="quiz-section">
                <QuizLaunch />
            </section>
        </>
    )
}

export default App

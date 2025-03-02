import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RefreshPersistence from './components/RefreshPersistence'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

// Conference Pages
import Conference from './pages/conference/Conference'
import Registration from './pages/conference/Registration'
import IndividualRegistration from './pages/conference/IndividualRegistration'
import Competitions from './pages/conference/Competitions'
import Schedule from './pages/conference/Schedule'
import Rules from './pages/conference/Rules'
import TeamForms from './pages/conference/TeamForms'
import SeniorRecognition from './pages/conference/SeniorRecognition'
import Sponsorship from './pages/conference/Sponsorship'

// Competition Pages
import BibleBowl from './pages/competitions/BibleBowl'
import CountWord from './pages/competitions/CountWord'
import ArtFair from './pages/competitions/ArtFair'
import SpellingBee from './pages/competitions/SpellingBee'
import SpeakWord from './pages/competitions/SpeakWord'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <RefreshPersistence />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Conference Routes */}
          <Route path="/conference" element={<Conference />} />
          <Route path="/conference/registration" element={<Registration />} />
          <Route path="/conference/registration/individual" element={<IndividualRegistration />} />
          <Route path="/conference/schedule" element={<Schedule />} />
          <Route path="/conference/rules" element={<Rules />} />
          <Route path="/conference/team-forms" element={<TeamForms />} />
          <Route path="/conference/senior-recognition" element={<SeniorRecognition />} />
          <Route path="/conference/sponsorship" element={<Sponsorship />} />

          {/* Competition Routes */}
          <Route path="/conference/competitions" element={<Competitions />} />
          <Route path="/conference/competitions/bible-bowl" element={<BibleBowl />} />
          <Route path="/conference/competitions/count-word" element={<CountWord />} />
          <Route path="/conference/competitions/art-fair" element={<ArtFair />} />
          <Route path="/conference/competitions/spelling-bee" element={<SpellingBee />} />
          <Route path="/conference/competitions/speak-word" element={<SpeakWord />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

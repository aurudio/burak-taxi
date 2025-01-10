import AdvantagesSection from './components/AdvantagesSection.jsx'
import Conditions from './components/ConditionsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import HowBecomeSection from './components/HowBecomeSection.jsx'
import MainSection from './components/MainSection.jsx'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='font-semibold'>
			<Navbar />
			<MainSection />
			<AdvantagesSection />
			<Conditions />
			<HowBecomeSection />
			<ContactSection />
			<Footer />
		</div>
	)
}

export default App

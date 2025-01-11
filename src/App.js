import { useEffect } from 'react'
import AdvantagesSection from './components/AdvantagesSection.jsx'
import Conditions from './components/ConditionsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import HowBecomeSection from './components/HowBecomeSection.jsx'
import MainSection from './components/MainSection.jsx'
import Navbar from './components/Navbar'

function App() {
	useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash) {
				window.history.replaceState(
					null,
					'',
					window.location.pathname + window.location.search
				)
			}
		}

		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	return (
		<div className='font-semibold relative overflow-hidden' id='top'>
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

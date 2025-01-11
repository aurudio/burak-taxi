import React from 'react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='flex justify-between items-start border-t border-gray-400 pt-5 pb-9 px-11 sm:p-5 mt-14 font-medium text-sm'>
			<div className=''>
				<p>
					Burak taxi — ваш надёжный партнёр <br /> в мире такси
				</p>
			</div>
			<div className='flex gap-1'>
				<p>© Burak Taxi, 2024 — {currentYear}</p>
				<a href='#top'>
					<button className='bg-yellow sm:p-1 rounded-lg p-2'>
						<img src='/up_arrow.svg' alt='' className='w-7 sm:w-6' />
					</button>
				</a>
			</div>
		</footer>
	)
}

export default Footer

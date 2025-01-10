import React, { useState } from 'react'

const navList = [
	{
		value: 'услуги',
		anchor: 'services',
	},
	{
		value: 'преимущества',
		anchor: 'advantages',
	},
	{
		value: 'условия',
		anchor: 'conditions',
	},
	{
		value: 'контакты',
		anchor: 'contacts',
	},
]

const Navbar = () => {
	const [burger, setBurger] = useState(false)

	return (
		<>
			<nav className='flex justify-between sm:p-5 px-11 bg-[#191918dc] backdrop-blur-xl items-center py-3 fixed w-full top-0 z-10'>
				<div className=''>
					<img src='Burak-logo.png' alt='' className='w-24' />
				</div>
				<ul className='flex gap-10 sm:hidden'>
					{navList.map((item, key) => (
						<li className=' cursor-pointer text-whit' key={key}>
							<a
								className='first-letter:uppercase hover:text-yellow-500 duration-150 text-white'
								href={`#${item.anchor}`}
							>
								{item.value}
							</a>
						</li>
					))}
				</ul>
				<div className='sm:hidden'>
					<button className='my-button'>Позвонить</button>
				</div>
				<img
					src='/menu.svg'
					alt=''
					className='w-8 bg-yellow-500 p-1 rounded-lg sm:block hidden cursor-pointer'
					onClick={() => setBurger(!burger)}
				/>
			</nav>
			<div
				className={`${
					burger ? 'h-80' : 'h-0 -top-6 -z-10'
				} absolute flex flex-col p-5 gap-7 items-center w-52 duration-300 bg-block right-10 top-24 rounded-br-lg rounded-bl-lg overflow-hidden shadow-md shadow-black`}
			>
				<ul className='flex flex-col gap-10 items-center'>
					{navList.map((item, key) => (
						<li className=' cursor-pointer' key={key}>
							<a
								className='first-letter:uppercase hover:text-black hover:bg-yellow-500 rounded-lg px-7 py-2 duration-150 text-white'
								href={`#${item.anchor}`}
							>
								{item.value}
							</a>
						</li>
					))}
				</ul>
				<button className='my-button'>Позвонить</button>
			</div>
		</>
	)
}

export default Navbar

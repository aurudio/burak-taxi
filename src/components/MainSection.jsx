import React from 'react'

const MainSection = () => {
	return (
		<section className='px-6 flex flex-col gap-16 mt-44 items-center'>
			<div className='w-full flex flex-col items-center gap-16'>
				<h1 className='min-2sm:text-5xl text-4xl min-2sm:w-3/4 text-center'>
					Присоединяйтесь к {''}
					<span className='burak-text font-medium'>Burak taxi</span> и начните
					зарабатывать!
				</h1>
				<p className='min-2sm:text-xl text-lg font-light min-2sm:w-3/4 text-center'>
					Самые приятные условия и низкая комиссия по городу. Быстрое
					подключение водителей и поддержка с документами.
				</p>
				<button className='my-button'>Узнать больше</button>
			</div>
			<div className='woman min-2sm:w-11/12 w-full 3sm:h-96 h-[40rem] rounded-xl'></div>
			<p
				className='text-transparent select-none cursor-default'
				id='advantages'
			>
				text
			</p>
		</section>
	)
}

export default MainSection

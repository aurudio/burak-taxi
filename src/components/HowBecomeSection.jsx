import React from 'react'
const proccess = [
	{
		num: '1',
		title: 'Регистрация в системе',
		desc: 'Оставьте заявку на нашем сайте, указав контактные данные и информацию о транспортном средстве.',
	},
	{
		num: '2',
		title: 'Обучение и инструктаж',
		desc: 'Пройдите короткий обучающий курс и получите инструкции по работе с системой и клиентами.',
	},
	{
		num: '3',
		title: 'Начало работы',
		desc: 'После проверки документов и технического состояния автомобиля вы можете начать выполнять заказы.',
	},
]

const HowBecomeSection = () => {
	return (
		<section className='px-6 flex flex-col min-2sm:gap-10 gap-6 min-2sm:mt-20 mt-8 items-center'>
			<h2 className='min-2sm:text-4xl text-2xl min-2sm:w-3/4 text-center'>
				Как стать водителем{' '}
				<span className='burak-text font-medium'>Burak taxi</span>?
			</h2>
			<p className='min-2sm:text-xl text-lg font-light min-2sm:w-3/4 text-center'>
				Быстрое оформление и поддержка на всех этапах сотрудничества.
			</p>

			<div className='flex 3sm:flex-wrap 3sm:flex-col min-2sm:w-9/12 min-2sm:gap-14 3sm:gap-6 gap-2 mt-16'>
				{proccess.map((item, key) => (
					<div
						className='flex flex-col items-center  text-center gap-6 3sm:m-auto 3sm:w-3/4 w-1/3'
						key={key}
					>
						<div className='px-4 py-2 border-[1px] border-black rounded-full'>
							<p className='text-xl font-light'>{item.num}</p>
						</div>
						<h5 className='text-lg font-medium'>{item.title}</h5>
						<p className='font-light text-xs w-4/5 leading-7'>{item.desc}</p>
					</div>
				))}
			</div>
			<p
				id='contacts'
				className='text-transparent text-[1px] select-none cursor-default'
			>
				contacts
			</p>
		</section>
	)
}

export default HowBecomeSection

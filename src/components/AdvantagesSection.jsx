import React from 'react'
const advantages = [
	{
		title: 'Низкие комиссии',
		desc: 'Вы будете получать больше за каждую поездку.',
	},
	{
		title: 'Быстрое подключение',
		desc: 'Станьте водителем Burak taxi без лишних задержек.',
	},
	{
		title: 'Поддержка клиентов',
		desc: 'Наша команда всегда готова помочь с любыми вопросами.',
	},
	{
		title: 'Удобство и простота',
		desc: 'Всё необходимое для работы мы берём на себя: поможем оформить документы «Кис АРТ», «Путевой лист» и карту фрахтовщика.',
	},
]
const AdvantagesSection = () => {
	return (
		<section className='px-6 flex flex-col min-2sm:gap-10 gap-6 min-2sm:mt-20 mt-8 items-center'>
			<h2 className='min-2sm:text-4xl text-3xl min-2sm:w-3/4 text-center'>
				Почему стоит выбрать {''}
				<span className='burak-text font-medium'>Burak taxi</span>?
			</h2>
			<p className='min-2sm:text-xl text-lg font-light min-2sm:w-2/5 text-center'>
				Мы предлагаем самые выгодные условия работы для водителей такси в
				городе.
			</p>
			<div className='flex flex-wrap w-full min-2sm:w-4/5 mt-7 gap-y-8'>
				{advantages.map((item, key) => (
					<div
						className='flex items-start 3sm:w-3/4 m-auto w-1/2 gap-5'
						key={key}
					>
						<img src='/check_mark.svg' className='w-7 mt-1.5' alt='' />
						<div className='flex flex-col justify-between'>
							<h5 className='text-lg font-medium'>{item.title}</h5>
							<p className='font-light'>{item.desc}</p>
						</div>
					</div>
				))}
			</div>
			<p
				className='text-transparent text-[1px] select-none cursor-default'
				id='conditions'
			>
				conditions
			</p>
		</section>
	)
}

export default AdvantagesSection

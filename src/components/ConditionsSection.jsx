import React, { useState } from 'react'

const conditions = [
	{
		title: 'Оформление «Кис АРТ»',
		desc: 'Помощь с документами',
		price: '2000P',
	},
	{
		title: 'Путевые листы',
		desc: 'Поддержка с оформлением',
		price: '5P',
	},
	{
		title: 'Удобный вывод средств',
		desc: 'вывод средств',
		price: 'Jump',
	},
]

const Conditions = () => {
	const [view, setView] = useState(false)

	return (
		<section className='px-6 flex flex-col gap-10 mt-40 items-center'>
			<h2 className='min-2sm:text-4xl text-3xl min-2sm:w-3/4 text-center'>
				Условия <span className='burak-text font-medium'>Burak taxi</span>?
			</h2>
			<p className='min-2sm:text-xl text-lg font-light min-2sm:w-3/5 text-center'>
				Burak taxi предлагает выгодные условия для водителей, быстрое
				подключение и поддержку с оформлением документов.{' '}
			</p>

			<div className='flex flex-col min-2sm:w-3/5 gap-1'>
				{conditions.map((item, key) => (
					<div
						key={key}
						className='flex border-b cursor-default px-3 py-3 border-black items-end hover:border-yellow-500 hover:border-b-2 duration-15 hover:rounded-lg justify-between mb-px hover:mb-0 hover:bg-gray-300'
					>
						<div className='flex flex-col gap-5'>
							<p className='font-normal text-xs'>{item.desc}</p>
							<h3 className='min-2sm:text-3xl text-xl font-medium'>
								{item.title}
							</h3>
						</div>
						<h3 className='min-2sm:text-3xl text-xl font-medium'>
							{item.price}
						</h3>
					</div>
				))}
				<div>
					<div
						className={`flex p-3 border-black items-end  duration-150 justify-between cursor-default ${
							view
								? 'rounded-tl-lg rounded-tr-lg bg-gray-300'
								: 'hover:border-yellow-500 border-b hover:rounded-lg hover:border-b-2 hover:bg-gray-300 mb-px hover:mb-0'
						}`}
					>
						<div className='flex flex-col gap-5'>
							<p
								className={` duration-500 ${
									view
										? 'min-2sm:text-3xl text-xl font-medium'
										: 'text-xs font-normal'
								}`}
							>
								Подключение и комиссия
							</p>
							<h3
								className={`min-2sm:text-3xl text-xl font-medium  duration-500 ${
									view ? 'opacity-0 text-xs' : ''
								}`}
							>
								Условия для водителей
							</h3>
						</div>
						<img
							src='/arrow.svg'
							alt=''
							className='min-2sm:w-16 w-10 rotate-180 hover:scale-105 cursor-pointer'
							onClick={() => setView(!view)}
						/>
					</div>
					<div
						className={`bg-gray-300 overflow-hidden rounded-bl-lg rounded-br-lg duration-500 p-3 conditions flex flex-col items-end gap-3 ${
							view ? 'h-60' : 'h-0 opacity-0'
						}`}
					>
						<div className='w-full '>
							<h3
								className={`min-2sm:text-3xl text-xl font-medium ${
									view ? 'opacity-100 duration-500' : 'opacity-0 text-xs'
								}`}
							>
								Условия для водителей
							</h3>
							<div className='flex flex-col gap-1'>
								<h4 className='min-2sm:text-xl'>Для парковых водителей:</h4>
								<div className='flex justify-between'>
									<p className='min-2sm:text-sm text-xs font-normal'>
										За смену 100P и 1P с каждого заказа
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<h4 className='min-2sm:text-xl '>Для парковых самозанятых:</h4>

								<div className='flex justify-between'>
									<p className='min-2sm:text-sm text-xs font-normal'>
										За смену 50P и 1P с каждого заказа
									</p>
								</div>
							</div>
						</div>
						<div className='w-3/4 lg:w-3/4 xl:w-11/12 text-right'>
							<h5 className='text-sm lg:text-xs 3sm::font-normal font-semibold'>
								Например, вы отработали смену и выполнили 20 заказов. При этом
								комиссия таксопарка составит 120P, а для самозанятых,
								сотрудничающих через таксопарк, она будет всего 70P. Комиссия
								взимается только в те дни, когда вы выполняете заказы.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Conditions

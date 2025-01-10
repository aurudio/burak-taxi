import React, { useState } from 'react'

const ContactSection = () => {
	const [phone, setPhone] = useState('')

	// function inputValue(phoneNumber) {
	// 	if (phoneNumber.length >= 1) {
	// 		setPhone(`(${phoneNumber}`)
	// 		console.log(Number(`(${phoneNumber}`))
	// 	}
	// }

	const handleChange = (event) => {
		const input = event.target.value.replace(/\D/g, '') // Удаляем все нецифровые символы
		const formattedPhone = formatPhoneNumber(input)
		setPhone(formattedPhone)
	}

	const formatPhoneNumber = (value) => {
		if (!value) return ''
		const phoneNumber = value.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/)
		if (!phoneNumber) return ''
		const [, areaCode, centralOfficeCode, line1, line2] = phoneNumber
		return `${areaCode ? `(${areaCode}` : ''}${
			centralOfficeCode ? `) ${centralOfficeCode}` : ''
		}${line1 ? `-${line1}` : ''}${line2 ? `-${line2}` : ''}`.trim()
	}

	return (
		<section className='px-6 flex flex-col gap-10 mt-40 items-center'>
			<h2 className='min-2sm:text-4xl text-3xl min-2sm:w-3/4 text-center'>
				Начните зарабатывать уже сегодня!
			</h2>
			<p className='min-2sm:text-xl text-lg font-light min-2sm:w-2/5 text-center'>
				Быстрое подключение, поддержка с документами и приятные условия работы.
			</p>
			<div className='flex flex-col items-center 3sm:w-full w-4/5 gap-4'>
				<div className='flex 3sm:flex-col 3sm:gap-4 gap-9 w-full min-2sm:w-2/3'>
					<input
						className='my-input 3sm:w-full w-1/2'
						type='text'
						placeholder='Как ваз зовут?'
					/>
					<div className='flex rounded-2xl items-center 3sm:w-full w-1/2 bg-gray-300 px-3 py-2'>
						<p>+7 </p>
						<input
							className='border-0 ml-1 w-full bg-transparent placeholder:text-gray-500'
							type='text'
							placeholder='(999) 999-99-99'
							value={phone}
							maxLength={15}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='w-full flex justify-center'>
					<textarea
						name=''
						id=''
						placeholder='Что хотите сказать?'
						className='my-input min-2sm:w-2/3 w-full h-36 outline-none'
					></textarea>
				</div>
				<button className='my-button mt-6'>Стать водителем</button>
			</div>
		</section>
	)
}

export default ContactSection

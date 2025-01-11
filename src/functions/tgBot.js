import axios from 'axios'

export const handleSubmit = async (obj) => {
	const botToken = '7694131204:AAF3i2dYwcOWA6Ii_6_DktG_gMw9VD1O1qQ'
	const chatId = '5367982040'

	const message = `
	Водитель
		имя ${obj.name}
		телефон ${obj.tel}
		обращение ${obj.desc}`
	try {
		await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
			chat_id: chatId,
			text: message,
		})
		alert('Данные отправлены!')
	} catch (error) {
		console.error('Ошибка отправки:', error)
	}
}

const timeId = setInterval(() => {
	const div = document.getElementById('div-main')
	const color = Math.floor(Math.random() * 12345678).toString(16)
	div.style.background = '#' + color
}, 1000)
setTimeout(() => {
	clearInterval(timeId)
}, 10000)

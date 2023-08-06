let sayHello = 'Frontend Developer'
let result = ''
for (let i = sayHello.length - 1; i >= 0; i--) {
	let newName = sayHello.charAt(i)
	result += newName
}

console.log(result)

let userName = 'JavaScript'
for (let i = 0; i < userName.length; i++) {
	const newName = userName.charAt(i)
	if (newName === 'r') {
		console.log('I have ' + newName)
		break
	}
}

// siuuu
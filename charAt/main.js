let sayHello = 'Frontend Developer'
let result = ''
for (let i = sayHello.length - 1; i >= 0; i--) {
	let newName = sayHello.charAt(i)
	result += newName
}

console.log(result);

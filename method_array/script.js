let users = ['bilal', 'aibek', 'aktan', 'elmirbek']
let new_users = users.map((num) => {
	return num.split('').reverse('').join('')
})
console.log(new_users)

// ============================================
let a = [23, -4, 55, -9, 3, 2, -5, 75, 5, -2, -6]
let b = a.filter((item) => item < 0).length
console.log(b)

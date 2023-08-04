const arraySort = [123, 435, 2, 323, 232, 55, 4, 6, 1, 0, 3, 33, 74, 26]
const result = arraySort.sort((a, b) => {
	return a - b
})
console.log(result)

const userSort = [
	{
		name: 'Bakyt',
		city: 'Batken',
	},
	{
		name: 'Ratbek',
		city: 'Osh',
	},
	{
		name: 'Aktan',
		city: 'Bishkek',
	},

	{
		name: 'Yrysbek',
		city: 'Talas',
	},
]
const sort_user = userSort.sort((a, b) => {
	const nameA = a.name.toUpperCase()
	const nameB = b.name.toUpperCase()
	if (nameA < nameB) {
		return -1
	}
	if (nameA > nameB) {
		return 1
	}
	return 0
})
console.log(sort_user)

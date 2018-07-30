// My Solution
function standar(A) {
	const temp = []
	for (let i = 0; i < A.length - 1; i++) {
		if (A[i] === A[i + 1] && A[i] === false) {
			temp.push(false)
		} else if (A[i] === A[i + 1] && A[i] === true) {
			temp.push(true)
		} else {
			temp.push(true)
		}
	}
	return temp
}

function solution(A) {
	let final = [A]
	for (let i = 0; i < A.length - 1; i++) {

		if (i === 0) {
			final.push(standar(A))
		} else {
			final.push(standar(final[i]))
		}
	}
	return final
}
const A = [true, false, false, true, false]

const result = solution(A)
console.log('Total Node: ', result)

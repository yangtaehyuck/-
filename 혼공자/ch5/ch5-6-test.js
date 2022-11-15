let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]
//filter((value, index, array) => {})에서 value만 사용할 것이기때문에 index, array는 생략할 수 있다.
numbers = numbers.filter((value) => value % 2 === 1)
console.log(numbers) // [ 273, 25, 75, 103, 57 ]
numbers = numbers.filter((value) => value <= 100)
console.log(numbers) // [ 25, 75, 57 ]
numbers = numbers.filter((value) => value % 5 === 0)
console.log(numbers) // [ 25, 75 ]


const array = ['사과', '배', '귤', '바나나']
// array.forEach(function (value, index, array) // array 사용안해서 생략함
array.forEach(function(value, index){ // for in 반복문과 같음
  console.log(index)
})
// array.forEach((value, index) => { 아래와 같이 화살표 함수로 사용할 수 있다 function 생략하고 => 를 넣어줌
//   console.log(index)
// })


array.forEach(function(value, index){ // for of 반복문과 같음
  console.log(value)
})
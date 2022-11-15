const 배열 = [273, 52, 103, 32, 57]

// forEach()
배열.forEach(function (value, index) {
  console.log(value, index)
  console.log(`${index}번째의 값 ${value}`)
})
// 아래와 같이 출력됨
// 273 0
// 0번째의 값 273
// 52 1
// 1번째의 값 52
// 103 2
// 2번째의 값 103
// 32 3
// 3번째의 값 32
// 57 4
// 4번째의 값 57


// filter()  true 또는 false를 리턴함  <= '비파괴적 함수' 원래의 배열을 파괴하지 않는 함수
// console.log(배열.filter(function (value, index) { // => [ 273, 52, 103, 32, 57 ] 배열의 모든 요소를 출력함
//   return true
// }))
// console.log(배열.filter(function (value, index) { // => [] 배열의 모든 요소를 출력하지 않음
//   return false
// }))
let 배여얼 = [273, 52, 103, 32, 57]
배여얼 = 배여얼.filter(function (value, index) { // => [ 273, 52, 103, 32, 57 ] 배열의 모든 요소를 출력함
  return value % 2 === 0 // => 짝수만 출력됨 이러한 형태로 사용됨
})
console.log(배여얼) // => [ 52, 32 ] 


// map() 새로운 배열을 만들어서 리턴함
let 배여어얼 = [273, 52, 103, 32, 57]
배여어얼 = 배여어얼.map(function (value, index) {
  return value + "!"
})
console.log(배여어얼) // => [ '273!', '52!', '103!', '32!', '57!' ]


// 화살표 함수

배여얼 = 배여얼.filter(function (value, index) {
  return value % 2 === 0
})
// function을 생략하고 => 로 변경
배여얼 = 배여얼.filter((value, index) => {
  return value % 2 === 0
})
// 내부에 있는 코드가 return을 하는 코드 하나라면 아래와 같이 { return }도 생략 할 수 있다
배여얼 = 배여얼.filter((value, index) => value % 2 === 0)



배여어얼 = 배여어얼.map(function (value, index) {
  return value + "!"
})
// function 제거 후 => 넣기
배여어얼 = 배여어얼.map((value, index) => {
  return value + "!"
})
// 활살표 뒤에 return 되는 코드가 하나라면 {}와 return 까지 생략
배여어얼 = 배여어얼.map((value, index) => value + "!") 


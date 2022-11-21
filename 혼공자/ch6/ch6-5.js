// 객체 기본값을 지정하는 내용
// const test = function (name, age, color) {
//   return `${name} : ${age} : ${color}`
// }
// console.log(test('구름', 7, '갈색'))


// 위 코드보단 아래의 코드를 선호
// const test = function (object) {
//   return `${object.name} : ${object.age} : ${object.color}`
// }
// console.log(test({
//   name: '구름',
//   age: 7,
//   color: '갈색'
// }))


// 객체 기본 매개변수 입력받는 값에 아무값도 들어오지 않았을 때의 값을 처음에 집어넣는 것
const test1 = function (name, age, color, status = '이상 없음') {
  return `${name} : ${age} : ${color} : ${status}`
}
console.log(test1('구름', 7, '갈색')) // => '구름 : 7 : 갈색 : 이상 없음'이 출력됨 // 입력 받는 값에 status 없음


// 아래코드에선 어떻게 기본 매개변수를 지정 할까
const test = function (object) {
  // 과거(1)
  object.status = object.status !== undefined ? object.status : '이상 없음'
  // 과거(2)
  object.status = object.status ? object.status : '이상 없음'
  // 과거(3)
  object.status = object.status || '이상 없음'

  // 현대(1)
  object = { status: '이상 없음', ...object }
  // 현대(2)
  fun = function ( {name, age, color, stauts = '이상 없음'} ) {
    return `${name} : ${age} : ${color} : ${stauts}`
  }

  return `${object.name} : ${object.age} : ${object.color}`
}
console.log(test({
  name: '구름',
  age: 7,
  color: '갈색'
}))

const dog = {
  name: '구름',
  age: 7,
  color: '갈색'
}

// 과거 1
dog.status = dog.status !== undefined ? dog.status : '이상 없음'

// 과거 2 => dog.status에 빈 문자열, 0과 같이 false로 반환되는 값이 오지 않는다면 사용
dog.stauts = dog.status ? dog.status : '이상 없음'

// 과거 3
dog.stauts = dog.status || '이상 없음'


// 현대 1
const dog1 = {
  name: '구름',
  age: 7,
  color: '갈색',
  status: '다리가 아파요'//가 있다면 2번째 없다면 1번째가 아래의 출력됨
}

const newDog = {
  status: '이상 없음',
  ...dog1 
// => dog1은 
// name: '구름',
// age: 7,
// color: '갈색',
// status: '다리가 아파요'//가 있다면 2번째 없다면 1번째가 아래의 출력됨 ...dog1을 아래의 쓰게되면 아래의 status가 위의 '이상 없음'을 덮어쓰게됨
// ...dog1이 status: '이상 없음' 위에 쓰면 결과가 달라짐 '이상 없음'덮어씀
}
console.log(newDog) // { status: '이상 없음', name: '구름', age: 7, color: '갈색'} 가 출력됨 => status를 입력 받지 못 했을 때
console.log(newDog) // { status: '다리가 아파요', name: '구름', age: 7, color: '갈색' } => status를 입력 받았을 때


// 현대 2
const test2 = function ({ 
  name, 
  age, 
  color, 
  status = '이상 없음'
}) {
  return `${name} : ${age} : ${color} : ${status}`
}

console.log(test2({
  name: '구름',
  age: 7,
  color: '갈색'
}))
// '구름 : 7 : 갈색 : 이상 없음'이 출력됨

const test3 = function (object) {
  object = { status: '이상 없음', ...object }
  return `${object.name} : ${object.age} : ${object.color} : ${object.status}`
}
console.log(test3({
  name: '구름',
  age: 7,
  color: '갈색'
}))

//를 아래와 같이 바꿔 쓸 수 있다 node.js에서 사용
const test4 = function (object) {
  const { name, age, color, status } = { status: '이상 없음', ...object }
  return `${name} : ${age} : ${color} : ${status}`
}
console.log(test4({
  name: '구름',
  age: 7,
  color: '갈색'
}))

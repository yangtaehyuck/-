// 익명 함수
// const f = function (매개변수, 매개변수) {
//   return 리턴값
// }

// 선언적 함수
// function f (매개변수, 매개변수) {
//   return 리턴값
// }

const isLeapYear = function (연도) {
  return   (연도 % 4 === 0)   // 4로 나누어 떨어지고
        && (연도 % 100 !== 0) // 100으로 나누어 떨어지지 않음
        || (연도 % 400 === 0) // 하지만 400으로 나누어 떨어짐
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`) // 윤년    true
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`) // 윤년 X  falsel
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`) // 윤년    true
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`) // 윤년 X  false

const min = function (배열) {
  let Min = 배열[0]
  for (let i = 1; i < 배열.length; i++) {
    Min > 배열[i] ? Min = 배열[i] : false
  }
  return Min
}
console.log(min([52, 273, 32, 103, 275, 24, 57]))


// const min = function (배열) {
//   let output = 배열[0]
//   for (const value of 배열) {
//     if (output > value) {
//       outpuut = value
//     }
//   }
//   return output
// }
// console.log(min([52, 273, 32, 103, 275, 24, 57]))


// const min = function (...배열) {
//   let output = 배열[0]
//   for (const value of 배열) {
//     if (output > value) {
//       outpuut = value
//     }
//   }
//   return output
// }
// console.log(min(52, 273, 32, 103, 275, 24, 57))  // 전개 연산자를 사용하여 아래와 같이 쓸 수 있다
//→ const a = [52, 273, 32, 103, 275, 24, 57]
//  console.log(min(...a))
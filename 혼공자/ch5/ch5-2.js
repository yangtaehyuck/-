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

// const isLeapYear = function (연도) {   // 연도에 아무것도 안들어갔을 때 현재의 연도가 들어가게끔 작성됨 ← 기본 매개변수 라고함
//   // if (typeof(연도) === 'undefined') {
//   //   연도 = new Date().getFullYear()
//   // }
//   연도 = typeof(연도) === 'undefined' ? new Date().getFullYear : 연도 → 3항 연산자를 사용하여 true일 때 올해의 연도가들어감 false일때 연도가 들어감
//   return (연도 % 4 === 0) && (연도 % 100 !== 0) || (연도 % 400 === 0)
// }
// console.log(isLeapYear()) // 올해가 윤년인지 알려줌

// 과거에는 위에 처럼 기본 매개변수를 직접 설정해 줬지만
// 요즘에는 아래와 같이 쓰면 끝남
// const isLeapYear = function (연도 = new Date().getFullYear()) {  <= 기본 매개변수 할당
//   return (연도 % 4 === 0) && (연도 % 100 !== 0) || (연도 % 400 === 0)
// }
// console.log(isLeapYear()) => 2022

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


// const min = function (...배열) {   <= 함수를 만들때 '...'배열 을 사용하였으므로 나머지 매개변수
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
//  console.log(min(...a))           <= 함수를 호출할때 '...'a 를 사용하였으므로 전개 연산자


// const max = function (배열) {
//   let output = 배열[0]
//   for (const 값 of 배열) {
//     if (output < 값) {
//       output = 값
//     }
//   }
//   return output
// }
// console.log(max([1, 2, 3, 4])) 매겨변수가 배열로 들어올때

// const max = function (...배열) { <= 나머지 매개변수를 사용하여 숫자로 들어온값을 배열로 받는다
//   let output = 배열[0]
//   for (const 값 of 배열) {
//     if (output < 값) {
//       output = 값
//     }
//   }
//   return output
// }
// console.log(max(1, 2, 3, 4)) 입력을 배열이 아닌 숫자로 받았을 때

const max = function (첫번째요소, ...나머지) {  //숫자면 1 [2, 3, 4] 배열이면 [1, 2, 3, 4] []이렇게 들어올듯
  if (Array.isArray(첫번째요소)) { // <= typeof(첫번째요소) === 'object' 와 같이 값이 배열인지 아닌지를 구분해줌
    let output = 첫번째요소[0]
    for (const 값 of 첫번째요소) {
      if (output < 값) {
        output = 값
      }
    }
    return output
  } else {
    let output = 첫번째요소
    for (const 값 of 나머지) {
      if (output < 값) {
        output = 값
      }
    }
  }
}
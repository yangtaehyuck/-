// 함수() → 함수를 호출 → 함수의 본문 실행 ex) alret() prompt() console.log() 이런것들도 함수이다
// 익명 함수
const f = function () {
  // f()를 만나면 이쪽으로 점프하게됨
  console.log('안녕하세요');
}

f(); // → f함수 호출 → f함수의 본문을 실행
//위의 처럼 함수를 만들면 사용 할 수 있음 → f() 로 사용할 수 있음
// f() 로 실행하면
// "안녕하세요"가 실행됨
// 함수가 끝나면 → 원래 위치로 돌아감 → 리턴

const g = function () {
  console.log(`안녕하세요 + ${x}`);
}

const x = 10;
g(); // 프로시저 형태의 함수 → 매개변수를 갖지 않는다 → g() 괄호안의 아무것도 없다
// 실행하면 → '안녕하세요 + 10' 이 출력됨 

// g(); 
// const x = 10; → 이렇게 g()를 먼저 실행하게 되면 x가 선언되기 전이므로 오류가남


// 수학적 함수
// f(x) = x + 5, f(1) = 1 + 5 = 6, f(2) = 2 + 5 =7
const h = function (x) {  // x → 매개변수 → 괄호 안에 오는 것
  return x + 5 // return 뒤에 값을 입력하면 그 값을 가지고 반환한다
}
console.log(h(1)) // → 6 이 출력됨
console.log(h(2)) // → 7 이 출력됨

// 코드의 재사용 → 추상화
const sum = function (input) {
  let output = 0;
  for (let i = 1; i <= input; i++) {
    output += i;
  }
  return output;
}

console.log(`합은 ${sum(10)}입니다.`)
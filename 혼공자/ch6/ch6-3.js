// 기본 자료형 → 스택에 값을 저장 → 속성과 메서드를 가질 수 없다.
// 숫자, 문자열, 불
const c = 10
c.value = 20 
c.value // => 출력하면 값이 안나옴 따라서 속성과 메서드를 가질 수 없음


// 객체 자료형 → 스택과 힙을 연결 → 속성과 메서드를 가질 수 있다.
// 함수, 배열, 객체 등등
const a = [] // 배열 속성 가질 수 있음
a.hi = 10 // => 10이 출력됨 
delete a.hi // => 삭제됨

const b = () => {} // const b = function () {} 와 같은 뜻임 화살표 함수로 function을 생략
b.value = 10
console.log(b.value) // 10이 출력됨 함수도 속성을 가질 수 있음


// 자료형 확인
const d = []
typeof(d) // => object
Array.isArray(d) // => true 괄호의 값이 '배열'이면 true를 출력
Array.isArray({}) // => false 객체 

const e = () => {} // 객체 자료형이라서 object로 출력될거라 생각하겠지만
typeof(e) // => function으로 출력됨
// 함수인지 알고 싶다면 
typeof(e) === 'function' //으로 확인 => true
// 함수는 일급 객체(first-class object)이다
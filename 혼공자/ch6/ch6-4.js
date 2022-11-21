const a = new Number(10) // 숫자 자료형 a를 Number()라는 함수 앞에 new라는 키워드를 사용하여 객체로 만듦
const b = new String('문자열') // 문자 자료형 b를 String()라는 함수 앞에 new라는 키워드를 사용하여 객체로 만듦
const c = new Boolean(true) // 불 자료형 c를 Boolean()라는 함수 앞에 new라는 키워드를 사용하여 객체로 만듦
typeof(a) // 출력하면 object가 나옴
typeof(b) // 출력하면 object가 나옴
typeof(c) // 출력하면 object가 나옴
a.value = 10 //을 추가하면 
a.value //를 출력하면 10이 나옴
// 이렇게 기본 자료형을 객체로 만들고 그 뒤에 .을 사용하여 여러가지 메서드들을 활용 할 수 있음


// 기본 자료형의 승급
const d = '안녕하세요'
a.length = 5 // 와 같이 아무 생각없이 쓰던 .length를 어떻게 쓰냐? new를 붙이지도 않았는데
// 위와같이 기본 자료형 뒤에 .을 찍는 순간 일시적으로 객체로 승급하게 된다
// 하지만 활용한 직후 바로 사라짐 다시 기본 자료형이 됨



// 프로토타입 => 뒤에 나오는 class때문에 많이 사용되지 않음
// prototype에 무언가를 추가 해주면 기본자료형에 추가적인 속성을 집어넣을 수 있다
String.prototype.value = 10

const e = '문자열'
e.value // => 10이 출력됨

// 사용 예시
String.prototype.contain = function (다른문자열) {
  return this.indexOf(다른문자열) >= 0
}
const f = '문자열'
console.log(`f.contain('문자'): ${f.contain('문자')}`)
// => f.contain('문자'): true 가 출력됨
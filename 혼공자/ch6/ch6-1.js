//객체와 배열의 차이
// 배열 => 배열 안에 들어있는 값을 요소(element)라고 함 ex) array배열의 0번째 요소는 100
const array = [100, 20, '문자열', true, function () {}, () => {}]  // 배열(문자열, 숫자, 함수, 불 등)  <= 객체의 일종임
// 배열 내부의 값을 볼때(접근할때) 
// => array[0] => 100 이렇게 대괄호 사용
// 배열의 값을 바꿀 때
array[0] = 200 // <= 이렇게 재할당해주면 값이 바뀜

// 객체 => 객체 안에 들어있는 값을 속성(property)라고 함 ex) object라는 객체의 'name 속성' 이라고 함
const object = {// 객체 <= 식별자(숫자로 시작하지 않고 앞에 $ _ 만 사용가능) 를 사용 → 키: 값,
//키: 값,
  name: '이름',
  age: 7,
} 
// 객체 내부의 값을 볼때(접글할때) 아래의 2가지로 사용
// => object['name'] → 이름
// => object.name → 이름
// => object.age → 7
// 객체의 값을 바꿀 때
object.name = '양태혁'// 배열과 같이 재할당해주면 됨
object.age = 23

const cat = {
  name: '청아',
  age: 6,
  bark: function () { // '익명 함수'로 메서드를 만듦 <= 익명 함수로 메서드를 생성하면 'this'를 사용 할 수 있음
    console.log(`${cat.name}가 짖습니다.`)
    console.log(`${this.name}가 짖습니다.`) // 위의 코드와 똑같이 실행됨 '청아가 짖습니다.'
    console.log(this) // 'this'를 실행시키면 아래와 같이나옴 object 자기자신이 호출됨
//=> {
//   name: '청아',
//   age: 6,
//   bark: [Function: bark],
//   sleep: [Function: sleep]
// }
  }, // bark라는 속성은 함수로 메서드(method)라고 부른다  <= 메서드로 속성에 포함됨
  sleep: () => { // 메서드를 '화살표 함수'로 만들 수 있음 <= 화살표 함수로 메서드를 생성하면 'this'를 사용하면 이상한 값이 나옴
    console.log(`${cat.name}가 잡니다.`)
  },
}
cat.bark() // 위의 bark라는 메서드를 호출 할 수 있다.
//=> '청아가 짖습니다' 라고 실행됨
console.log() // 아래의 콘솔로그도 메서드이다 생김새가 같음
cat.sleep()
// => '청아가 잡니다.' 가 출력됨

// this 바인딩 : this를 현재 객체와 연결하는 행위
// 익명 함수: this 바인딩을 한다.
// 화살표 함수: this 바인딩을 안 한다.

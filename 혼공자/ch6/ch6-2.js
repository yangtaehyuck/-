// 객체의 키와 값을 '정적'으로 생성한다 => 처음 만들 때 같이 만드는 것(객체를 생성할 때 한번에 만드는 것)
const pet = { // <= 여기서 의문 const로 만들었는 데 어떻게 추가하고 삭제 할 수 있는가?
  name: '구름',
  age: 8
}
// pet = {} 이렇게 만드는 것은 안되지만 그 전에 만들어 놓은 것은 지지고 볶고 해도 됨 
// 객체도 용량이 커서 '힙'에 올라간다 '힙'에 한번 올라간 녀석은 '힙' 내에서 이리저리 바꾸는 것은 상관없다
// 스택에서는 불가

// 객체의 키와 값을 '동적'으로 생성한다 => 나중에 만드는 것
pet.color = 'brown' // => 동적으로 속성 추가
// 객체.속성 = 값 / 객체['속성'] = 값

// 객체의 키와 값을 동적으로 제거한다
delete pet.color
// delete 객체.속성 / delete 객체['속성'] => delete는 키워드 연산자이다

console.log(pet) // => { name: '구름', age: 8, color: 'brown' }


// 확인 문제
const book = {
  name: '혼자 공부하는 파이썬',
  price: 18000,
  publisher: '한빛미디어'
}

const object = {
  ko: '빵',
  en: 'bread',
  fr: 'pain',
  es: 'pan',
  lang: {
    ko: '한국어',
    en: '영어',
    fr: '프랑스어',
    es: '스페인어'
  },
  print: function (lang) {
    console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다.`)
    // this.ko의 this는 object객체 전체를 가르키므로 ko = '빵'이 됨
    // this.lang[lang]은 object객체 안의 lang 안에 [lang]은 아래에서 입력된 es가되므로 '스페인어'가 됨
    // this[lang]은 lang은 입력받은 es가 되므로 this.es가 된다 'pan'
  }
}
object.print('es') //을 출력하면 object객체안의 print메서드 function (es)가 들어감
// => 빵는 스페인어로 pan입니다.
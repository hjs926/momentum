# 자바스크립트 모멘텀클론코딩

## 2.1 Basic Data Types

- 자바스크립트 데이터 타입
- number: 숫자
- string: 문자열

## 2.2 Variables

const(constant) >> 상수 = 바뀌지 않는 값
var(variable) >> 변수

일반적으로 다음 단어의 첫 문자를 대문자로 사용한다
ex) VeryLongVariableName // 길이가 긴 변수를 선언할 때 Camelcase
cf) Python에서는 very_long_variable_name

![image](https://user-images.githubusercontent.com/48309309/160383062-edad82a1-d5c4-4c04-b69d-519d05ffa43a.png)

## 2.3 const and let

Variable을 만드는 방법

1. const – 상수, 생성 후 바꿀 수 없음

2. let – 생성할 때 사용, 생성 후에 값을 바꿀 수 있음, 재선언 X, 재할당O
   ex) let myName = "ck";  
    my Name = "k"; // 변경할 때 선언 하지 않는다
3. var – 어디서든 변경할 수 있음, 재선언O, 재할당O, 실수로 값을 업데이트해도 알아차릴 수 없는 단점(구버전)

![image](https://user-images.githubusercontent.com/48309309/160383092-4945764a-73be-4409-b5a5-ab5dab3e69cb.png)

always const sometimes let never var

## #2.4 Booleans

true false
undefined = 값이 정의되지 않음
null = 값이 없음

파이썬에서는 None, False

![image](https://user-images.githubusercontent.com/48309309/160383235-e3f60247-3215-4b57-a0b7-44e240f25381.png)

![image](https://user-images.githubusercontent.com/48309309/160383239-8d91ac1f-d88a-48dc-8396-9d31ebce7fd7.png)

## 2.5 Arrays

const a = 2; 이렇게 있으면 a = 4; 이렇게 바꾸는건 안된다.
하지만 배열과 같은 경우에는 내용물 안의 요소들을 변경이 가능하다.
박스로 생각하면 const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
이렇게 선언을 하면 이후에 daysOfWeek = ["hi"]; 이렇게 수정하는 건 불가능합니다.
왜냐하면, 박스 그 통째로 바꾸려고 하기 때문입니다.
하지만 박스 안의 내용물들을 추가하거나 삭제할 수는 있습니다.

데이터를 나열하기 위한 방법 중 하나
항상 [] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터 정렬이 가능하다.
ex) const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

만약, 위의 변수에서 5번째 element 값을 알려주세요. 라고 한다면 어떻게 출력해야 할까?
ex) console.log(daysOfWeek[4]) 라고 해야 5번째 값을 출력할 수 있다.

왜?? 컴퓨터는 숫자를 0부터 세기 때문에, “mon”은 0번째라고 생각하면 된다.
// JS의 주석처리는 //

위의 상태에서 daysOfWeek이란 변수에 하나의 값을 더 넣고 싶다면 다음과 같이한다.
ex) daysOfWeek.push(“holiday”)
// .push는 추가하는 기능.

![image](https://user-images.githubusercontent.com/48309309/160383267-aaa2c417-45c5-43bc-ab05-0494e639caae.png)

## 2.6 Objects

- 설명이 필요하지 않은 데이터 리스트들을 array로 [ ]
- 설명이 필요한 정보가 담긴 데이터 리스트들은 object로 { }

property를 불러오는 방법은 2가지가 있다.

1. console.log(player.name); => tomato
2. console.log(player["name"]); => tomato
   property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.

   ![image](https://user-images.githubusercontent.com/48309309/160383283-abfe6415-70a6-4e4d-904b-7d414e326787.png)

## 2.7 Functions

function은 계속 반복해서 사용할 수 있는 코드 조각이다.

![image](https://user-images.githubusercontent.com/48309309/160383300-2d65e78d-0e2f-4b5a-a57f-d746e64c4f12.png)

소괄호 안에 작성하는 것은 실행버튼을 누를 때마다 발생한다.
sayHello(); // 이렇게 쳐서 실행할 수 있다.
argument(인수)는 function을 실행하는 도안 정보를 function에게 보낼 수 있는 방법으로
소괄호 안에 위치한다.

function 선언:
function 함수명() {
실행코드
}

funtion 실행: 함수명();
argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.

## 2.8 Functions II

![image](https://user-images.githubusercontent.com/48309309/160383365-1d2c27b8-7c19-4151-8b6a-aba53de1345a.png)

![image](https://user-images.githubusercontent.com/48309309/160383373-20f9ded0-38b3-4163-9684-2719def83125.png)

인수를 받기 위해서 함수를 선언할 때 function 함수명(variable명) {} 를 작성한다.

## 2.9 Recap

let과 const의 차이는 let은 업데이트를 할 수 있다는 것이다.
let을 업데이트 할 땐 다시 let을 붙이지 않아도 된다.

boolean은 딱 두가지 옵션만 있다. true, false

null은 아예 비어있음을 정의 해버리는 것이다.
undefinde는 변수에 값을 부여하지 않은 상태이다.

array 만들기
ex) const days = [1, 2, "안녕하세요" , 'abc' , false , null] 호출시에는
console.log(days[2]) // 인덱스 2번인 "안녕하세요"가 로그에 출력될 예정

array에 무언갈 업데이트 하고 싶을 때에 직접 변경하기
ex) days[2] = "water" // days라는 변수의 오브젝트 인덱스 2번인 "안녕하세요"를
"water"로 교체한다는 뜻.

.push() 로는 추가를 할 수 있음.
ex) days.push('생선') // days라는 변수에 '생선'이라는 string 값을 추가해준 것.

const의 object 값을 변경하는 행위는 const 자체를 변경하는 것이 아니고 objects값을
변경하는 것이기 때문에 재할당 오류와 관계없다.

## 2.10 Recap II

const calculator = {
add:function(x, y){
console.log(x + y);
},
min:function(x, y){
console.log(x - y);
},
mul:function(x, y){
console.log(x \* y);
},
div:function(x, y){
console.log(x / y);
},
squ:function(x, y){
console.log(x \*\* y);
}
};
calculator.add(1, 2);
calculator.min(3, 4);
calculator.mul(5, 6);
calculator.div(7, 8);
calculator.squ(9, 10);

![image](https://user-images.githubusercontent.com/48309309/160383414-2b6c92c1-6ac8-4710-b15f-6ffb6205cc67.png)

## 2.11 Returns

계산기 안에서 값을 콘솔로 보내는 것이 아니라 return을 통해 함수를 호출한 녀석에게
다시 주어서 그걸로 또 다른 함수를 호출하는 데 쓴다.
이걸 이용해서 앞선 연산의 값이 뒤의 연산과 연관되고 체인처럼 서로 얽혀있을 수 있다.

![image](https://user-images.githubusercontent.com/48309309/160383440-adcc7cf9-fcdb-47e1-bacd-958e7e0b432d.png)

## 2.12 Recap

alert 브라우저를 열 때 알림처럼 결과를 보여줌
console.log는 콘솔에 결과를 보여주기 위한 것

function안에서 return과 추가 작업을 입력하면
retrun만 작업하고 추가 수행은 이뤄지지 않는다.

만약 return 앞에 기타작업이 있다면 이 작업은 수행된다
즉, return까지만 수행된다.

ex) return: 만들어진 망고주스를 꺼내고 기계를 끄는 것, 말 그대로 다시 돌려준다는 의미

return a + b; 아래의
bye bye는 실행되지 않는다

![image](https://user-images.githubusercontent.com/48309309/160383457-77b42362-d203-4786-b331-a972422997d9.png)

## 2.13 Conditionals

prompt();라는 함수는 사용자에게 창을 띄어 값을 받는다.
prompt();를 사용하면 답을 할때까지 코드의 실행을 멈춘다. 매우 오래된 방법, CSS로 바꾸지 못함
parseInt() 는 string을 number로 변환하는 역할

const age = prompt("how old are you?");
console.log(typeof age);

typeof라는 키워드를 쓰면 type을 볼 수 있다.
ex) prompt();에서 숫자를 입력해도 string이라고 뜬다. (string이 default이기 때문이다)
ex) console.log(typeof "15", typeof parseInt("15")); --> string number
참고로 숫자가 아닌게 입력이 되면 반환이 안된다. NaN(Not a Number)

const age = parseInt(prompt("how old are you?"));
console.log(age);

## 2.14 Conditionals part Two

isNan()은 NaN을 판별하는 방법 – true, false
const age= parseInt(prompt (“How old are you?”));
console.log(isNaN(age));
숫자입력하면 false
글자입력하면 ture

if(condition){
실행코드=true ---실행
실행코드=false ----다음 else 값 실행
} else{

}
condition은 boolean으로 판별가능해야 한다, (true , false)

if(isNaN(age)){
console.log("please wirte a number");
} else{
console.log("Thank you for writing your age");
}

## 2.15 Conditionals part Three

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

![image](https://user-images.githubusercontent.com/48309309/160383485-4d10574c-9fa1-45a4-9b49-c4371f0c3a49.png)

## 2.16 Recap

==연산자는 binaryCode로 구분해서 값만 비교
===연산자는 유형도 포함해 비교해서  
===를 주로 사용하는걸 추천한다.
ex)
0==false --> true
false(deafult:0) == 0 --> true(same)

0===flase --> flase
false(boolean) === 0(number) --> false(difference))

= --> value를 할당
=== --> 같은지 확인
!== --> 같지 않음을 확인

## 3.0 The Document Object

JS가 HTML을 불러 올 수 도 있고, JS에서 수정도 가능하다.
console에서 document를 입력하면 작성한 HTML을 가져올 수 있다.
document는 브라우저에 존재하는 objet이다.
console에서 console.dir(document)를 호출해 보면,
document.title이 HTML에서 정의한 title이랑 같다.
document.body를 호출하면 body 항목만 가지고 온다.

## 3.1 HTML in Javascript

document에서 js로 element를 굳이 저렇게 가져오는 이유, title을 변경할 거라면 html에서
바로 변경하면 되는데 굳이 js에서 변경하는 이유

- 서버와 통신을 하거나 다른 복잡한 일들을 처리할 때 js 파일에서 처리하게 되는데 그때 HTML의 element들을 자유자재로 다룰 수 있게 되야 여러 복잡한 처리를 원활하게 가능

document.getElementById("title")은 html에 있는 id를 불러올 수 있다.
js에서는 html이 표현하는 object를 보여준다. getElementById()

title.innerText = "got you"처럼 js에서 바꾸기 가능 id를 추가했기에 가능.
모든 것들은 html에서 항목들을 가지와서 js에서 변경한다.

## 3.2 Searching For Elements

getElementById()
getElementsByClassName()
//tag = anchor, div, section, button 등

querySelector는 name 이나 ID를 제한하지 않고 CSS선택자를 사용하여 요소를 찾는다.
(#sections) -> sections 아이디를 가진 요소를 찾습니다.
(.section) -> section 클래스명을 가진 요소를 찾습니다.

- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  단 하나의 element를 return해줌
  ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴

- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
  ⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
  하지만 후자는 하위요소 가져오는 것을 못하므로 전자를 주로 사용한다.

![image](https://user-images.githubusercontent.com/48309309/160383532-a6bb21a8-9275-4a2c-8485-5e310a92f0a5.png)

![image](https://user-images.githubusercontent.com/48309309/160383537-f4f789e2-af97-4e1c-8ee4-fcf31ade657f.png)

## 3.3 Events

![image](https://user-images.githubusercontent.com/48309309/160383573-42a9e37f-aa89-4b4e-b159-1689dc1bc0c1.png)

- element의 내부를 보고 싶다면 console.log 대신에 console.dir를 사용한다.
- JS에 function만을 넘겨주고, 유저가 클릭할 경우에 JS가 실행버튼을 대신 누른다.

- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가
  document에 접근할 수 있게 해줌

- element의 내부를 보고 싶으면 console.dir() 기본적으로 object로 표시한 element를
  보여줌(전부 js object임) 그 element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것 모든 event는 js가 listen할 수 있음

- eventListener : event를 listen함 → js에게 무슨 event를 listen 하고 싶은지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임
  → 무언가를 해줘야함

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길
  바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- () 이 두 괄호를 추가함으로써 함수를 실행하라는 거라고 생각하면 된다.

- title.addEventListener("click",handleTitleClick)
  여기서 handleTitleClick에 ()을 붙이지 않는게 정말 중요하다.
- addEventListener 메서드 안에 들어가는 함수는 콜백함수

## 3.4 Events part Two

![image](https://user-images.githubusercontent.com/48309309/160383614-f72f11f3-f74c-419b-bc9b-32be12535195.png)

- event를 찾는 가장 좋은 방법은 구글에 ex) h1 html element mdn 검색
- element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용
- 대부분의 경우 style은 CSS를 통해 변경한다.

## 3.5 More Events

![image](https://user-images.githubusercontent.com/48309309/160383643-ca5c516d-e1bf-4d77-ac2b-b617829a9656.png)

- document의 body, head, title는 중요하기 때문에 document.body.style~의 명령이 허용
  되지만 div 등은 호출이 되지 않는다.
- 나머지 element들은 querySelector나 getElementById로 불러온다.
- title.onclick = handleMouseEnter;
- title.addEventListener(“mouseenter” , handleMouseEnter);
- 위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
  removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

## 3.6 CSS in Javascript

- currentColor에 현재 색상 값을 저장하고 이후 newColor 변수를 선언해서 if문에 따라
  어떤 색상을 지정할지 값을 할당한다.
- currentColor는 getter로써, 최근 color값을 복사하는 역할을 한다. 의미론적으로 봤을 때 cosnt로 선언하는 것이 적절하다.
- newColor는 setter로써, 변수에 대입된 색상값을 h1,style.color에 최종적으로 할당하는
  역할을 한다. 값이 변경될 수 있음을 염두에 두기 위해 let으로 선언하는 것이 적절하다.
- 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻
- 함수내에서 선언된 변수는 함수 밖에서는 존재하지 않는다 그렇기 때문에
  const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을
  받을 수 있다.

  ![image](https://user-images.githubusercontent.com/48309309/160383661-c02f0b1e-834c-406a-9742-4c62b267eb99.png)

1. click event 발생 및 함수 실행
2. currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3. newColor 변수 선언
4. currentColor 현재 값 확인
5. 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6. 마지막으로 h1.style.color에 newColor값 대입 (setter)

## 3.7 CSS in Javascript part Two

- style에 적합한 도구는 CSS
- animation에 적합한 도구는 JS

![image](https://user-images.githubusercontent.com/48309309/160383690-60b6972d-a3fc-4c0a-b2cf-00add6452812.png)

1. HTML파일은 CSS문서와 JS문서를 임포트 하고있음.
2. CSS에 .active라는 class를 생성해주고
3. addEventListener로 h1을 클릭하면 handleTitleClick 함수가 작동
4. handleTitleClick 함수는 h1의 class name을 "active" 로 바꿈
5. .active의 color는 토마토색이기 때문에 토마토 색이 됨

## 3.8 CSS in Javascript part Three

![image](https://user-images.githubusercontent.com/48309309/160383716-a3cb7f40-063d-4b42-a100-7f5d2bc9d5b7.png)

- classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
- className은 이전calss를 상관하지 않고 모든 것을 교체한다.
- classList를 이용하는건 js에서 건드리는건 HTML element가 가지고있는 또하나의
  요소 사용하는 것이다.
- contains은 우리가 명시한 class가 HTML elment의 class에 포함되어 있는지 말해준다.
- toggle은 토큰이 존재하면 토큰제거, 토큰이 존재 하지 않으면 토큰 추가
- ex) toggle은 h1의 classList에 clicked class가 이미있는지 확인하여 만약있다면
  toggle이 clicked를 제거해준다 만약 class name이 존재하지 않는다면
  toggle은 classname 추가한다.

## 4.0 Input Values

![image](https://user-images.githubusercontent.com/48309309/160383759-c440b533-9049-482b-a6c2-e743598d9bb2.png)

## 4.1 Form Submission

- JavaScript에서 구현하는 대신 할 수 있다면 HTML의 기본 속성을 최대한 이용하기

## 4.2 Events

![image](https://user-images.githubusercontent.com/48309309/160383782-3614e089-ec26-4338-833d-556c69bb6e08.png)

function onLoginSubmit(event){
event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
// event object는 preventDefault함수를 기본적으로 갖고 있음

loginForm.addEventListener("submit", onLoginSubmit);
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함.
// 해당 인자는 event object를 담은 정보들

- form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
- preventDefault() 함수를 추가함으로ㅆ 브라우저의 기본 동작을 막을 수 있다.
- 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다.
- 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
- JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다.
- ex)누가 submit 주체인지, 언제 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
  #4.3 Events part Two
- addEventListener 안에 있는 함수는 직접 실행하지 않는다
- 브라우저가 실행시켜주고, 브라우저에서 해당 이벤트에 대한 정보 object를 가지게 된다.
- addEventListener의 함수에서 object에 대한 자리만 할당해주 해당 이벤트가 발생시킨
  정보들에 대한 object들을 볼 수 있다!
- 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않게 하게 위해선 preventDefault를 이용하여 막을 수 있다!

## 4.4 Getting Username

![image](https://user-images.githubusercontent.com/48309309/160383803-3982fa0b-adb4-4b88-b4b7-3af10da4b2f0.png)

- greeting.innerText = “Hello” + username;
- geeting.innerText = `hello ${username}`; (백틱 사용)

## 4.5 Saving Username

- lcoalStorage 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
- lcoalStorage.setItem("username", "nico");
- lcoalStorage.getItem("username")
- lcoalStorage.removeItem("username")

## 4.6 Loading Username

- 최종으로 목표하는 것은 인풋에 텍스트를 입력하고 submit 버튼을 클릭했을 때 그에 대한 값이 local storage에 저장되어 그것을 보는 것인데, 만약 loginInput.value를
  onLoginSubmit 함수 내부가 아닌 외부에서 선언하면 local storage에 저장을 못한다.

## 4.7 Super Recap

![image](https://user-images.githubusercontent.com/48309309/160383829-c9800be3-e7bf-4298-8ef2-00e7fbec4f40.png)

- event가 원래 하는 행동을 멈추기 event.preventDefault();
- form을 다시 숨겨주기 loginForm.classList.add(HIDDEN_CLASSNAME);
- loginInput.value를 username이라는 변수로 저장해주기

![image](https://user-images.githubusercontent.com/48309309/160383850-a2dfb8ba-f31f-4a9d-b4ba-179e5354c731.png)

- username 값을 username 이라는 key와 함께 local stroage에 저장하기
- paintGreetings 함수 호출하기
- username이라는 인자를 하나 받고 있고 이 함수가 하는 일은 비어있는 h1 요소 안에
  `Hello ${username}` 이라는 텍스트를 추가해준다.
- 그 다음에 hidden이라는 클래스 명을 제거해준다

![image](https://user-images.githubusercontent.com/48309309/160383873-087ee807-44e0-488f-982b-e7c36a7a41e1.png)

- local strage에서 키를 찾으려고 했는데 키를 찾으려고 했는데 찾을 수 없었고 그 말은 savedUsername 값이 null 이란 이야기다.
- 그럼 이 조건이 참이되고 폼의 히든 클래스를 제거해서 폼이 화면에 표시되고
- addEventListner의 submit이 실행된다.

## 5.0 Intervals

- interval = 매번 일어나야 하는 무언가
- setInterval(실행할 함수, 실행할 함수의 주기)

## 5.1 Timeouts and Dates

![image](https://user-images.githubusercontent.com/48309309/160383903-cadf9201-c207-4c7a-8f12-ad393bd88424.png)

- setInterval(sayHello, 1000);
- sayHello() 라는 펑션을 1초마다 반복한다는 의미.
- 단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.
- setTimeout(sayHello, 1000); - 1초 기다렸다가 한번만 실행.

## 5.2 PadStart

## 5.3 Recap

![image](https://user-images.githubusercontent.com/48309309/160383961-d2785459-c4eb-430d-a144-6ccff03d86bb.png)

![image](https://user-images.githubusercontent.com/48309309/160383942-74f02a32-c625-42bd-9ce5-d0ee61040b3d.png)

- setInterval 사용하지 않으면 반복되지 않는다.
- setTimeout(sayHello,1000);는 함수를 바로 실행하고 싶지않을 때 사용
- getHourse().padStart(2,"0") 는 01로 나오게 하기 위한 함수
- padStart(2,"0") 2는 두글자가 되지않으면 0을 앞에 추가한다 라는 의미임.
- 뒤에 추가하고싶으면 padEnd를 사용하면됨.

## 6.0 Quotes

![image](https://user-images.githubusercontent.com/48309309/160383974-9ac842d2-7884-4f21-8ae8-e6b143a8e736.png)

- Math.floor는 소수점을 버리는 것(버림) ex) 1.1 -> 1
- Math.ceil은 소수점을 올리는 것(올림) ex) 1.1 -> 2
- Math.round는 소수점을 반올림 ex) 1.6 -> 2

## 6.1 Background

![image](https://user-images.githubusercontent.com/48309309/160383995-426fadab-0116-483b-bcfe-d83886602f50.png)

- appendChild를 사용할 때 body에 넣고 싶은 위치에 정확히 넣으려면 insertBefor()
  메소드를 사용하면 된다. 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다.

- const h2 = document.querySelector("#clock")
- document.body.insertBefore(bgImage, h2);
- 두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 싶은 노드이고 h2는 참조할 노드입니다. 즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가 된다.

## 6.2 Recap

1. Math 객체 기능

- Math.random() 0부터 1사이 무작위의 값을 반환해줌
- Math.floor() 내림
- Math.ceil() 올림
- Math.round() 반올림

2. JS에서 html 요소를 생성

- createElement(" ")
- document.createElement("img")일 경우 html 내에 img 태그를 생성
- appendChild() // 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
- prependChild() // 반대로 앞에서 기입

## 7.0 Setup

1. html

1) Todo-list 를 만들기를 원하니 html 에 form 태그로 구조를 만들어 준다.
   나중에 JavaScript에서 만지기 쉽게 id는 todo-form으로 설정
2) form 자체는 submit이라는 기본 기능을 내장하는 하나의 묶음 밖에 되지 않는다.
   todo-list에 무언가 기입하는 것을 원하기 때문에 form 태그 안에 input 태그를 넣어
   'text'를 타이핑할 수 있는 기능을 추가한다.
3) 그 밑에 ul 태그를 생성하여 todo-list에 작성 된 text가 저장 및 나열될 수 있게 한다.

2. JavaScript

1) 앞에 html에서 만든 구조 3가지 ('todo-form', 'todo-form 안의 input', 'todo-list') 에 접속하기 위해 항상 길게 타이핑하는 것은 비효율적이므로 단축을 위해 각각 변수로 설정한다.
2) 이전 greeting 강의에서 form 태그에서의 event는 submit를 발생시키고, 브라우저는 기본값으로 설정되어 있는 새로고침을 하게 된다. todo-list를 작성한다고 새로고침 되는 것을 원치 않기 때문에(todo-list를 1,000번 작성한다고 가정한다면 불필요한 새로고침이 1,000번 발생하고 1,000번의 랜덤한 이미지가 로드될 것이다. -> 데이터적으로 비효율적, 시각적으로 불편) event.preventDefault() 로 기본값을 없앤다.
3) text 상자 안에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해
   toDoInput.value = ""; 을 통해 value를 빈 텍스트로 한다.
4) text 상자를 비게 하는 것은 좋은데 그 전에 이용자가 입력한 텍스트를 저장해야 나중에
   ul태그 안에 사용할 수 있기 때문에 toDoInput.value = ""; 로 기입한 텍스트가 사라지기
   이전에 const newTodo = toDoInput.value; 를 정의하여 기입한 텍스트가 newTodo라는
   값에 저장되게 한다.
5) 앞의 세 가지 동작(기본값방지, 텍스트 저장, text상자비우기)는 한번에 이루어지는 세트이기때문에 효율성 및 편의를 위해 함수로 묶어준다.
   function handleTodoSubmit() {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   }
6) todo-form 안에서 submit이 발생하는 특정 상황에서 함수handleTodoSubmmit을 실행 시키기 위해
   toDoform.addEventListner("submit", handleTodoSubmit); 을 기입한다.
   (함수 handleTodoSubmit이 항상 실행되고 있는 상태라면 text 창은 항상 비어있는 상태 일 것이기 때문에)

## 7.1 Adding ToDos

- append()가 추가할 수 있는 종류가 더 많다. (문자열 가능)
- appendChild()로는 객체만 추가할 수 있다.
- li.append("추가해주세요") → (가능)
- li.appendChild("추가해주세요") → (불가능 – typeError)

## 7.2 Deleting To Dos

![image](https://user-images.githubusercontent.com/48309309/160384024-169f13a4-04f2-43d3-a634-9a4cd8aaebf0.png)

1. JS에서 html 내부에 button 태그 만들기

1) const button = document.createElement("button");
   // html에 button 태그를 생성할 수 있도록 button이라는 객체 정의
2) button.innerText = "❌"; // 사용자가 버튼을 누르면 텍스트가 삭제되는 기능이 있다는 것을 인식시키기 위해 버튼 내부 텍스트를 "❌"로 정의 (윈도우 기준: window 키 + . )
3) button.addEventListener("click", deleteToDo); // 버튼에서 이벤트가 발생했을 때 삭제 기능을 담당하는 함수가 실행되도록 한다. 여기에선 "click"이 발생 시, deleteToDo함수가 실생되도록 함

2. 삭제 기능을 담당하는 함수 생성

1) const li = event.target.parentElement; // 이벤트가 발생했들때.해당객체를지정하여.그것의부모태그를지정;
2) li.remove(); // 위에서 지정된 것을 삭제;

3. 정리하면

1) button.addEventListener("click", deleteToDo); 에서 클릭이 발생하면 deleteToDo함수가
   실행된다.
2) function deleteToDo(event) { const li = event.target.parentElement; li.remove(); }

## 7.3 Saving To Dos

![image](https://user-images.githubusercontent.com/48309309/160384056-2aa9f8f4-3625-4bac-a8fb-fd20baeefd52.png)

- STRINGIFY = 변수 등을 문자열로 바꿈, PARSE = 문자열을 JSON으로 바꿈
- localstorage 에서는 문자열만 저장할 수 있다

## 7.4 Loading To Dos part One

- local storage는 string format 밖에 지원을 안해서 뭐든 string으로 변환 시킨다.
- local storage에 array로 저장이 안되기 때문에 JSON.stringify로 array처럼 생긴 string으로 저장한 후 다시 JSON.parse 이용해 array로 꺼내는 방법
- array.foreach는 받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있다.

## 7.5 Loading To Dos part Two

- JSON.stirngify(): JS의 object 나 array 등을 string으로 변환
- JSON.parse(): string이 아닌 JS에서 사용가능한 object로 변환

## 7.6 Deleting To Dos part One

- object형태로 localstorage에 넣기

## 7.7 Deleting To Dos part Two

![image](https://user-images.githubusercontent.com/48309309/160384077-fcd7bb31-a764-4750-933f-f2f29069cc14.png)

- forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행한다

![image](https://user-images.githubusercontent.com/48309309/160384101-9972ffdf-d416-4136-be38-eedefd7f314f.png)

- filter를 사용해서 바나나를 지우기 sexyFilter() 안에 인자 이름은 아무거나 사용해도 된다.

![image](https://user-images.githubusercontent.com/48309309/160384139-90b51ea6-6a48-4ce2-b78f-1cfcdd4eaf11.png)

- 1000보다 큰수를 모두 제거하기

![image](https://user-images.githubusercontent.com/48309309/160384175-3a272ca8-8ad9-40f3-bc2b-a88e8f244de6.png)

## 7.8 Deleting To Dos part Three

![image](https://user-images.githubusercontent.com/48309309/160384230-1f57a948-b895-4356-8a11-0a562f67131d.png)

## 8.0 Geolocation

![image](https://user-images.githubusercontent.com/48309309/160384269-56642edf-ac3c-40c3-bbcb-f737c972ba25.png)

## END

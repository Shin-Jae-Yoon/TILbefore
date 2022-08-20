## 코딩애플 JavaScript 입문과 웹 UI개발

<br><br>

### Array, object

<br>

#### Array 자료형

-   `let 변수 = [];` 대괄호 이용, **순서O**
-   변수 하나에 여러 자료 저장하는 쉬운 방법

```javascript
let car = ['소나타', 50000, 'white'];
car[0] = ['아반떼'];
console.log(car[0]);
console.log(car[1]);

// 아반떼
// 50000
```

<br>

-   순서 있으니까 **정렬 가능** (숫자 -> 영어 -> 한글 순)

```javascript
let car = ['소나타', 50000, 'white'];
car.sort();
console.log(car);
// [50000, 'white', '소나타']
```

<br>

-   순서 있으니까 중간에 **자르기 가능** (**슬라이싱**)
-   `slice(n, m)` : n부터 m 전까지

```javascript
let car = ['소나타', 50000, 'white'];
console.log(car.slice(1, 3));
// [50000, 'white'] 1부터 2까지네
```

<br>

-   자료검색도 가능, 맨앞/맨뒤에 자료추가 가능

<br>

#### object 자료형

-   `let 변수 = {key1: value1, key2: value2};` 중괄호 이용, **순서 X**
-   이름을 **key**, 자료를 **value**라고 함.
-   `key: value` 형태로 저장가능한 것이 장점
-   실제로 object 자료형에 저장되는 자료는 value만 저장되고 key는 이름일 뿐임

```javascript
let car2 = {name: '소나타', price: 50000};
console.log(car2);
// { name: '소나타', price: 50000 }

console.log(car2['name']);
console.log(car2.name);
// 소나타
// 소나타

car2.price = 60000;
console.log(car2.price);
// 60000
```

<br>

#### array / object 차이

-   Array 자료형 : 순서대로 자료 저장 가능, `순서 개념 O`, `따라서 자료간 정렬 가능`
-   Object 자료형 : 자료에 이름 붙혀서 저장 가능 `순서 개념 X`, `따라서 인덱싱 불가`

ex) 쇼핑몰 제작 시, 상품 정보들을 10개, 20개 보관해야 한다고 하자. 뭐 쓸래? <br>
sol) object 쓰는게 좋을 듯. 예를 들어, 가격을 꺼낸다고 하면 몇 번째에서 꺼낼래? 순서보다 prcie 이름을 기억하고 자료를 꺼내는게 편함.

<br>

### 웹서비스 방식

실제 웹서비스는 유저가 내 사이트에 접속했을 때 html 파일을 보내주는 것이 끝이다. 어떤 사람이 접속하면 나의 html 파일 보여주는 원리이다. 이때 **서버에서 유저에게 html 파일을 보내줄 때 방식이 두 가지가 있다.** html 파일을 어디에서 완성해주느냐에 따라 server-side / client-side로 나뉜다.

1. **server-side rendering**

    **완성된 html 파일을 서버에서 보내는 방식**. 예를 들어, 쇼핑몰 상세페이지를 만든다고 하면 소나타, 50000원 이런식으로 미리 다 채워서 html 파일 만들고 보내준다. 서버가 html 파일 다 만들어야해서 서버가 귀찮다.

<br>

2. **client-side rendering**

    **텅 빈 html 파일 + 데이터를 보내는 방식**. 이때 html 완성은 javascript하고 하도록 한다. 유저의 브라우저에서 js가 이리저리 일을 할 것 이다. 자동차 자리에 소나타 자료를 넣고 가격 자리에 50000원 넣고 이런식으로 클라이언트 단에서 html 파일을 완성해준다. 서버가 편하다. <br>

    level3.html 실습에서 `let car2 = { name: '소나타', price: [50000, 3000, 4000]};` 여기에서 `document.querySelector('.car-price').innerHTML = car2.price[0]` 데이터를 car-price 클래스에 박아넣고 있었다. 이것이 client-side rendering을 하고 있는 거이다. 이때, **html에 데이터를 꽂는 행위를 데이터바인딩**이라고 한다. 데이터바인딩 쉽게 해주는 js 라이브러리가 바로 **jQuery, React, Vue** 등등 이다.

<br><br>

### Select 01 : 인풋 다루기

기본적으로 ,`<select>` 사용법은 [input](https://github.com/Shin-Jae-Yoon/TIL/tree/master/Language/JavaScript/lecture/codding_apple/LEVEL1#input-%ED%83%9C%EA%B7%B8%EC%97%90%EC%84%9C-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-input-%EC%9D%B4%EB%B2%A4%ED%8A%B8) 태그 사용법과 동일하다. input 대신 select를 사용하는 이유는, input은 자유로운 반면 **select는 선택지를 제공해줘서 데이터를 쉽게 관리**할 수 있기 때문이다.

<br>

input과 사용법이 비슷하기에 역시 **value**를 가져와서 처리할 수 있고 이벤트에 `input`, `change`를 사용가능하다. 아래 코드를 보면 select에 이벤트 발생 시 value를 가져와서 문자열을 비교해주고 해당하는 코드를 조작하고 있다. input 이벤트는 값에 변화가 생길 때마다, change 이벤트는 포커스를 잃을 때마다처럼 `<input>` 에서 썼던 것과 동일하다.

```html
<form class="container my-5 form-group">
    <p>상품선택</p>
    <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
    </select>
    <select class="form-select mt-2 form-hide">
        <option>95</option>
        <option>100</option>
    </select>
</form>
```

```javascript
document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        let value = this.value;

        if (value == '셔츠') {
            document
                .querySelectorAll('.form-select')[1]
                .classList.remove('form-hide');
        } else {
            document
                .querySelectorAll('.form-select')[1]
                .classList.add('form-hide');
        }
    });
```

<br><br>

### Select 02 : 자바스크립트로 html 생성

그러나, 위와 같이 하드코딩 해놓으면 **확장성**이 떨어진다. 만약, 셔츠 사이즈에 변동이 생겨 105나 110이 생겼다. 혹은 품절이 되었다면 그때마다 html 파일 열어서 수정할 것인가? 아니지 않느냐. html을 만들어놨다가 보여주기만 하는게 아니라 자바스크립트로 html을 조작, 생성 하는식으로 만들어야한다.

<br>

1. 자바스크립트로 html 생성법 첫번째 (정통적, 요새 잘 안씀)

    - `document.createElement('')`로 html 자료 생성
    - 생성한 태그에 `.innerHTML`로 내용 첨부
    - 클래스명 짓고 싶으면 `.classList.add('')`
    - 마지막으로 해당하는 html document 가져와서 `appendChild()`

```javascript
let a = document.createElement('p');
a.innerHTML = '안녕';
a.classList.add('p_test');
document.querySelector('#test').appendChild(a);
```

<br>

2. 자바스크립트로 html 생성법 두번째 (최근 트렌드, 리액트에서도 이런거 본듯)

    - html 문서에서 짤 때 처럼 문자열에 만들어서 넣기
    - `insertAdjacentHTML()`는 문자형 HTML 추가해주는 함수
    - `beforeend`는 안에서 맨 밑에 추가하라는 의미

```javascript
let 템플릿 = '<p>안녕!!</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);

//jQuery 버전
$('#test').append(템플릿);
```

<br>

1번과 2번 방법 모두 기존의 html에 **추가**하는 형식이라서 맨 뒤에 추가될거임. `innerHTML`써서 그냥 내용 다 엎어버리고 그걸로 대체해도 괜찮음. 1번이 2번보다 2배 빠르지만, 1번은 코드가 길고 귀찮으니까 2번을 더 많이씀. 사실, 0.0000x초 차이라서 크게 성능 하락 없음

<br>

```html
<form class="container my-5 form-group">
    <p>상품선택</p>
    <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
    </select>
    <select class="form-select mt-2 form-hide">
        <option>95</option>
        <option>100</option>
    </select>
</form>
```

```javascript
document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        let value = this.value;

        if (value == '셔츠') {
            document
                .querySelectorAll('.form-select')[1]
                .classList.remove('form-hide');

            let 셔츠 = `
                <option>95</option>
                <option>100</option>
            `;
            document.querySelectorAll('.form-select')[1].innerHTML = 셔츠;
        } else if (value == '바지') {
            document
                .querySelectorAll('.form-select')[1]
                .classList.remove('form-hide');

            let 바지 = `
                <option>28</option>
                <option>30</option>
            `;
            document.querySelectorAll('.form-select')[1].innerHTML = 바지;
        } else {
            document
                .querySelectorAll('.form-select')[1]
                .classList.add('form-hide');
        }
    });
```

이렇게 하면 HTML 파일에 하드코딩 했다기보다 JS 조작을 통해 셔츠 사이즈를 다 날려버리고 바지 선택하면 바지 사이즈가 나오게 됨. 추가로, **JS에서 html 저렇게 만들 때 문자열 기호에 넣고 하면 엔터키 치면 안내려갈거임. 백틱 키 쓰셈**

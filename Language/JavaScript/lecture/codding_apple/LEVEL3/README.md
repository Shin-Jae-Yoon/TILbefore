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
        // this는 여기서 이벤트리스너에 function() 썼으니까
        // e.currentTarget을 의미
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
        // this는 여기서 이벤트리스너에 function() 썼으니까
        // e.currentTarget을 의미
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

<br><br>

### Select 03 : forEach, for in 반복문

<br>

위에서 자바스크립트로 html 만들어서 html에 박는 것을 배웠다. 하지만 아직까지는 자바스크립트로 html 코드 그대로 짰으니까 여전히 하드코딩이다. 만약, 셔츠/바지 사이즈가 매일매일 달라진다면? **실제로 서버에서 데이터 가져와서 갯수만큼 option 태그 생성하도록 해보자.**

<br>

-   for 반복문 : `for (let i = 0; i < 어쩌구; i++)`
-   forEach 반복문 : **Array 자료형** 뒤에 붙일 수 있는 기본 함수, 반복문 역할
-   for in 반복문 : **Object 자료형** 반복문 돌리고 싶을 때 사용

<br>

    array 자료형이나 object 자료형의 자료를
    전부 꺼내어서 사용하고 싶을 때
    forEach, for in 반복문은 매우 유용하다.

<br>

    array 자료형에서 기본함수 .forEach() 말고
    for in 같은 반복문 for of가 있다.
    단, index를 얻지 못한다는 단점 있음

<br>

#### forEach

-   forEach 반복문은 **콜백함수** 써줘야 한다.
-   콜백함수에 파라미터 2개까지 넣을 수 있다.
    -   첫번째 파라미터 : **반복문 돌 때 마다 array 안에 있던 하나하나의 데이터**
    -   두번째 파라미터 : **반복문 돌 때 마다 0부터 1씩 증가하는 정수**

```javascript
let pants = [28, 30, 32];
pants.forEach(function () {
    console.log('안녕');
});
// 안녕
// 안녕
// 안녕

pants.forEach(function (a, i) {
    console.log(a); // 28 30 32
    console.log(i); // 0 1 2
});

for (let pant of pants) {
    console.log(pant); // 28 30 32
}
```

```javascript
// 서버에서 보내준 데이터라고 가정
let shirts = [90, 95, 100, 105];
let pants = [28, 30, 32, 34];

document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        // this는 여기서 이벤트리스너에 function() 썼으니까
        // e.currentTarget을 의미
        let value = this.value;
        let optionSelector = document.querySelectorAll('.form-select')[1];

        if (value == '셔츠') {
            optionSelector.classList.remove('form-hide');
            optionSelector.innerHTML = '';

            // for 반복문
            for (let i = 0; i < shirts.length; i++) {
                optionSelector.insertAdjacentHTML(
                    'beforeend',
                    `<option>${shirts[i]}</option>`
                );
            }

            // forEach 반복문
            shirts.forEach(function (data) {
                optionSelector.insertAdjacentHTML(
                    'beforeend',
                    `<option>${data}</option>`
                );
            });

            // forEach 반복문 arrow function 사용
            shirts.forEach((data) => {
                optionSelector.insertAdjacentHTML(
                    'beforeend',
                    `<option>${data}</option>`
                );
            });
        }
    });
```

<br>

#### for in 반복문

-   object 자료 갯수만큼 반복문 돌리고 싶으면 사용 가능
-   key라고 작명한 부분은 object 자료형의 key 부분
-   key, value 모두 출력 가능

```javascript
let obj = {name: 'shin', age: 27};

for (let key in obj) {
    console.log('안녕');
}
// 안녕
// 안녕

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// name
// shin
// age
// 27
```

<br>

#### arrow function 맛보기

-   함수 만드는 또다른 문법이 arrow function 이다.
-   기본적으로 함수와 this 빼고 거의 동일한 역할을 한다.
-   **특히, 콜백함수 만들 때 자주 사용**
-   `function() {}`는 `() => {}`와 같다.
-   심지어 파라미터가 1개라면 소괄호 생략하고 사용하기도 한다.
    `function(a) {}`는 `a => {}`와 같다.

```javascript
let pants = [28, 30, 32];

pants.forEach(function (a) {
    console.log(a);
});

pants.forEach((a) => {
    console.log(a);
});
```

-   함수 표현식의 형태로 쓰는 사람도 있다.

```javascript
let 함수1 = function () {
    console.log('안녕');
};
let 함수2 = () => {
    console.log('안녕');
};
```

<br>

함수 안에서 **this**를 사용해야할 경우 `함수`와 `화살표 함수`는 **기능적인 차이**가 존재한다.

-   `function()` : 함수 안에서 this를 알맞게 **재정의** 해줌
-   `arrow function` : 함수 안에서 this를 재정의하지 않고 **바깥에 있던 this를 그대로 사용**

<br>

위에서 사용했던 this를 살펴보겠다.

```javascript
document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        // this는 여기서 이벤트리스너에 function() 썼으니까
        // e.currentTarget을 의미
        let value = this.value;
    });
```

현재 **function()** 을 썼기 때문에 함수 안에서 this가 재정의 되어서 `document.querySelectorAll('.form-select')[0].addEventListener`가 동작했을 때를 뜻하니까 `e.currentTarget`이 된다. 하지만, 만약 여기서 **화살표함수를 사용해버리면 함수 바깥의 this를 가져와서 사용하기 때문에 의도와 다르게 동작할 수 있다.** 따라서 주의가 필요하다.

<br>

> 이벤트리스너 콜백함수 안에서 this를 사용해야하면 **arrow function 사용 시에 의도와 다르게 동작할 수 있으니까** 그런데서 사용하지말고 조심해서 사용하자.

> 참고로, 브라우저 환경의 전역객체는 **window** node 환경의 전역객체는 **global**이다. 예시 코드에서 밖에 특별한 this가 없다면, 화살표 함수를 썼을 때 this는 window를 뜻하게 된다.

<br><br>

### Ajax (jQuery 이용 서버 통신)

<br>

**서버**는 데이터 보내달라고 요청하면 데이터를 보내주는 것이다. 예를 들어, 네이버 웹툰 서버라고 하면 네이버 웹툰 달라고 하면 웹툰 보내주는 것이다. 서버는 데이터를 보내주기도 하고 유저 데이터를 받아서 DB에 저장하기도 하는 역할을 한다.

1. 어떤 데이터인지 : 데이터의 url

    - 예를 들어, comic.naver.com 이라는 url
    - 데이터 url은 서버 개발자가 작성한 api 문서에 따라 요청한다.

2. 어떤 방법으로 데이터를 요청할건지 : get인지, post인지 정확히
    - **get은 데이터 읽을 때, post는 데이터를 보낼 때**

<br>

Q. 특정 url로 get 요청하는 법?

-   인터넷의 주소창에 url을 입력하는 것이 일종의 get 요청하는 것이다. 즉, **주소창이 get 요청하는 곳**이라고 이해하면 된다.

Q. 특정 url로 post 요청하는 법?

-   `<form action="/url" method="post"></form>`태그를 이용한다. 전송버튼을 누르면 서버에 post 요청 하는 것이다.

<br><br>

#### ajax의 등장

단순히 get요청과 post요청하면 **브라우저가 새로고침이 된다는 것이 단점**이다. 새로고침이 매번 발생하면 불편하기 때문에 **새로고침 없이 get, post 요청할 수 있도록 ajax**가 등장하는 것이다. 예를 들어, 쇼핑몰의 경우에 상품더보기 버튼을 누르면 새로고침 없이 서버와 통신하여 새로운 상품 목록을 불러오는 것이다.

    참고로, ajax를 편하게 쓰고 싶을 때 사용하는 것이
    axios 라이브러리 이다. 리액트나 뷰에서는 주로
    axios 라이브러리를 사용할 것이다.

<br>

-   ajax로 get요청 하는 방법

```javascript
$.get('url~~');
```

예시로, `https://codingapple1.github.io/hello.txt`로 get요청 하면 인삿말 보내준다. 그리고, `.done()` 함수를 이용하면 get요청이 성공했을 때 콜백함수 실행시킬 수 있다.

```javascript
$.get('https://codingapple1.github.io/hello.txt').done(function (data) {
    console.log(data);
});

// '안녕하세요 반갑습니다요.'
```

-   ajax로 post요청 하는 방법

```javascript
$.post('url~~', data);

$.post('https://codingapple1.github.io/hello.txt', {name: 'kim'}).done(
    function (data) {
        console.log(data);
    }
);
```

-   ajax 실패시 특정 코드 실행 `.fail()`
    -   보통 **404 error**는 서버에 url이 없다는 오류

```javascript
$.get('https://codingapple1.github.io/hello.txt')
    .done(function (data) {
        console.log(data);
    })
    .fail(function () {
        console.log('실패함');
    });
```

<br><br>

#### 브라우저 기본 함수 fetch

ajax말고 브라우저 기본 함수를 써서 쌩 자바스크립트로 구현할 수도 있다.

```javascript
// ajax 사용
$.get('https://codingapple1.github.io/price.json')
    .done(function (data) {
        console.log(data.price);
    })
    .fail(function () {
        console.log('실패함');
    });

// fetch 사용
fetch('https://codingapple1.github.io/price.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.price);
    })
    .catch((error) => {
        console.log(error);
    });
```

#### JSON 자료형

서버와 클라이언트는 **문자자료만 주고 받을 수 있다.** object, array를 보내고 싶으면 ""를 쳐서 문자처럼 만들고 보내야한다. 이렇게 **따옴표 친 object, array 자료가 바로 JSON**이라고 한다.

```javascript
// object
{price : 5000}

// JSON
"{"price" : 5000}"
```

JSON으로 변환하면 문자형 자료라서 원하는 자료만 뽑아쓰기 힘들다. 그래서 JSON자료를 다시 object나 array로 변환해서 사용하면 뽑아쓰기 편하다. fetch를 사용할 때 `((res) => res.json())`이 응답받은 response를 json으로 변환해주는 과정이다. ajax는 자동으로 변환해주기 때문에 신경쓰지 않았다.

<br><br>

### Array 정렬하는 법

<br>

기본적으로 `.sort()` 함수는 **문자정렬**이다. 숫자를 그냥 정렬시켜보면 아래와 같이 원하지 않는 결과가 나온다.

```javascript
let 어레이 = [7, 3, 5, 2, 40];
어레이.sort();
console.log(어레이);

// [2, 3, 40, 5, 7]
```

<br>

array **숫자 정렬**은 콜백함수를 사용하고 return 값을 따로 지정해줘야 한다. 아래와 같이 코드를 작성하면 **오름차순 숫자 정렬**이다.

```javascript
let 어레이 = [7, 3, 5, 2, 40];
어레이.sort(function (a, b) {
    return a - b;
});

console.log(어레이);
// [2, 3, 5, 7, 40]
```

<br>

#### javscript array 오름차순 숫자정렬 원리

1. 콜백함수의 a와 b는 array 안에 있던 자료들이다.

    ex) `7, 3`

2. return 결과가 양수면 a를 오른쪽으로 보낸다.

3. return 결과가 음수면 b를 오른쪽으로 보낸다.

    ex) `7 - 3 = 4` 양수니까, a가 b보다 크다는 의미이다. 따라서, a를 오른쪽으로 보낸다.

<br>

#### javascript 문자 가나다순 정렬

-   그냥 `.sort()` 사용

```javascript
let 어레이2 = ['a', 'c', 'b'];
어레이2.sort();
console.log(어레이2);
// ['a', 'b', 'c']
```

```javascript
let 어레이3 = ['a', 'd', 'c', 'b'];
어레이3.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(어레이3);
```

#### javascript 정렬 결론

`sort()` 함수는 배열의 요소를 compareFunction에게 2개씩 반복해서 보낸 뒤, compareFunction이 반환하는 값을 기준으로 정렬한다. 보내는 요소들의 이름을 a, b라고 했을 때 기준은 아래와 같다.

-   `반환 값 < 0` : a가 b보다 앞에 있어야 한다.
-   `반환 값 = 0` : a와 b의 순서를 바꾸지 않는다
-   `반환 값 > 0` : b가 a보다 앞에 있어야 한다.

자세한 설명은 [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)에서 참조하도록 하자.

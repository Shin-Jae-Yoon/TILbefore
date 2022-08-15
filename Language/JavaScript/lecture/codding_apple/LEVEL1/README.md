## 코딩애플 JavaScript 입문과 웹 UI개발

<br><br>

### 자바스크립트 사용 목적

JavaScript는 html 파일 내부에 숨어서 **html 조작과 변경**을 담당하는 언어이다.

-   탭, 모달 등 웹페이지 UI 제작 가능
-   유저가 입력한 데이터 검사 가능
-   유저가 버튼 누르면 서버로 데이터 요청 가능 등

<br>

script 태그 안에 넣어서 작성한다. 물론 js 파일을 따로 만들어서 link 해도 된다. script 태그 안에 적은 코드는 **브라우저 새로고침시 1번 실행된다.**

<br>

**document.getElementById('id명').무엇을 = '어떻게';** <br>

`document.getElementById('hi').innerHTML = 'JS 고수에요';` <br>

-   document : 문서, html 문서를 의미
-   마침표 : ~의
-   getElementById('hi') : 아이디가 hi인 html 요소 (element)를 가져와라, 셀렉터
-   innerHTML : HTML 내부에서
-   그리고 'JS 고수에요'를 대입하라.

```javascript
// 글자 색깔 빨간색으로 변경
document.getElementById('id').style.color = 'red';
// img의 src 변경
document.getElementById('id').src = './img/주소';
```

<br>

**document.getElementsByClassName('class명')\[인덱스].무엇을 = '어떻게';**<br>

`document.getElementsByClassName('hi')[0].innerHTML = 'JS 고수에요';`

-   class는 여러 개 나올 수 있어서 인덱싱 해줘야함

<br><br>

### UI 만드는 법칙

1. HTML/CSS로 미리 디자인 (필요하면 미리 숨김)
    - `display: none;` 이용
2. 필요할때 보여주기 (자바스크립트 사용)
    - `display: block;` 이용

이걸로 모달창, 드롭다운 메뉴 등 구현 가능

<br><br>

### 자바스크립트 function

-   긴 코드 축약하고 싶을 때 사용
-   긴 코드 재사용이 잦을 때 사용
-   함수명 영어 작명 시
    1. 소문자 시작
    2. camelCase
       `open_alert()` **X**, `openAlert()` **O**

```javascript
function 작명(파라미터) {
    document.getElementById('alert').style.display = 파라미터;
}
```

```html
<button class="alert-open" onclick="작명('flex')">띄우기</button>
```

-   파라미터 내부에 문자는 `' '` 안, 숫자는 바로

<br><br>

### 자바스크립트 초창기 겪는 문제들, 오류들

<br>

1. script 태그를 body 내부에서 상단에 작성한 경우

script 태그를 body 내부에서 상단에 작성하면 잘 안되는 경우가 있다. script 태그를 조작할 html의 하단에 코드를 작성하는 이유는 렌더링 과정에서 위에서 아래로 읽어가기 때문이다. 따라서 상단에 작성하면 렌더링이 늦을 수 있다.

2. 셀렉터 오타 주의

셀렉터 오타로 자바스크립트 실행이 안되는 경우, 크롬 개발자 도구에서 console 탭에서 에러 타입을 보자. **어쩌구 of null**은 대부분 셀렉터 오타이다. "style을 읽고 싶은데 왼쪽에 있는것이 null이다~" 라는 형태의 오류가 자주 보일 것이다.

3. 기본 문법 오타

대문자, 소문자 확인 잘하자. `getElementById`를 `getElementByid`로 작성하지 않았는가? 뭐 잘 안보이면 항상 크롬 개발자도구 console 탭을 확인하자.

<br><br>

### 자바스크립트 이벤트리스너

html 버튼 태그에 `onclick` 붙히면 좀 더럽지 않음? 그때 `addEventListener()`을 자바스크립트에서 구현하자. 클릭, 키 입력, 스크롤, 드래그 등 웹 페이지에 조작을 가하는 행위가 **이벤트**이다. 이벤트가 일어나길 귀 기울여서 기다리는 친구가 **이벤트 리스너**이다.

-   `'click'` : 마우스 클릭
-   '`mouseover`' : 마우스 갖다대는거
-   `'scroll'` : 마우스 스크롤
-   `'keydown'` : 키 입력

[그 외 수많은 이벤트 목록 참고](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript
셀렉터로찾은요소.addEventListener('event명', function () {
    // 실행할 코드
});

document.getElementById('alert2_close').addEventListener('click', function () {
    document.getElementById('alert2').style.display = 'none';
});
```

<br><br>

### 자바스크립트 콜백함수

위에 addEventListener 사용할 때 첫번째 파라미터에는 event 요소가 들어가고, 두번째 파라미터 자리에 들어갔던 function()이 있을거임

```javascript
셀렉터로찾은요소.addEventListener('event명', function () {
    // 실행할 코드
});
```

-   이 function()이 바로 콜백함수
-   자바스크립트에서 코드를 순차적으로 실행하고 싶을 때 콜백함수를 자주 사용
-   우선 이정도만 알고 넘어가자

<br><br>

### classList, toggle

<br>

navbar 같은 곳에서 주로 사용하는 버튼 눌렀을 때 등장하는 서브메뉴를 구현하려고 한다. 해당하는 UI 제작할 때는

1. 미리 htmml/css 디자인 해놓고 `display: none;`으로 숨긴다.
2. 버튼 누르면 display 속성 바꿔서 보여준다.

이 경우 `document.getElementById('id').style.display = 'none'`과 같이 작성해도 되지만, class 탈부착식으로 만드는 것이 유지보수에 편리하기 때문이다.

<br>

```css
.list-group {
    display: none;
}
.show {
    display: block;
}
```

다음과 같이 show 클래스를 list-group 클래스에 붙혔다 뗐다 하는 방식으로 만들면 될 것 같다. 이때 자바스크립트에서 html에 접근하여 클래스를 붙히는 기능을 해주는 것이 **classList**이다.

```javascript
document.getElementsByClassName("navbar-toggler")
[0].addEventListener("click", function () {

    document.getElementsByClassName("list-group")
    [0].classList.add("show");
    
    });
```

만약, 버튼을 한 번 더 누르면 서브메뉴를 숨기고 싶다면 if문, 변수문법을 사용해서 가능하다. 아직 안배웠으니까 쉬운 방법인 **toggle**을 이용한다.

```javascript
document.getElementsByClassName("navbar-toggler")
[0].addEventListener("click", function () {

    document.getElementsByClassName("list-group")
    [0].classList.toggle("show");
    
    });
```

이렇게 코드 작성 시, toggle 기능을 이용하여 show 클래스가 있다면 없애고 없다면 붙히는 방식이다.

<br><br>

### querySelector

<br>

getElementsByClassName, getElementById와 같이 querySelector는 유용하다. css의 셀렉터 기능을 사용할 수 있게 해준다.

```javascript
document.querySelector('.test').innerHTML = '안녕';
document.querySelector('#test').innerHTML = '안녕';
```

단, 클래스 사용 시 제일 최상단 요소만 선택되므로, 예를 들어, 두번째 요소를 선택하고 싶으면 querySelectorAll을 사용하고 인덱스를 줘야 한다.

```html
<ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
</ul>

<script>
    document.querySelectorAll('list-group-item')[1]
    .innerHTML = '두번째 아이템';
</script>
```

<br><br>

### jQuery 라이브러리

자바스크립트 코드가 길고 더러워서 HTMl 조작을 쉽게하는 라이브러리들이 대표적으로 jQuery, React, Vue이다. React와 Vue는 자바스크립트 숙련도를 요구하기 때문에 간단하게 jQuery를 배워본다. jQuery는 라이브러리일 뿐 새로운 문법이나 이런게 아니라 함수명만 짧아진다. 예를 들어, `document.querySelect`와 같은 셀렉터는 짧게 `$` 하나로 바뀌고 `addEventListener`는 짧게 `on` 하나로 바뀐다.

<br>

jQuery CDN을 이용하여 사용한다.

```javascript
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```

거의 모든 자바스크립트 라이브러리는 로딩 속도 때문에 `<body>` 태그 끝나기 전에 넣는 것을 권장한다. jQuery 설치한 곳 **하단**에서 jQuery 문법을 사용 가능하다. 상단에 코드 짜고 안된다고 울지말고 제발 하단에다가 짜라. 강의에서는 편의상 그냥 head 태그 끝에 jQuery를 설치했다. 로딩속도는 조금 느리겠지만, 코드 보기에 좋으니깐 편의상~

<br>

- `$` : querySelectorAll의 역할
- `.html` : jQuery로 html의 내용 변경
- `.css('속성', '값')` : jQuery로 css의 내용 변경
- `.addClass('클래스명')` : jQuery로 클래스 부착
- `.removeClass('클래스명')` : jQuery로 클래스 제거
- `.toggleClass('클래스명')` : jQuery로 클래스 토글

```javascript
document.querySelector('.hello').innerHTML('바보');
$('.hello').html('바보');

document.querySelector(".hello").style.color = "red";
$('.hello').css('color', 'red');
```

querySelector를 쓰면 인덱스 하나하나 지정하고 바꿔줘야해서 양이 늘어난다. (뭐, 클래스명 같게 하고 querySelectorAll 말고 querySelector 쓰면 되긴 함) 근데 jQuery를 쓰면 그냥 한꺼번에 바꿀 수 있다.
```html
<p class="hello">안녕</p>
<p class="hello">안녕</p>
<p class="hello">안녕</p>
```
```javascript
document.querySelectorAll(".hello")[0].innerHTML = "바보";
document.querySelectorAll(".hello")[1].innerHTML = "바보";
document.querySelectorAll(".hello")[2].innerHTML = "바보";

$(".hello").html("바보");
```

jQuery 이벤트리스너 사용법

```javascript
$("#test-btn").on("click", function () {
    어쩌구~
});
```

style의 display 속성을 none으로 바꿔도 되지만 jQuery는 편리한 것들을 제공해줌

- `.hide()` : 사라지게
- `.fadeOut()` : 서서히 사라지게
- `.slideUp()` : 줄어들며 사라지게
- `.show()` : 보이게
- `.fadeIn()` : 서서히 보이게
- `.slideDown()` : 늘어나며 보이게
- `.fadeToggle()` : 누를때마다 fade

<br><br>

### 모달(Modal) 창 제작 Tip

<br>

Modal창은 보통 페이지 맨 앞에, 모든 html 요소 제일 위에 존재하기 때문에 **html 맨 위에 적는 것**이 관습이다. 

```css
/* 모달창 국룰 세팅 */
.modal {
    position: fixed;
    z-index: 5;
}
```

```html
<div class="black-bg">
    <div class="white-bg">
        <h4>로그인하세요</h4>
        <button class="btn btn-danger" id="close">닫기</button>
    </div>
</div>

<button id="login">로그인</button>

<script>
    $("#login").on("click", function () {
        $(".black-bg").addClass("show-modal");
    });

    $("#close").on("click", function () {
        $(".black-bg").removeClass("show-modal");
    });
</script>
```

<br><br>

### UI에 애니메이션 추가

<br>

위의 예제 코드에서 addClass와 removeClass 대신에 fadeIn과 fadeOut을 넣으면 애니메이션을 넣을 수 있지만, 자바스크립트에 애니메이션을 넣는 것은 성능 때문에 좋은 관습은 아니고 css에 넣는 것이 좋다.
## 코딩애플 JavaScript 입문과 웹 UI개발

<br><br>

### 자바스크립트 사용 목적

<br>

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

<br>

-   html 버튼 태그에 `onclick` 붙히면 좀 더럽지 않음?
-   그때 `addEventListener()`을 자바스크립트에서 구현하자
-   클릭, 키 입력, 스크롤, 드래그 등 웹 페이지에 조작을 가하는 행위가 **이벤트**이다.
-   이벤트가 일어나길 귀 기울여서 기다리는 친구가 **이벤트 리스너**이다.
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

<br>

-   위에 addEventListener 사용할 때 파라미터 자리에 들어갔던 function()이 있을거임

```javascript
셀렉터로찾은요소.addEventListener('event명', function () {
    // 실행할 코드
});
```

-   이 function()이 바로 콜백함수
-   자바스크립트에서 코드를 순차적으로 실행하고 싶을 때 콜백함수를 자주 사용
-   우선 이정도만 알고 넘어가자

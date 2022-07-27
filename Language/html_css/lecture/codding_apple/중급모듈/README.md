## 코딩애플 HTML_CSS 강좌 필기 (중급모듈)

<br>

### 폰트 설정법

<br>

-   `font-family : '폰트'` 형식으로 설정한다.
-   버그 없이 사용하려면 폰트의 영문명 사용
-   폰트를 여러개 설정하는 이유는 안정석 확보를 위해서이다. 왼쪽부터 적용된다.
-   아래 예시에서 gulim이 없어서 적용 안된다면 gothic으로 적용한다는 의미
-   웹사이트 이용자의 컴퓨터에 설치가 된 폰트들을 적용할 수 있다.

```css
body {
    font-family: 'gulim', 'gothic';
}
```

<br>

**사용자의 컴퓨터에 설치되지 않은 폰트를 사이트에서 이용하는 방법**

-   css 최상단에 `@font-face`로 적용할 폰트의 경로와 이름 작성
-   웹 폰트용으로 나온 **woff**파일은 ttf에 비해 용량의 3분의 1 수준

```css
@font-face {
    font-family: '폰트이름';
    src: url(폰트 저장 주소);
}
```

<br>

**Google Fonts 사용**

-   폰트 파일 없이, 구글 폰트를 직접 링크하는 방식
-   구글이 호스팅해주는 폰트가 미리 정의된 css 파일을 가져다 사용하는 방식이다.
-   **내 사이트의 트래픽 절약 가능**
-   크롬 브라우저가 이미 방문한 사이트는 캐싱해주기 때문에 많은 사람들이 이용할수록 더 빠르게 폰트를 이용 가능
-   html 적용 - `<link>` 부분
-   css 적용 - `@import` 부분

<br>

### 폰트 Anti-aliasing

<br>

-   폰트 앤티앨리어싱은 폰트를 부드럽게 보여주는 기술
-   픽셀의 각진 부분을 부드럽게 바꾸는 방법
-   mac은 자동으로 앤티앨리어싱 해주지만, window는 아님
-   글자에 각도를 주고 살짝 돌리면 됨

```css
p,
h4,
h3,
h2,
h1,
span,
button {
    transform: rotate(0.03deg);
}
```

<br>

### flex

<br>

-   가로 배치, 혹은 여러 배치에서 자주 사용할 flex 속성이다.
-   부모 태그에 `display : flex;` 설정한다.
-   `justify-content: flex-start;` 좌측 정렬
-   `justify-content: flex-end;` 우측 정렬
-   `justify-content: flex-center;` 가운데 정렬
-   `justify-content: space-between;` 사이 사이 떨어뜨리게 꽉차게
-   세로 배치 원하면, `flex-direction: column;`

```css
.flex-container {
    display: flex;
    justify-content: flex-start;
}

.flex-item {
    width: 100px;
    height: 100px;
    background-color: gray;
    margin: 5px;
}
```

-   flex에서 600px를 줬다고 하면, 실제 크기가 600px 되는 것이 아니라, 최대한 거기까지 키운다는 의미
-   width가 커서 밑으로 보내고 싶다면 `flex-wrap: wrap;` 속성 이용
-   flex 이용 시 상하 정렬은 `align-item: center;` 속성 이용

```css
/* 궁극적인 상하좌우 정렬 */

.flex-container {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
}
```

-   flex에서는 박스 크기를 px 말고 **비율**로 설정 가능하다.
-   `flex-grow` 속성은 몇 배수를 의미한다.
-   아래의 예시는 1:2:1이다.

```html
<div class="flex-container">
    <div class="flex-item" style="flex-grow: 1">1</div>
    <div class="flex-item" style="flex-grow: 2">2</div>
    <div class="flex-item" style="flex-grow: 1">3</div>
</div>
```

-   navbar 디자인 하고싶을 때 가운데를 붕 띄우고 싶으면 가운데만 비율주고 띄운다.

```html
<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item" style="flex-grow: 1">2</div>
    <div class="flex-item">3</div>
</div>
```

<br>

<p align="center"><img src="img/img02.png"></img></p>

<br>

### HTML head 태그

<br>

-   head 태그에는 사이트 내에서 눈에 보이지 않는 중요한 정보들

<br>

1. css 파일 첨부

    - link 태그 이용
    - 상대경로 방식, 절대경로 방식

<br>

2. 스타일 태그
    - css 파일과 유사하게 동작
    - body 태그 안에 있어도 동작하지만 html 파일 코드는 위에서 아래로 읽어나가는 방식이라서 body 태그에 뒀을 때 사이트 로딩 시 스타일이 깨질 수 있음

<br>

3. 사이트 제목
    - 브라우저 탭에 뜨는 이름

<br>

4. **meta 태그**

```html
<head>
    <meta charset="UTF-8" />
    <meta name="description" content="백엔드 마스터 신재윤입니다." />
    <meta name="keywords" content="백엔드, backend, 개발자, 신재윤" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

-   4-1 : 사이트 인코딩 형식 지정 방법
-   4-2 : 사이트 검색 결과 화면에 뜨는 글귀
-   4-3 : 검색에 도움을 주는 키워드
-   description은 구글 검색 시 파란 제목으로 뜨는 글귀
-   keywords는 검색에 도움을 주는 키워드
-   4-4 : 사이트 초기 줌 레벨이나 폭을 지정해주는 것
-   `width=device-width`는 모바일 기기의 실제 폭으로 렌더링 해주는 것
-   실제 접속 시 스마트폰 기기의 실제 가로폭을 보고 렌더링하라는 명령어
-   `initial-scale=1`은 접속시의 화면 줌 레벨 설정

<br>

5. open graph

```html
<head>
    <meta property="og:image" content="/이미지경로.jpg" />
    <meta property="og:description" content="사이트설명" />
    <meta property="og:title" content="사이트제목" />
</head>
```

-   og 메타 태그는 facebook이 만든 태그
-   카카오톡, 페이스북 같은 sns에 링크를 공유했을 때 뜨는 박스
-   그 박스에 보이는 이미지, 사이트 제목, 사이트 설명

<p align="center"><img src="img/img03.png"></img></p>

<br>

6. Favicon

```html
<head>
    <link rel="icon" href="아이콘경로.ico" type="image/s-icon" />
</head>
```

-   상단 탭 웹사이트 제목 옆에 뜨는 이미지 아이콘
-   ico 형식 대신 png도 가능, 하지만 ico가 호환성 best
-   32 x 32 사이즈가 보편적
-   웹 사이트를 바탕화면에 바로가기 추가했을 경우 뜨는 아이콘도 커스터마이징 가능
-   `rel="apple-touch-icon-precomposed"` 이렇게 rel 속성을 조정
-   OS마다 요구하는 rel 속성이 달라지니까 그때그때 찾아서 적용
-   혹은 favicon generator 검색하면 OS별로 알아서 만들어줌

<br>

### **반응형 웹**

<br>

vw (viewport width)

-   브라우저 폭에 비례

<br>

vh (viewport height)

-   브라우저 높이에 비례

<br>

**rem (기본 폰트사이즈에 비례)**

-   보통 html 태그 폰트 사이즈는 기본 16px로 설정되어있다.
-   10rem이라고 하면 160px이 되는 것이다.
-   버튼이든 패딩이든 마진이든 전부 rem으로 크기지정하면 기본 font-size가 커져도 모든게 같이 커진다는 장점이 있다.
-   요즘은 컨트롤 누르고 마우스휠 올리면... 다 같이 커지기는 한다

<br>

em (내 폰트 사이즈의 몇배)

-   만약 내 폰트 사이즈가 15px, width가 20em이면 300px이 되는 것이다.

<br><br>

반응형 웹사이트를 만들 때, html head 태그에 meta 태그를 반드시 추가해야한다. 느낌표 emmet 하면 들어가있기는 하다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

기본적인 원리는 media query 문법이다. 아래 코드는 현재 브라우저 폭이 1200px 이하인 경우 저 내용을 적용해라는 의미이다.

```css
@media screen and (max-width: 1200px) {
    .main-title {
        font-size: 30px;
    }
}
```

반응형 웹에서 breakpoint 기준은 **1200px, 992px, 768px, 576px** 단위를 많이 사용한다. 보통 1200px 부터 태블릿, 768px부터 모바일 이런식으로 많이 사용한다. breakpoint는 4개 이상으로 넘어가면 복잡해진다.

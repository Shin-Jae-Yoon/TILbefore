## 코딩애플 HTML_CSS 강좌 필기

<br><br>

## HTML

<br>

### HTML 태그

<br>

- 띄어쓰기를 하고 원하는 class 붙이면 클래스 2개 이상 가능

```html
<div class="container text-center"></div>
```

<br>

### input 태그 name 속성

<br>

- input 태그에 name 속성을 지정하면 서버에 name에 해당하는 변수로 데이터를 전송하게 된다.

```html
<input type="text" name="age" />
<!-- age라는 변수로 서버에 전송 -->
```

    서버에 데이터 전송할 때 방식 2개
    1. <input type="submit">
    2. <button type="submit">전송</button>

<br>

### select 태그

<br>

- 드롭다운 구현 가능

```html
<select>
    <option>자장면</option>
    <option>짬뽕</option>
    <option>탕수육</option>
</select>
```

<br>

### label 태그

<br>

- input 태그 체크박스 활용할 때 의미 없는 글자는 span 태그를 사용해도 되지만, label 태그를 이용해보자.
- input태그의 id와 label 태그의 for를 동일하게 맞춰주면 label 태그의 글자를 클릭해도 체크박스가 선택된다.

```html
<input id="sub" type="checkbox" />
<label for="sub">Subscribe</label>
```

<br><br>

## CSS

<br>

### float 속성

<br>

- float는 요소를 **공중에** 붕 띄워서 왼쪽/오른쪽 정렬하는 속성
- 공중에 붕 띄는 속성 때문에 다음에 오는 div 박스가 보이지 않는 경우 발생
- `clear: both`를 이용해서 초기화 해줘야함

```css
.box_practice .article01 {
    float: left;
}

.box_practice .article02 {
    float: right;
}

.box_practice .footer {
    clear: both;
}
```

    [ 참고 ]
     float 속성으로 가로 정렬할 때
     float 박스들을 감싸난 하나의 큰 div 박스를 만들고
     폭을 지정해주는게 좋다. 그래야 모바일에서
     흘러넘치지 않는다.

```html
<div>
  <div class="left-box"></div>
  <div class="right-box"></div>
  <div class="footer"></div>
</div>
```

<br>

### Selector 셀렉터

<br>

- 셀렉터 사용 시 공백 말고 꺽쇠( `>` )도 가능
- 단, 꺽쇠 사용 시 4~5개 이상 연달아쓰는건 권장X 버그의 원인

```html
<ui class="navbar">
    <li> <span>안녕</span> </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ui>
```

```css
.navbar li>span {
    color : red;
}
```

<br>

### background 속성

<br>

- 그냥 이미지를 넣어도 되지만, background도 생각
- `background-image: url(./img/img03.png);` 배경 이미지 설정 (이때, url 여러개 넣어서 배경 겹치기 가능)
- `background-size: cover;` 배경 이미지 div 박스에 꽉차게
- `background-size: contain;` 배경 이미지 잘리지 않게
- `background-repeat: no-repeat;` 반복되는거 없애기
- `background-position: center;` center를 기준으로 배경 채움
- `background-attachment: fixed;` 스크롤 될 때 배경 동작 설정 방식
- `filter: brightness(50%)` 배경에 보정 입히기 - 명도 (단, 안에 글씨 있으면 글씨도 필터가 입혀지니까 이는 조심하자.)

<br>

### 배경에 검은색 틴트 주기

<br>

```css
.main-background {
    background-image: linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(이미지경로~~) ;

}
```

<br>

### margin collapse 현상

<br>

margin collapse 현상은, div 박스 두 개가 겹친 경우에 **박스 2개의 위쪽 테두리가 겹치면, margin도 합쳐지는 현상**을 의미한다.

```html
<div class = "main-background">
    <h4 class = "main-title"> Buy Our Shoes! </h4>
</div>
```

이 경우에서 박스 2개가 겹쳐지게 되어, main-title에 margin-top을 주면 margin이 합쳐진 현상이라 같이 내려가게 될 것이다. 해결방안으로는, 테두리가 안붙게 하면 된다. 부모 박스에 `padding: 1px`과 같은 조작을 취하면 된다.

<br>

### 좌표 이동

<br>

- `position` 속성 부여하여 좌표이동 가능해짐.
- 특징 01 : 좌표 이동 가능
- 특징 02 : float와 비슷하게 공중에 뜨는 원리
- `position: relative` 내 원래 위치가 기준

```css
.main-button {
    position: relative;
    top: 100px; // 위쪽에서부터 100px
    left: 100px; // 왼쪽에서부터 100px
}
```

- `position: static` 좌표 이동 금지
- `position: fixed` 현재 화면 (viewport) 기준으로 고정
- navbar 같은거 스크롤 해도 상단에 고정시키면 좋으니까, 그럴 때 사용
- `position: absolute` 내 부모 태그 중에 `position: relative` 가진 부모를 기준으로 한다.
- `position: absolute` 요소를 **가운데 정렬**하는 방법

```css
.main-btn {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 30%;
}
```

<br>

### z-index

<br>

- div 박스가 겹칠 때 우선순위를 두기
- `z-index: 1`, `z-index: 5` 숫자가 클 수록 (높을 수록) 앞에 온다.

<br>

### width의 영역에 관한 문제

<br>

- width는 div 박스의 너비가 아니라 **width는 내부 content 영역의 너비를 의미한다.** padding이나 border에 width는 영향을 주지 않는다.
- 해결하려면, content 부분만 width로 설정하는 것이 아니라, padding과 border를 모두 포함하라고 시키면 된다.
- `box-sizing: border-box;` - width가 padding, border를 포함한다.
- content-box는 padding과 border를 포함하지 않는 경우이다.
- 아래의 예제로 box-sizing이 있고 없고를 비교해보기

```css
.explain-box {
    position: relative;
    margin: auto;
    padding: 20px;
    text-align: center;
    top: -80px;
    max-width: 600px;
    width: 80%;
    height: 40%;
    background-color: rgb(238,237,239);
    box-sizing: border-box;
}
```

<br>

### css 초기 설정시 편한 것, normalize

<br>

```css
body {
    margin : 0px;
}

div {
    box-sizing : border-box;
}

html {
    line-height : 1.15; /* 기본 행간 높이 */
}
```

<br>

혹은 크롬, 파이어폭스, 사파리와 같이 브라우저 호환성 이슈가 있을 때 css 파일에 추가하고 시작하면 좋은 설정들이 있다. (버튼의 크기나 이미지가 브라우저마다 다르거나 한 경우 때문에)

<br>

[normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)를 참고하도록 하자.

<br>

### input type에 따른 css 셀렉터

<br>

- 아래와 같이 지정하면 input type이 text인 아이들만 css 스타일링 가능

```css
input[type=text] {
    padding: 10px;
    font-size:20px;
    border: 1px solid black
}
```

<br>

### vertical-align 속성

<br>

- inline/inline-block 요소 간의 세로정렬 할 때 vertical-align을 사용한다.
- 테이블 사용 시 수직 정렬에도 사용 가능
- pratice02.html에서 실패했던 이유는 ? div박스와 조작을 시도했기 때문
- 해결책은 하나의 div 박스 내에서 img와 글자를 span태그로 묶어서 그 둘을 vertical-align 했으면 가능했을 듯하다.

```html
<div>
    <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" width="32" height="32"> 
    <span style="vertical-align : middle;">
    image with a default alignment.</span>
</div>
```
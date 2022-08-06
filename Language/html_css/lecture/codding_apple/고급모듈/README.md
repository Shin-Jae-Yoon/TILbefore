## 코딩애플 HTML_CSS 강좌 필기 (고급모듈)

<br>

### Pseudo-element

<br>

-   pseudo-class (다른 상태일 때 스타일 줄 때) `.class:`
-   pseudo-element (내부의 일부분만 스타일 줄 때) `.class::`

<br>

기초 모듈 수업에서 [pseudo-class](https://github.com/Shin-Jae-Yoon/TIL/tree/master/Language/html_css/lecture/codding_apple/%EA%B8%B0%EC%B4%88%EB%AA%A8%EB%93%88#css%EC%9D%98-%EB%8B%A4%EC%96%91%ED%95%9C-pseudo-class)가 무엇인지 학습했었다. `:hover`와 같이 특정 요소가 다른 상태일 때 (ex. 마우스 올렸을 때) 스타일 줄 수 있게 해주는 것이었다. pseudo-element는 콜론 2개 `::`를 입력하여 사용한다.

```css
/* 이러면 pseudo 클래스의 첫 번째 글자만 빨간색으로 바뀜! */
.pseudo::first-letter {
    color: red;
    font-size: 2rem;
}
```

<br>

보통 `::after (내부 맨 뒤에 뭔가 추가)`나 `::before (내부 맨 앞에 뭔가 추가)`를 어느정도 자주 사용하는 편이다.

```css
/* 이러면 pseudo 클래스 맨 뒤에 '안녕' 글자 생김 */
.pseudo::after {
    content: '안녕';
    color: red;
    font-size: 2rem;
}
```

만약, float를 사용해서 `clear: both;`를 하고 싶은 경우에 pseudo-element를 이용해서 빈 div 박스를 추가해줄 수 있다. (즉, 귀찮게 html 맨 밑에 div 박스 추가하고 style 줄 필요 없다는 말이지만, 나는 앞으로 float 안쓰고 flex 같은거 쓸거니깐... 그래도 혹시 모르니 메모 !)

```css
.product-container::after {
    content: ''; /* 그냥 내용 없는거 */
    display: block;
    clear: both;
    float: none;
}
```

<br>

`input 태그의 type이 file`인 경우 화면에 `파일 선택` 버튼 말고 `선택된 파일 없음`이라는 글자가 나온다. 아래에서 설명한 shadow dom인데 이 경우 단순히 input 태그를 조작하여서 버튼 색깔을 변경할 수는 없다.

```css
/* 이러면 "선택된 파일 없음" 여기 배경색이 바뀜 */
.input_file {
    background: skyblue;
}

/* 이렇게 해야 "파일 선택" 버튼의 배경색이 바뀜 */
.input_file::file-selector-button {
    background: skyblue;
}

/* pseudo-element에 pseudo-class도 사용 가능 */
.input_file::file-selector-button:hover {
    background: blue;
}
```

<br>

-   Pseudo-element 활용한 쓸데없는 짓들
    -   CSS 만으로 버튼에 마우스 올리면 배경 어둡게하기 https://codepen.io/css-tricks/pen/dxyfA
    -   CSS만으로 3D 느낌 리본모양만들기 https://codepen.io/team/css-tricks/pen/mVZGKa
    -   ol 태그의 숫자 스타일링하기 https://www.456bereastreet.com/archive/201105/ styling_ordered_list_numbers/
    -   table 반응형으로 만드는 여러가지 방법 https://css-tricks.com/responsive-data-tables/
    -   CSS만으로 영문 폰트 만들기 https://yusugomori.com/projects/css-sans/fonts

<br>

### Shadow DOM

<br>

```html
<input type="file" />
```

이와 같은 코드 입력 시, 화면에 `파일 선택` 버튼 말고 `선택된 파일 없음`이라는 글자가 나온다. 분명 태그 하나만 사용했는데 2개를 사용한 것처럼 보인다. 이것은 **Shadow DOM**이라는 숨겨진 요소 때문이다.

<br>

크롬 개발자 도구 설정에서 Elements의 `Show user agent shadow DOM`을 체크한 이후 input 태그의 내부를 살펴보면 shadow-root가 있고 그 안에 보면 `pseudo="-webkit-file-upload-button"`이 있을 것이다. 이것이 shadow DOM이다. input 태그 하나만 입력해도 span 태그인 선택된 파일 없음이 한 번에 입력되도록 개발자에게 편하려고 생긴 것이다.

<br>

그래서 결국, 버튼에 배경색을 주려면 위에서 했던 `.input_file::file-selector-button` 말고 어떻게 하지?

<br>

**input [type=file]**

```css
input[type='file']::-webkit-file-upload-button {
    background: black;
    color: white;
}
```

크롬 개발자 도구 열어서 pseudo 부분을 pseudo-element 부분에다가 넣고 스타일링 하면 된다. 왜냐면 pseudo-element 역할 자체가 **내부의 일부분만 스타일 줄 때** 사용하는 것이니까 내부의 버튼에만 스타일을 주고싶은 거니까 이렇게 사용하는 것이다.

<br>

추가로, `-webkit-`은 크롬, 사파리, Edge에서만 적용되는 스타일이다. Firefox는 `-moz`를 작성해야하고 Explorer는 `-ms-`를 사용한다. 즉, 브라우저마다 shadow DOM 까보면 살짝씩 다르다.

<br>

-   실제 파일 업로드 버튼 만드는 것
    글자를 눌러도 버튼이 선택되게 스타일링한다.
    그리고 input태그는 display를 none 줘버린다.

    ```html
    <label for="sub">
        파일 업로드
        <input id="sub" type="file" style="display: none" />
    </label>
    ```

<br>

**input placeholder**

<br>

input 태그의 `placeholder`도 div 박스 두 개의 형태 같지 않는가? shadow DOM인가? 까보면 역시 그렇다.

```css
/* 이러면 placeholder 안에 글자 색깔 빨간색으로 바뀜 */
input::-webkit-input-placeholder {
    color: red;
}
```

<br>

**input [type=range]**

<br>

range 또한 마찬가지이다. range는 id가 track과 thumb 두 개가 있음을 확인 가능하다. 그런데 아마 손잡이 thumb는 pseudo 어쩌구가 없어서 선택 어떻게 해야하나 의문이 들 것이다. 눌러서 밑에 보면 `user agent stylesheet`가 보일 것인데 **브라우저 기본 CSS**를 의미한다. 우리가 스타일 주지 않아도 기본적으로 보이는 스타일이다. 따라서, 여기 `input[type='range']::-webkit-slider-thumb` 부분을 복사해오고 조작하면 된다. 따옴표나 i 이런건 지우고 사용한다. 이때, apperance가 기본 값이 auto라서 none으로 바꾸고 사용해야 한다. 손잡이 thumb의 apperance만 바꾸면 안되고 range 자체의 apperance를 바꿔야 적용될 것이다.

<br>

```css
input[type='range'] {
    appearance: none;
    background-color: lightgray;
    border-radius: 1rem;
}

input[type='range']::-webkit-slider-thumb {
    appearance: none;
    background-color: green;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
}
```

<br>

**progress**

```css
progress {
    /*기본 배경은 없애주는게 좋습니다*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: white;
    /* IE10 호환성용 */
    color: red;
}
progress::-webkit-progress-bar {
    background-color: lightgray;
    border-radius: 1rem;
}
progress::-webkit-progress-value {
    background-color: red;
    border-radius: 1rem;
}

/*파이어폭스 호환성을 위해*/
progress::-moz-progress-bar {
    background-color: red;
    border-radius: 2px;
}
```

<br>

### Sass

<br>

-   CSS를 개선한 CSS 전처리언어 (Preprocessor) = SASS
-   Sass에는 조건문, 반복문, 변수, 함수 존재
-   즉, 문법이 존재한다는 의미 => 반복적인 부분 쉽게 처리 가능
-   SASS 파일은 `파일명.scss`
-   웹 브라우저는 sass파일을 읽지 못하니까 css로 변환 작업이 필요하다. vscode extension에서 `Live Sass Compiler version 5 이상`을 설치한다. 그러면 vscode 하단에 `Watch Sass`가 보인다. 이를 누르면 scss에서 css로 변환이 된다.
-   같이 생성되는 `.map`파일은 크롬 개발자도구 디버깅 용도이다. 크롬에서는 scss 파일을 읽는 것이 아니라 css 파일을 읽을 것이다. `.map` 파일이 있으면 크롬에서 css가 아닌 scss 파일로 분석해준다.

<br>

1. 코드를 scss에 작성
2. html에 파일 넣는건 css 파일 넣기

<br>

    하단에 바가 안보여서 watch sass를 찾을 수 없다면?
    View - Appearance - Status bar 켜기

<br>

파일 확장명에 따른 차이

-   sass 문법을 작성해서 만든 파일명은 2개가 있음
-   `.scss` : 중괄호 써야 하는거 (보통 이거 많이 사용)
-   `.sass` : 중괄호 안써도 되는거

<br><br>

### Sass 문법

<br>

**문법01. 값을 저장하고 사용하는 변수**

-   어려운 단어 기억해야할 때 변수 문법을 사용한다. `$변수명 : 저장해서 사용할 값;`
-   규칙적인 스타일 만들 때도 변수를 사용하는 것은 도움이 된다.
-   사칙연산 바로 가능 (단, %에서 px 빼는 행위는 하지 말고 같은 단위끼리 하자.)

```css
/* 기존 css 코드 */
.background {
    background-color: #2a4cb2;
}

.box {
    color: #2a4cb2;
}
```

```scss
// 변수 사용 scss 코드
$메인컬러: #2a4cb2;

.background {
    background-color: $메인컬러;
}
```

```scss
// scss 응용하기 좋은거
$메인컬러: #2a4cb2;
$서브컬러: #eeeeee;
$기본사이즈: 16px;

.background {
    background-color: $메인컬러;
    font-size: $기본사이즈 - 2px;
}

.box {
    color: $서브컬러;
    font-size: $기본사이즈 + 2px;
}
```

위 코드는 font-size를 기본사이즈에서 빼고 더함으로써 **상대적인 크기**를 결정했다. 그래서 나중에 수정하기에 용이하다. 즉, 규칙적인 스타일 만들 때도 변수를 사용하는 것은 도움이 된다는 의미이다.

<br>

```scss
// 괄호를 치는 것이 좋은 습관 !
$기본사이즈: 16px;

.box {
    font-size: $기본사이즈 + 2px;
    width: (100px * 2);
    height: (300px / 3);
}
```

<br>

    사실 CSS 기본 문법에도 변수 문법 이용 가능하고
    사칙연산도 사용 가능하다. 근데 귀찮음

<br>

**문법02. 셀렉터 대신 사용하는 Nesting**

-   관련있는 class들을 묶어서 사용할 때 편함
-   nesting 안에다가 또 nesting 가능하지만, 보통 2개 이상 중첩하지는 않음

```css
/* CSS 문법 */
.navbar ul {
    width: 100%;
}

.navbar li {
    color: black;
}
```

```scss
// sass 문법
.navbar {
    ul {
        width: 100%;
    }
    li {
        color: black;
    }
}
```

```scss
// sass 문법으로 hover 사용법
.navbar {
    :hover {
        color: blue;
    }
}

.navbar {
    &:hover {
        color: blue;
    }
}
```

-   위의 방식은 `.navbar :hover`
-   밑의 방식은 `.navbar:hover`
-   즉 `&`기호를 붙히면 셀렉터를 스페이스바 없이 붙힐 수 있음

<br>

**문법03. 이미 있는 클래스를 확장하는 @extend**

-   반복되는 코드 없애고 싶을 때 사용
-   class 전체를 복사해주는 문법이 `@extend`
-   `%`는 `.` 대신 사용할 수 있는 임시 클래스
-   css에서 클래스로 컴파일하고 싶지 않을 때 사용
-   컴파일 하고나면 `%` 안에 있는 것들은 모두 사라짐

1. 중복된 스타일이 많으면 클래스로 묶는다
2. `@extend`로 필요할 때 복사한다.

```scss
.btn {
    width: 100px;
    height: 100px;
    padding: 20px;
}

.btn-green {
    @extend .btn;
    color: green;
}

.btn-red {
    @extend .btn;
    color: red;
}
```

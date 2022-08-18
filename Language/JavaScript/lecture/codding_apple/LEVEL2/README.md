## 코딩애플 JavaScript 입문과 웹 UI개발

<br><br>

### setTimeout, setInterval

<br>

#### setTimeout

-   몇 초 **후** 코드 실행하기 위한 자바스크립트 기본 내장 함수
-   1000ms = 1초
-   콜백함수자리에 만들어둔 함수 당연히 넣을 수 있음

```javascript
setTimeout(function () {
    실행할코드;
}, ms);

// 콜백함수에 함수 넣으면?
setTimeout(알림창제거, 3000);

function 알림창제거() {
    document.querySelectorAll('.alert')[0].style.display = 'none';
}
```

-   대신 만든 함수 넣을 때 `함수()` 말고 `함수`만 넣으셈

```javascript
setTimeout(알림창제거(), 3000);
```

setTimeout은 함수로의 참조를 받아올 것이라 예상한다. 위의 `알림창제거()`는 함수를 실행시킨다. 그리고 실행의 결과가 setTimeout으로 전달된다. 우리가 코딩했던 것들을 살펴봤을 때, 알림창제거()의 결과는 undefined (아무것도 리턴하지 않는 함수)이다.그러므로 아무것도 스케쥴되지 않으니까 `알림창제거`만 넣어라.

-   타이머를 변수에 담아서 사용 가능!

```javascript
let 타이머 = setTimeout(어쩌구);
```

<br>

#### setInterval

-   몇 초 **마다** 코드 실행하기 위한 자바스크립트 기본 내장 함수

```javascript
setInterval(function () {
    실행할코드;
}, ms);
```

<br>

#### clearTimeout

-   타이머를 삭제하고 싶으면 타이머를 변수에 담고 clearTimeout 하면 된다.
-   `clearTimeout()`, `clearInterval()` 상호교환 가능하다. 허나, 명확성을 위하여 그렇게 하지말라고 [공식 문서](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)에서 표기하고 있다.

```javascript
function 콘솔출력() {
    console.log('안녕');
}

let 타이머 = setTimeout(콘솔출력, 1000);
clearTimeout(타이머);
```

<br><br>

### 자바스크립트 문법 vs 브라우저 사용법

-   자바스크립트 문법 : `if, var, function`
-   브라우저 사용법 : `document.querySelector(), setTimeout(), alert()`
-   자바스크립트 문법은 브라우저 사용할 경우 프로그래밍적인 기능을 더하고 싶을 때 사용하는 것이다. (ex. 조건 분기, 잠깐 보관, 코드가 길때 축약 등)
-   웹 브라우저 사용법은 정확하게 **Web Browser API 사용법** 이라고 한다.

<br><br>

### 정규식 (Regular Expression)

-   공백 검사 말고도 유저가 입력한게 이메일 형식인지 맞는지 검사하고 싶다면 정규식을 사용해보도록 하자.
-   [regex test](https://regexr.com/) 사이트를 통해 표현이 맞는지 검사해보자.

<br>

#### includes()

-   문자 검사하는 쉬운 방법이다.
-   한계 : 왼쪽 문자에 한글이 들어있냐, 영어가 들어있냐, A로 끝나냐, 숫자가 1회 출현하냐 이런 것을 검사할 수 없다.

```javascript
'abc'.includes('a');
// true
'abc'.includes('d');
// false
```

<br>

#### 정규식 파헤치기

-   `/ /`안에 문자를 넣고 정규식을 사용한다.

```javascript
/a/.test('abcde');
// true
```

<br>

**정규식으로 범위 지정 가능**

<br>

`/[a-z]/` : a ~ z 중 아무 글자 1개, 즉 범위 지정 가능

```javascript
/[a-z]/.test('abcde')
// true
/[a-z]/.test('바보')
// false
/[A-Z]/.test('abcde')
// false
/[A-Z]/.test('abcdA')
// true
```

<br>

-   `/[a-zA-z]/` : 아무 알파벳 1개
-   `/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/` : 아무 한글문자 1개
-   `/[0-9]/` : 아무 숫자 1개
-   `/\S/` : 아무 문자 **1개**, 특수기호까지 포함

```javascript
/[ㄱ-ㅎ가-힣]/.test('안녕')
// true
/[ㄱ-ㅎ가-힣]/.test('ㅏㅏㅏ')
// false
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('ㅏㅏ')
// true
```

<br>

    주의할 게, 지금 문자 1개를 찾는 것이다.
    /a/는 a 문자 1개"만" 찾는 것이다.
    여러 개 찾고 싶으면
    /a+/ 형태로 +를 사용하자.
    +는 왼쪽 문자 반복 검색이다.

<br>

**정규식으로 시작`(^)`/끝문자`($)` 검사**

<br>

-   `/^a/` : a로 문자 시작하냐
-   `/a$/` : a로 문자 끝나냐
-   `/a|b/` : a 또는(or) b 있냐
-   `/(a|b)/` : 괄호 사용 가능, 정규식에서 괄호는 묶어서 계산해줌

<br>

**정규식으로 이메일형식 검사**

<br>

-   `.` : 정규식의 특별한 문법, 따로 dot을 사용하고 싶으면 `\` 써주기
-   `+` : 왼쪽 문자 반복 검색

```javascript
/\S@\S\.\S/.test('aaa@bbb.ccc')
// false
// 모든문자 1개 + 골뱅이 + 모든문자 1개 + . + 모든문자 1개

/\S@\S\.\S/.test('a@b.c')
// true

/\S+@\S+\.\S+/.test('aaa@bbb.ccc')
// true
```

<br><br>

### Carousel (캐러셀) 

- carousel, 회전목마라는 뜻인데 간단히 이미지 슬라이드라고 이해하자.
- one-way 애니메이션 기반 UI 이다.

1. 애니메이션 시작 전 화면 제작
2. 애니메이션 종료 후 화면 제작
3. 언제 종료화면으로 변할지 JS 코드짜기
4. transition 추가

<br>

1. **시작 전 화면**

```css
.slide-container {
    width: 300vw;
    display: flex;
}

.slide-box {
    width: 100vw;
}

.slide-box img {
    width: 100%;
}
```

- 이런 느낌으로 컨테이너 전체 너비를 `캐러셀 이미지 개수 * 100vw` 정도로 해놓는다.
- 그리고 박스의 폭 각각을 `100vw`로 설정한다.
- 이미지 너비를 `100%`로 하고 박스에 꽉차게 설정한다.
- 현재 슬라이드 컨테이너 너비가 300vw라서 좌우 스크롤이 생길 것이다. 그를 막기 위해 slide-container를 감싸는 div 박스를 하나 만들고 `style="overflow: hidden"` 줘서 흐르는걸 숨겨준다.

<br>

2. **시작 후 화면**

- margin-left 속성을 줘도 되지만, 성능 때문에 `transform: translateX()` 속성을 사용하자. 현재 상황에서 `-100vw`를 해주면 전체적으로 왼쪽으로 이동하니 두번째 캐러셀 이미지가 보일 것이다.

```css
.slide-container {
    width: 300vw;
    display: flex;
    transform: translateX(-100vw);
}
```

<br>

3. 언제 종료화면으로 변할지 JS 코드 짜기

- 버튼을 클릭했을 때 이미지에 translateX() 속성 주는 방식
- 해당하는 캐러셀 이미지에 가도록 X축 조절하면 됨

```javascript
document
    .querySelector(".slide-2")
    .addEventListener("click", function () {
        document.querySelector(".slide-container").style.transform =
        "translateX(-100vw)";
});
```

<br>

4. **transition**

```css
.slide-container {
    width: 300vw;
    display: flex;
    transition: all 1s;
}
```

<br>

**이전 버튼과 다음 버튼을** 활용할 때는 현재 상테에 대한 변수를 하나 두고 그 변수 값을 조정하며 코드를 짜도록 하자.

<br><br>

### function() return 문법

[자바스크립트 함수 function](https://github.com/Shin-Jae-Yoon/TIL/tree/master/Language/JavaScript/lecture/codding_apple/LEVEL1#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-function)는 긴 코드를 축약하는 것과 파라미터를 추가해서 사용하는 것에 장점이 있었다. **return은 함수쓰고 그 자리에 뭔가 뱉고 싶으면 쓰는 것이다.**

```javascript
function 함수() {
    return 123
}

함수(); // 이 자리에 123 퉤! 하고 뱉음

// 확인해보자
var 변수 = 함수();
console.log(변수);
```

- 반환할 때 숫자, 문자, 수식 다 가능하다.
- return은 함수종료 기능도 있다. return 밑에는 더이상 실행되지 않는다.

<br>

> **그래서 return 용도가 뭔데?**
>> 자료를 넣으면 다른 자료가 나오는 변환기를 만들고 싶을 때 사용

<br>

쇼핑몰을 만드는 예시에서 가격 밑에 부가세를 표현해주고 싶다고 하자. 그럼 함수를 만들고 가격(자료)을 넣으면 부가세(다른 자료) 나오는 계산기를 만들고 싶은 것이다.

```javascript
function 부가세(가격) {
    return 가격 * 0.1;
}

부가세(50000); // 5000
```

`문자 -> 문자 변환기`, `숫자 -> true/false 변환기` 아무렇게나 제작 가능

<br><br>

### 자바스크립트 소수점 다루기

자바스크립트에서 소수점 있는 숫자연산시 주의해야한다. 약간의 오차가 발생할 수 있다.

```javascript
console.log(55555 * 1.1);
// 61110.50000000001

console.log(1.1 + 0.3);
// 1.4000000000000001
```

컴퓨터는 2진법으로 설계되어있기 때문에, `10 + 20`이라고 하면 숫자 10과 숫자 20을 더하는 것이 아니라 2진법으로 변환하여 `1010 + 10100`을 계산한다. 이때, 소수점을 2진법으로 변환 시 문제가 발생한다.

<br>

`1.1 -> 1.00011001100110011001100....` 이렇게 무한히 `1100`이 반복되는 모습을 확인가능하다. 무한한 숫자를 저장하기에 저장공간이 작아서 중간에 자르고 반올림 시켜버린다.

<br>

매우 작은 오차라서 평소엔 무시해도 되지만, 조금 정확한 연산을 원한다면 

1. 애초에 소수점을 사용하지 말든가
    - 소수점을 전부 10곱해서 연산하고 10으로 나누기
2. 소수점 정확하게 계산해주는 라이브러리 쓰든가
3. 연산결과를 반올림해서 쓰든가

<br>

#### 소수점 반올림하는 법 toFixed

- `숫자.toFixed(몇째 자리 까지)`
- 참고로 toFixed 붙혀주면 **문자로 반환됨**
- 크롬 콘솔탭에서 색깔이 검은색이면 문자라고 생각하셈, 숫자는 파란색인듯

```javascript
console.log((55555 * 1.1).toFixed(1))
// 61110.5

console.log((55555 * 1.1).toFixed(2))
// 61110.50
```

#### 자바스크립트 +(플러스) 연산자 특징

- `'문자' + 123 => '문자123'`
- `'문자' + '문자' => '문자문자'`
- 숫자끼리 더하고 싶으면 `parseInt()`, `parseFloat()` 사용

```javascript
function 부가세(가격) {
    let result = (가격 * 1.1).toFixed(1);
    return result + 1
}

console.log(부가세(55555));
// 61110.51
// toFixed 써서 result가 문자니까 문자 + 1 = 문자1이 된 것


function 부가세(가격) {
    let result = (가격 * 1.1).toFixed(2);
    return parseFloat(result) + 1;
}

console.log(부가세(55555));
// 61111.5
```

<br><br>

### 부동소수점 부가 설명

[코딩애플 유튜브 영상](https://youtu.be/-GsrYvZoAdA)을 참조하여 정리했다. 모든 그림의 저작권은 [코딩애플](https://codingapple.com/)님에게 있습니다. 추가로 참고하기 좋은 [링크](https://codetorial.net/articles/floating_point.html)입니다.

- 코드를 보면, `1.1 + 0.1`이 `1.2`와 동일하지 않고 약간 크다고 한다.
```javascript
console.log(1.1 + 0.1 == 1.2);
// false

console.log(1.1 + 0.1 > 1.2);
// true
```

#### 1. RAM

컴퓨터에서 5라는 숫자를 저장하려면 **RAM**에 저장한다. 0과 1의 이진수 형태로 저장하게 된다. 칸은 하나당 bit라고 한다.

<p align="center"><img src="./img/img04.png"></img></p>

숫자는 보통 8칸 정도를 마련하여 저장한다. 더 큰 수를 저장하고 싶으면 16칸도 할당한다. 16칸은 (-32768 ~ 32767) 까지 저장 가능하다.

<br>

#### 2. 부동소수 표현 저장

소수 저장은 아무렇게나 하는 것이 아니라, 덧셈이나 뺄셈과 같은 연산을 편하게 하기 위하여 [IEEE 표준 표현방식](https://docs.microsoft.com/ko-kr/cpp/build/ieee-floating-point-representation?view=msvc-170)을 따른다.

<br>

예를 들어, `5.125`라는 수를 저장하기 위하여 메모리에 넉넉히 32칸을 준비한다. 이때, 32비트를 사용하는 방식을 **단정도(single precision)** 라고 한다. **배정도 표현**에서는 64비트를 사용한다.

- 맨 첫번째 칸 : 부호 저장 (양수 = 0, 음수 = 1)
- 저장할 숫자를 2진법으로 변환 ( **5.125 -> 101.001** )
- 점을 왼쪽 끝까지 이동 ( **1.01001 * 2<sup>2** )
- 01001 부분을 **mantissa**라고 하는데 여기는 맨 뒤 23칸에 밀어넣는다.
- 지수 부분에 127을 더하고 앞에 8칸에 저장한다. (지수는 2<sup>2</sup> 에서 위에꺼를 의미. 2<sup>4</sup>이면 4가 지수)
- 여기서 127은 bias이다. bias는 2<sup>k-1</sup>인데 여기서 k는 지수부의 비트 수인 8이다. (8칸)

<br>

단정도 표현은 **부호부 (1칸) + 지수부 (8칸) + 가수부 (23칸)** 으로 이루어진다.

<br>

#### 3. 순환소수 문제

이러한 저장 방식에는 순환소수 문제가 있다. 예를 들어, `10진수 0.125`는 `2진수 0.001`로 깔끔하게 나누어떨어진다. 그런데, `10진수 0.1` 같은 숫자는 깔끔하게 떨어지지 않고 `2진수 0.000110011001100110011001100110011001...` 무한히 반복하게 된다. 이러한 경우 32칸에 저장할 수 없어서 뒷부분을 잘라버리고 저장한다. 그렇다면 자른 뒷 부분의 오차가 발생하게 되는 것이다. 한마디로 **정확히 0.1을 저장한 것이 아니라 0.1에 근접한 수를 저장한 것이다.**

<br>

#### 4. 문제 발생

이 사소한 오차가 큰 문제인가? 실제로, 걸프전 당시 미군이 운영하던 패트리어트 (Patriot Missile Defense)라는 미사일 요격 장비가 있었는데, 미사일 요격에 실패하여 28명의 군인이 전사한 사건이 있었다. 패트리어트를 구동하기 위한 프로그램에서 **시간을 0.1초 단위로 측정했다.** 

<br>

여기서 패트리어트는 숫자 1개에 24칸을 사용했다. 그러면 0.1을 표현할 때 오차가 생기는게 단정도 표현 방식보다 더 컸을 것이다. 보통 1시간 마다 0.0034초 오차가 발생했다고 한다. 사소해보이지만, [사고 report](http://nifty.stanford.edu/2003/pests/2002/lectures/07.1_FloatingPoint/Patriot.html)를 보면 해당 기기를 100시간 가동시키니 **0.34초** 오차가 발생했다. 이렇게 봐도 작아보이는가 ?

<br>

1500 m/s 속력의 미사일 요격시 이 0.34초 오차 때문에 500m 정도 빗나갔다. 이래서 요격에 실패하여 비극을 일으킨 것이다.

<br>

#### 5. 결론 (소수를 어디에 사용?)

5-1. 정확히 계산해야하는 자료는 **정수**로 저장 <br>

돈 같은 경우 5.1 달러를 저장하고 싶으면 float를 사용하여 저장하면 안되고 **정수**의 형태로 저장해야 한다. 즉, 5.1달러가 아닌 5100센트로 저장해야 한다. 

<br>

5-2. 굳이 float 써야할 때는 **반올림 문법** <br>

```javascript
precision = Math.pow(10, precision)
Math.ceil(num * precision) / precision
```

<br>

5-3. **double 자료형 사용**하여 더 정확하게 저장 <br>

숫자 1개당 32칸이 아닌 **64칸을 사용**한다. [IEEE 부동소수 표현 설명](#2-부동소수-표현-저장)에서 봤던 **배정도 표현**을 사용하는 것이다. 오차가 매우 작아지기 때문에 괜찮지만, 단점으로는 역시 메모리 용량을 2배 쓰는 것이니까 낭비일 수 있다.

<br><br>

### scroll 이벤트 활용 (window 객체)

```javascript
window.addEventListener('scroll', function() {
    this.window.scrollY ~
})
```
- 왼쪽이 스크롤 될 때 마다 안에 코드 실행해줌
- 현재 그냥 html 페이지 그 자체를 의미하는건 window, DOM이 있다.
- 스크롤 이벤트를 감지하고 싶으면 보통 window에 이벤트리스너 부착

<p align="center"><img src="./img/img05.png" width="60%"></img></p>

- `window.scrollY` 하면 스크롤 얼마나 했는지 알려줌. 가로 스크롤은 `window.scrollX`
- `window.scrollTo(x,y)`는 지정한 위치로 강제로 스크롤함. 원래는 반짝! 순간이동해야하는데 부트스트랩 쓰면 스크롤을 스무스하게 이동시키는게 자동 설정임 이거 해결하려면 css 파일 열어서 아래 코드 작성
```css
:root {
    scroll-behavior: auto;
}
```
- `window.scrollBy(x,y)`는 현재 위치부터 강제로 스크롤함.

<br>

#### jQuery로 scroll 이벤트

```javascript
$(window).on('scroll', function() {
    $(window).scrollY ~
})
```
- `$(window).scrollTop()` : jQuery 내장, 현재 스크롤바 위치 출력, scrollY랑 똑같은 기능인데 `scrollTop(숫자)` 하면 scrollTo 기능도 되는거임.

<br>

#### div 박스 스크롤바 내린 높이, 실제 높이

1. div 박스는 scrollY 사용 불가능함. scrollY는 window에만 가능. 박스는 `scrollTop` 사용해야함. 실제 높이는 `셀렉터.scrollHeight` 사용

2. 하지만, 스크롤을 끝까지 내려도 스크롤양과 실제높이가 같지 않을 수 있다. 이는 `scrollTop`의 특징 때문이다. 위에서부터 얼마나 스크롤바를 내렸는지 알려주기는 하지만, 전체를 내린 것은 아니기 때문이다. 현재 위치부터 내린 양을 계산하기 때문에 `눈에 보이는 div 박스 높이 + 스크롤양 = 실제높이`가 되는 것이다.

3. 눈에 보이는 div 박스 높이도 css에 적힌 그 높이가 아니라 정확하게 구해보면 `clientHeight`를 사용하면 된다.

<p align="center"><img src="./img/img06.png" width="80%"></img></p>

```javascript
document.querySelector(".lorem").addEventListener("scroll", function () {
    let 스크롤양 = document.querySelector(".lorem").scrollTop;
    let 실제높이 = document.querySelector(".lorem").scrollHeight;
    let 눈높이 = document.querySelector(".lorem").clientHeight;

    console.log(스크롤양, 실제높이, 눈높이);
});
```

- `188.29 + 100 = 288?` 같이 약간 오차가 생길 수 있기 때문에 등호(`==`)를 이용하여 비교하기 보다 (끝까지 스크롤 내렸는지 비교하기 보다) **여유를 가지고 비교하는 것이 좋다.** 맨 밑에서부터 10px 정도 남기고 스크롤 했는지?처럼
- console을 찍어보면, clientHeight와 scrollHeight는 고정인데 scrollTop의 값이 변하는 것을 확인 가능. 즉, 위에 `눈에 보이는 div 박스 높이 + 스크롤양 = 실제높이`는 끝까지 내렸을 때 성립하는 공식임

<br>

#### 결론

- 페이지 스크롤 : `window.scrollY`
- div 스크롤 : `.scrollTop`
- div 실제높이 : `.scrollHeight`
- div 화면높이 : `.clientHeight`
- jQuery 페이지 스크롤 : `$(window).scrollTop()`
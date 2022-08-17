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

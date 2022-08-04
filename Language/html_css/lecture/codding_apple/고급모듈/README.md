## 코딩애플 HTML_CSS 강좌 필기 (고급모듈)

<br>

### Pseudo-element

<br>

기초 모듈 수업에서 [pseudo-class](https://github.com/Shin-Jae-Yoon/TIL/tree/master/Language/html_css/lecture/codding_apple/%EA%B8%B0%EC%B4%88%EB%AA%A8%EB%93%88#css%EC%9D%98-%EB%8B%A4%EC%96%91%ED%95%9C-pseudo-class)가 무엇인지 학습했었다. `:hover`와 같이 특정 요소가 다른 상태일 때 (ex. 마우스 올렸을 때) 스타일 줄 수 있게 해주는 것이었다. pseudo-element는 콜론 2개 `::`를 입력하여 사용한다.

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

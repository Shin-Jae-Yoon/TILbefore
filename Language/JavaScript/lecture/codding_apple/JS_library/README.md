## 자바스크립트 라이브러리

> 1. Swiper
> 2. Chart.js
> 3. Animate On Scroll
> 4. EmailJS
> 5. Lodash
> 6. React / Vue
> 7. Fullpage.js

<br>

### Swiper

<p align="center"><a href="https://swiperjs.com/"><img src="./img/img01.png" style="border: 1px solid black" /></a></p>

부트스트랩의 캐러셀을 활용해도 괜찮지만, swiper를 이용하여 다양한 캐러셀 활용 가능. 이미지 lazy loading, 터치/드래그 가능 사실 쓸지는 의문

<br>

### Chart.js (추천)

<p align="center"><a href="https://www.chartjs.org/"><img src="./img/img02.png" style="border: 1px solid black" /></a></p>

웹페이지에 차트 도입할 때 싸용, 관리자 페이지, 어드민 페이지에서 통계 만들 때 유용할 듯. 이건 진짜 많이 사용할 예정

<br>

### Animate On Scroll (약간 추천)

<p align="center"><a href="https://michalsnik.github.io/aos/"><img src="./img/img03.png" style="border: 1px solid black" /></a></p>

스크롤 내리면 요소가 등장하는 애니메이션 사용할 때 좋음. [깃허브 페이지](https://github.com/michalsnik/aos)에서 사용법 나와있음. 아래 코드 넣으면 설치 끝

```html
<head>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>

<body>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>
```

<br>

### EmailJS

서버로 이메일 전송 하지만, 서버를 빌려서 자바스크립트만으로 이메일 전송 가능하게 해주는 라이브러리. [링크](https://www.emailjs.com/docs/introduction/how-does-emailjs-work/)에서 시키는대로 하면 되지만, 나는 서버 만들거니까 별로 사용 안할듯

<br>

### Lodash

array, object, 문자, 숫자 자료 등을 편하게 다루도록 기본 함수 제공해줌. 근데 안쓸듯

<br>

### React, Vue (강력 추천, 따로 공부)

컴포넌트 단위처럼 페이지가 많아서 라우팅 하고 이런거 UI 재활용 자주 해야하고 페이지 새로고침 없이 필요한 부분만 렌더링 하도록 동작하는 방식인 SPA(Single Page Application)을 만들 때 유용한 자바스크립트 라이브러리

<br>

자바스크립트 기본부터 제대로 배우고 이용하는 것을 추천

<br>

### Fullpage.js

웹페이지를 PPT처럼 만들어줌. 이것도 안쓸 예정

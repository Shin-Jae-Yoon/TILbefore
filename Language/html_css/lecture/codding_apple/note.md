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
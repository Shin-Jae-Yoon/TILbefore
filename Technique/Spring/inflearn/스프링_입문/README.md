# 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술

-   인프런 김영한님의 첫 번째 강의
-   해당 [강의 링크](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8)

<br>

## 프로젝트 환경설정

### 프로젝트 생성

1. https://start.spring.io/ 스프링 프로젝트 생성

    - 프로젝트 생성
        - Project : Gradle
        - Spring Boot : (SNAPSHOT), (M~)는 정식 버전 아니니까 아무 것도 없고 숫자만 써진 버전으로 설정
        - Language : Java
        - Packaging : Jar
        - Java : 11
    - Project Metadata
        - Group : 보통 기업 도메인명 적어줌. 임의로 hello 적음
        - Artifact : 프로젝트명
    - Dependencies
        - 어떤 라이브러리를 당겨와서 사용할 것이냐
        - Spring Web 추가
        - Thymeleaf 추가 (프리마커 쓰는 회사도 있음)

2. 인텔리제이로 프로젝트 오픈

    - 자바11로 프로젝트 생성했으니, 인텔리제이도 세팅 변경
    - 프로젝트 JDK 설정
        - File - Project Structure - Project Settings - Project
            - SDK : 11 Oracle OpenJDK version 11.0.16
            - Language level : SDK default
        - Platform Settings - SDKs - 1.8이 아닌 11로 설정
    - Gradle JDK 설정
        - File - Build, Execution, Deployment - Build Tools - Gradle
            - Build and run using : Gradle -> IntelliJ (속도향상)
            - Run tests using : Gradle -> IntelliJ (속도향상)
            - Gradle JVM : 11 Oracle OpenJDK

3. 프로젝트 내용물 설명
    - gradle/wrapper : gradle 관련하여 사용하는 폴더
    - src : 기본적으로 main/test 두 갈래 생성
    - src/test : 최근 트렌드인 test 코드 관련, Junit5 기반
    - src/main/resources : 실제 java 코드 제외한 xml, properties, html 등 나머지 전부
    - gitignore : github에 올릴 때 제외할 파일들
    - gradlew, bradlew.bat, settings.gradle : 그래들 설정 관련
    - build.gradle : 예전에는 실제로 타이핑하고 코드 짰으나, 최근에는 start.spring.io와 같은 스프링부트 덕에 설정 파일이 제공됨

```java
plugins {
    // 선택한 스프링부트 버전과 자바 언어 등
	id 'org.springframework.boot' version '2.7.4'
	id 'io.spring.dependency-management' version '1.0.14.RELEASE'
	id 'java'
}

group = 'hello'
version = '0.0.1-SNAPSHOT'
// 자바 11버전을 의미
sourceCompatibility = '11'

repositories {
    // mavenCentral이라는 공개된 사이트에서 라이브러리 다운 받아오기
	mavenCentral()
}

dependencies {
    // start.spring.io에서 설정했던 의존관계
	implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
	useJUnitPlatform()
}

```

4. 생성한 프로젝트 실행
    - src/main/java/hello/hellospring/HelloSpringApplication.java 메인 메서드 그냥 실행
    - `@SpringBootApplication` 애노테이션이 있는 것이 스프링부트 실행 파일
    - `localhost:8080` 들어가서 Whitelabel Error Page 뜨면 성공

```java
package hello.hellospring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloSpringApplication.class, args);
    }

}
```

5. 스프링부트 실행 오류
    - 8080포트 이미 열려있어서 안되는 경우
    - cmd 관리자 권한으로 실행
    - `netstat -ano | findstr 8080`으로 열려있는 포트 확인
    - `taskkill /F /pid [process_id]`로 8080포트 닫기

<br>

### 라이브러리 살펴보기

-   Maven, Gradle 같은 빌드 툴은 의존관계를 관리해준다. 실제 우리가 추가한 의존관계는 `Spring Web, Thymeleaf`인데, 외부 라이브러리를 확인해보면 수많은 라이브러리가 다운받아져있다. **의존관계에 따라 자기가 필요한 라이브러리들을 알아서 당겨온다.**
-   인텔리제이 우측에 작은 Gradle 클릭해보면, 여러 의존관계 살펴볼 수 있음

<br>

**compileClassPath : 스프링 부트 라이브러리**

-   spring-boot-starter-web
    -   spring-boot-starter-tomcat : 웹서버
    -   spring-webmvc : 웹 MVC
-   spring-boot-starter-thymeleaf : 타임리프 템플릿 엔진 (View)

    -   spring-boot-starter
        -   spring-boot
            -   spring-boog-core
        -   spring-boot-starter-logging
            -   logback
            -   slf4j

-   톰캣은 WAS(Web-Application-Server)이다.

    -   예전에는 서버에 톰캣같은 웹서버를 설치해놓고 거기에 자바 코드를 밀어놓는 식으로 개발했음. 웹서버와 개발 라이브러리가 완전히 분리되어 있었음
    -   최근에는 소스 라이브러리에서 이런 웹서버를 알아서 들고있음(임베디드, 내장) 그래서 자바 메인 메서드만 실행해도 따로 설정 필요없이 웹서버가 뜬다. 8080포트로 들어갈 수도 있음

-   실무에서, `system.out.println()` 방식으로 출력하지 않고 log를 사용한다.
    -   심각한 로그를 따로 관리하거나, 로그 파일이 관리가 됨
    -   slf4j는 인터페이스이고 logback은 실제 로그를 어떤 구현체로 출력할 지
    -   최근에는 slf4j + logback 조합을 보통 사용한다. 성능도 빠르고 지원하는 기능 많음

<br>

**testCompileClasspath : 테스트 라이브러리**

-   spring-boot-starter-test
    -   junit : 테스트 프레임워크 (최근에는 junit 5버전 사용, 핵심)
    -   mockito : 목 라이브러리
    -   assertj : 테스트 코드 작성을 더 쉽게 해주는 라이브러리
    -   spring-test : 스프링 통합 테스트 지원

<br>

### View 환경설정

**Welcome Page 만들기** <br>

`resources/static/` 경로에 `index.html` 파일을 추가하면, welcome page의 기능을 한다. 이는 단순한 정적 페이지이다.

```html
// resources/static/index.html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        Hello
        <a href="/hello">hello</a>
    </body>
</html>
```

-   [spring boot docs - welcomepage](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.servlet.spring-mvc.welcome-page)
-   [스프링 공식 튜토리얼](https://spring.io/guides/gs/serving-web-content/)

**thymeleaf 템플릿 엔진** <br>

템플릿 엔진을 사용하여, 동적인 페이지를 구현할 수 있다.

-   [thymeleaf official homepage](https://www.thymeleaf.org/index.html)
-   [스프링부트 템플릿 엔진 메뉴얼](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.servlet.spring-mvc.template-engines)

<br>

웹 어플리케이션에서 첫 번째 진입점이 바로 **Controller, 컨트롤러**이다.

1. `hello/hellospring/controller` 패키지 생성
2. 패키지에 `HelloController.java` 생성
3. `resources/templates/hello.html` 생성

```java
// src/main/java/hello/hellospring/controller/HelloController.java
package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!!");
        return "hello";
    }
}
```

-   `@GetMapping("hello")` : get/post 방식 말할 때 그 get이다. `localhost:8080/hello`와 mapping
-   model의 속성으로 키 : data, 값 : hello!!를 넘긴다.
-   `return "hello"`로 `/resources/templates/hello`를 찾아서 렌더링 함

```html
// resources/templates/hello.html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>Hello</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <p th:text="'안녕하세요. ' + ${data}">안녕하세요. 손님</p>
    </body>
</html>
```

-   `http://www.thymeleaf.org`를 추가함으로써 타임리프 문법 사용 가능

<p align="center"><img src="./img/img01.png"></img></p>

1. 웹 브라우저에서 `localhost:8080/hello`로 get 요청
2. 내장된 톰캣이 웹서버의 역할을 하여 받아서 controller로 전달
3. 스프링이 컨트롤러에 맵핑된 `hello`가 있나 찾아봄.
4. controller인 helloController의 메서드가 실행된다. 이때 스프링이 Model을 만들어서 model을 controller에 넣어준다.
5. controller는 이 model에다가 키 : data, 값 : hello!!를 넣는다.
6. `/resources/templeates/hello`를 찾고 model을 화면에 넘기면서 화면을 렌더링해라
    - 즉, 컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버( viewResolver )가 화면을 찾아서 처리하게 된다.
        - 뷰 리졸버는 View를 찾아주고 템플릿 엔진 연결시켜주는 녀석
        - 찾을 때, 스프링 부트 템플릿 엔진 기본 viewName에 매핑
        - `resources:templates/` + {ViewName} + `.html`

<br>

**서버 재시작 없이 View 파일 리로드**

1. `build.gradle`에 의존성 추가 (spring-boot-devtools 라이브러리 설치해준 것)
    - `developmentOnly 'org.springframework.boot:spring-boot-devtools'`
2. `/resources/application.properties`에 아래 코드 추가 (필수는 아님)

```java
spring.devtools.livereload.enabled=true
spring.devtools.restart.enabled=true
```

3. File - Settings - Advanced Settings - Compiler에서 `Allow auto-make to start~` 체크
4. File - Settings - Build, Execution~ - Compiler에서 `Build project automatically` 체크

이제 View 파일 수정하면 한 5초 뒤에 서버가 알아서 리로드 되면서 크롬 가서 새로고침 해보면 확인 가능하다. 만약, 새로고침 없이 보고 싶으면 크롬 확장 프로그램 Livereload 설치하셈

<br>

### 빌드하고 실행하기

빌드하고자 하는 프로젝트 폴더로 이동하고 거기서 마우스 우클릭으로 `Git Bash Here` 혹은 `터미널에서 열기` 클릭! WSL2 java 관련 설정은 [여기](https://github.com/Shin-Jae-Yoon/TIL/tree/master/Language/Java#wsl2)

1. `./gradlew build`
2. `cd build/libs`
3. `java -jar hello-spring-0.0.1-SNAPSHOT.jar`

이러면 서버 실행 완료된 것! 종료 하려면 `Ctrl + C`

-   빌드 폴더 깔끔하게 지우기 `./gradlew clean`

<br><br>

## 스프링 웹 개발 기초

웹을 개발한다는 것은 크게 3가지 방법이 있다.

-   정적 컨텐츠 : welcomepage처럼 서버에서 하는 것 없이 파일을 그대로 웹 브라우저에게 내리는 것
-   MVC와 템플릿 엔진 : jsp, php가 흔히 말하는 템플릿 엔진인데 html을 그냥 주는 것이 아니라 서버에서 프로그래밍 해서 html을 동적으로 바꿔서 내리는 것. 이 작업을 하기 위하여 Model, View, Controller 패턴으로 개발
-   API : JSON 형식으로 데이터를 전달해주는 방식

<br>

사실 정적 컨텐츠 방식을 제외하면, 이렇게 생각하면 된다.

-   MVC 방식처럼 View를 찾아서 템플릿 엔진을 통해 화면을 렌더링해서 HTML을 변환하여 HTML 파일을 웹 브라우저에 넘겨주는 방식, **HTML을 내리냐**
-   API를 사용하여 **데이터를 바로 내리냐**

<br>

### 정적 컨텐츠

스프링 부트는 정적 컨텐츠를 [제공](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.servlet.spring-mvc.static-content)하고 있다. `/resources/static` 폴더에 아무 html 파일을 만들면 그대로 반환해준다. 만약 `hello-static.html` 파일을 만들었다면, `localhost:8080/hello-static.html`로 들어가면 나온다.

<p align="center"><img src="./img/img02.png"></img></p>

1. 웹브라우저에서 `localhost:8080/hello-static.html`로 get 요청
2. 내장 톰캣 서버가 요청을 받고 스프링에게 넘김
3. 스프링은 컨트롤러 쪽에서 `hello-static`과 맵핑된 컨트롤러 있나 찾아봄
4. 없으면 `resources: statc/hello-static.html`을 찾고 있으면 반환해줌

<br>

### MVC와 템플릿 엔진

MVC : Model, View, Controller <br>

과거에는 컨트롤러와 뷰를 따로 분리하지 않고 JSP 같은걸로 뷰에 모든 걸 다했다. 이것이 **Model 1 방식**이다. 하지만, 지금은 MVC 패턴으로 많이 한다. 그 이유는 **관심사의 분리, 역할과 책임** 때문이다.

<br>

View는 화면을 그리는 것에 모든 역량을 집중해야 하고, Controller나 Model과 관련된 부분은 비즈니스 로직과 관련있거나 내부적인 걸 처리하는 것에 집중해야 한다.

<br>

`HelloController.java`에 내용 추가

```java
@GetMapping("hello-mvc")
public String helloMvc(@RequestParam("name") String name, Model model) {
    model.addAttribute("name", name);
    return "hello-template";
}
```

-   `hello-mvc` get 요청에 맵핑
-   외부, 웹에서 파라미터를 받기 위하여 `@RequestParam()`을 사용
-   당연히 Model은 넘겨줘야지
-   `addAttribute`에서 파라미터로 넘어온 name을 넘긴다.

<br>

`resources/templates/hello-static.html`

```html
<html xmlns:th="http://www.thymeleaf.org">
    <body>
        <p th:text="'hello ' + ${name}">hello! empty</p>
    </body>
</html>
```

-   템플릿 엔진으로써 잘 동작하면 th:text의 값인 `'hello ' + ${name}`로 우측의 내용(hello! empty)이 치환이 된다.

<br>

타임리프 템플릿의 장점은 html을 쓰고 서버 없이 파일을 열어서 껍데기를 볼 수 있는 것이다. `템플릿 파일명 우클릭 - Copy Path/References.. - Absolute Path 복사`하고 웹 브라우저 링크에 치면 볼 수 있다.

<br>

여기까지 하고 `localhost:8080/hello-mvc`를 입력하면!? `Required request parameter 'name' for method parameter type String is not present]`라는 오류가 콘솔창에 뜬다. 파라미터를 입력해주지 않았기 때문이다. 인텔리제이에서 필요한 파라미터가 무엇인지 볼 때 `Ctrl + P`를 누르면 뜬다.

<p align="center"><img src="./img/img03.png"></img></p>

`boolean required() default true`인 것으로 보아 반드시 값이 필요한게 디폴트 설정이다. 따라서, 웹 브라우저 창에 `localhost:8080/hello-mvc?name=name에 들어갈 문자열`을 넣어주면 된다. 그러면 결과로 `'hello ' + ${name}`이니까 `hello name에 들어갈 문자열`이라는 모습이 보일 것이다.

<p align="center"><img src="./img/img04.png"></img></p>

다시 한번, **달러($) 사인에 들어가는 것은 Model에서 뽑아온 key에 해당하는 value이다.** `model.addAttribute("name", name);`이라고 했으니까 `name`이라는 key에서 `name`이라는 value를 가져오는 것!

<br>

<p align="center"><img src="./img/img05.png"></img></p>

1. 웹브라우저에서 `localhost:8080/hello-mvc`로 get 요청
2. 내장 톰캣 서버가 요청을 받고 스프링에게 넘김
3. 스프링은 컨트롤러 쪽에서 `hello-mvc`와 맵핑된 컨트롤러 있나 찾아봄
4. 있으니까 `hello-template`으로 넘기고 `model(name:문자열)`을 넘김.
5. 뷰 리졸버 (viewResolver)가 return의 `hello-template`와 같은`templates/hello-template.html`를 찾아서 타임리프 템플릿 엔진에 처리해달라고 넘김
6. 템플릿 엔진이 렌더링해서 변환한 HTML 파일을 웹 브라우저에 반환

<br>

### API

MVC 방식과는 다르게 (HTML 파일을 내리는 방식과는 다르게) API는 데이터를 바로 내리는 방식이다. <br>

`HelloController.java`에 내용 추가

```java
@GetMapping("hello-string")
@ResponseBody
public String helloString(@RequestParam("name") String name) {
    return "hello " + name;
}
```

-   `hello-string` get 요청에 맵핑
-   `@ResponseBody`의 body는 html의 `<body></body>`를 의미하는 것이 아니라 HTTP의 `헤더부와 바디부`를 의미하는 것이다. HTTP의 응답 body에 이 내용을 직접 넣어주겠다는 의미이다.
-   템플릿 엔진과는 다르게 view 이런게 없어서 저 return 문자가 그대로 내려간다.

<p align="center"><img src="./img/img06.png"></img></p>

이렇게 페이지 소스보기 해보면 html 태그 같은거 안뜨고 **문자 데이터 자체**가 그대로 왔다. 그러면, 본격적으로 api를 사용해보도록 하자. 객체를 만들어서 JSON 형식(`key : value`)으로 데이터를 보내보자.

`HelloController.java`에 내용 추가

```java
@GetMapping("hello-api")
@ResponseBody
public Hello helloApi(@RequestParam("name") String name) {
    Hello hello = new Hello();
    hello.setName(name);
    return hello;
}

static class Hello {
    private  String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

-   static은 기억나지? 힙에 올리는게 아니라 그냥 클래스 변수로 만들어서 올리고 아무데서나 사용할 수 있게 만들었던거
-   private으로 해놨으니까 getter, setter 만들어준거고.
-   helloApi에서 hello 객체 만들고 setName으로 들어온 리퀘스트 파라미터인 name 넣어준거고!
-   마지막으로 hello 객체를 반환해줌

<p align="center"><img src="./img/img07.png"></img></p>

<p align="center"><img src="./img/img08.png"></img></p>

1. 웹브라우저에서 `localhost:8080/hello-api`로 get 요청
2. 내장 톰캣 서버가 요청을 받고 스프링에게 넘김
3. 스프링은 컨트롤러 쪽에서 `hello-api`와 맵핑된 컨트롤러 있나 찾아봄
4. 있네. 근데 `@ResponseBody` 애노테이션이 붙어있네?
    - 저게 없으면, viewResolver에게 던져서 view에 맞는 템플릿 엔진 연결해줬잖아
    - 얘는 HTTP body 응답에 이걸 그대로 넘겨야겠구나 라고 생각
    - 근데, 문자였으면 바로 넣어서 주면 끝인데, 객체일 경우는 어떻게 해야할까?
    - 객체가 오면, 기본 default가 json 방식으로 데이터를 만들어서 HTTP 응답에 반환하겠다가 기본 정책!
5. `viewResolver`가 아닌, `HttpMessageConverter`가 동작
6. 단순 문자면 `StringConverter`가 동작. 객체이면 `JsonConverter`가 동작
7. 이것을 응답으로 웹 브라우저에 보냄

-   기본 문자처리 : `StringHttpMessageConverter`
-   기본 객체처리 : `MappingJackson2HttpMessageConverter`
    -   객체를 json으로 변환해주는 유명한 라이브러리 대표적인 2개
        -   Jackson version 2
        -   Gson (구글에서 만든거)
    -   스프링은 기본적으로 잭슨 라이브러리를 채택!
-   참고 : 클라이언트의 HTTP Accept 헤더와 서버의 컨트롤러 반환 타입 정보를 조합해서 `HttpMessageConverter`가 선택된다. 예를 들어, 클라이언트 쪽에서 XML을 요청하면 서버 쪽에서 XML 라이브러리를 끼워넣고 XML로 보낼 수 있다는 말이다. 근데 그냥 마음 편하게 json으로 하자 ^^ 다 json으로 한다.

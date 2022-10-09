# 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술

- 인프런 김영한님의 첫 번째 강의
- 해당 [강의 링크](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8)

<br>

## 프로젝트 생성

1. https://start.spring.io/ 스프링 프로젝트 생성
    - 프로젝트 생성
        - Project : Gradle
        - Spring Bookt : (SNAPSHOT), (M~)는 정식 버전 아니니까 아무 것도 없고 숫자만 써진 버전으로 설정
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
    - build.gradle : 예전에는 실제로 타이핑하고 코드 잤으나, 최근에는 start.spring.io와 같은 스프링부트 덕에 설정 파일이 제공됨
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

## 라이브러리 살펴보기

- Maven, Gradle 같은 빌드 툴은 의존관계를 관리해준다. 실제 우리가 추가한 의존관계는 `Spring Web, Thymeleaf`인데, 외부 라이브러리를 확인해보면 수많은 라이브러리가 다운받아져있다. **의존관계에 따라 자기가 필요한 라이브러리들을 알아서 당겨온다.**
- 인텔리제이 우측에 작은 Gradle 클릭해보면, 여러 의존관계 살펴볼 수 있음

<br>

**compileClassPath : 스프링 부트 라이브러리**

- spring-boot-starter-web
    - spring-boot-starter-tomcat : 웹서버
    - spring-webmvc : 웹 MVC
- spring-boot-starter-thymeleaf : 타임리프 템플릿 엔진 (View)
    - spring-boot-starter
        - spring-boot
            - spring-boog-core
        - spring-boot-starter-logging
            - logback
            - slf4j

- 톰캣은 WAS(Web-Application-Server)이다. 
    - 예전에는 서버에 톰캣같은 웹서버를 설치해놓고 거기에 자바 코드를 밀어놓는 식으로 개발했음. 웹서버와 개발 라이브러리가 완전히 분리되어 있었음
    - 최근에는 소스 라이브러리에서 이런 웹서버를 알아서 들고있음(임베디드, 내장) 그래서 자바 메인 메서드만 실행해도 따로 설정 필요없이 웹서버가 뜬다. 8080포트로 들어갈 수도 있음

- 실무에서, `system.out.println()` 방식으로 출력하지 않고 log를 사용한다.
    - 심각한 로그를 따로 관리하거나, 로그 파일이 관리가 됨
    - slf4j는 인터페이스이고 logback은 실제 로그를 어떤 구현체로 출력할 지
    - 최근에는 slf4j + logback 조합을 보통 사용한다. 성능도 빠르고 지원하는 기능 많음

<br>

**testCompileClasspath : 테스트 라이브러리**

- spring-boot-starter-test
    - junit : 테스트 프레임워크 (최근에는 junit 5버전 사용, 핵심)
    - mockito : 목 라이브러리
    - assertj : 테스트 코드 작성을 더 쉽게 해주는 라이브러리
    - spring-test : 스프링 통합 테스트 지원
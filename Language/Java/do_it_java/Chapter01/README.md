# Chapter 01 - Java Programming

<br>

## Java 특징

<br>

1. 플랫폼(프로그램이 실행되는 환경)에 영향을 받지 않음

    **한 번 작성하면, 어디서든 돌아간다. write once, run anywhere** <br>
    자바 소스 코드 (`.java`) -> 자바 컴파일러 -> 바이트 코드 (`.class`) -> 자바 가상머신 (JVM) -> 각 운영체제에서 실행

<br>

- 자바 가상 머신 (Java Virtual Machine, JVM)은 자바 프로그램 실행 환경을 만들어주는 소프트웨어
- 자바 코드를 **컴파일**하여 `.class` 바이트 코드로 만들면 바이트 코드가 JVM에서 실행
- 현재 사용하는 컴퓨터의 OS에 맞는 자바 실행 환경 (Java Runtime Environment, JRE)이 설치되어 있으면 JVM이 설치되어 있는 것
- JIT(Just In Time) 컴파일러는 실행 시점에 기계어 코드를 생성하는데, 같은 코드가 반복되면 매번 기계어 코드를 새로 생성하지 않고 이전에 만든 기계어를 재사용함.
- JIT 컴파일러는 운영체제에 맞게 바이트 실행 코드로 한 번에 변환하여 실행해서 이전의 자바 해석기(Java Interpreter) 방식보다 성능이 10~20배 좋음

<br>

2. 객체지향 언어라서 유지보수가 쉽고 확장성이 좋음

    객체지향프로그래밍은 일의 순서대로 프로그래밍 하는 것 X, **여러 객체의 협력을 통해 프로그램을 구현하는 것, 각 객체의 상호 관계를 이용하여 프로그래밍 하는 것이다.**. 쇼핑몰 사이트 예시에서 회원, 상품, 주문, 배송 등이 객체. 

<br>

3. 프로그램이 안정적임

    C, C++과는 다르게 포인터를 사용하지 않아서, 메모리 직접 제어 불가능. 메모리를 직접 제어할 경우 위험할 수 있지만, 그렇지 않으니까 안정적임.

    동적 메모리 수거를 프로그래머가 하지 않고 **가비지 컬렉터(Garbage Collector)** 이용하여 메모리 효율적으로 관리

    가비지 컬렉터란, 이름 그대로 쓰레기를 수집하는 기능. 여기서 쓰레기란 더이상 사용하지 않는 메모리를 의미한다. C, C++에서는 필요 없는 메모리 사용 해제를 프로그래머가 직접 하지만, 자바는 가비지 컬렉터가 사용하지 않는 동적 메모리를 주기적으로 수거

<br>

4. 풍부한 기능을 제공하는 오픈소스

    특정 기능을 대부분 개발자가 직접 개발하여 사용하는 기존의 다른 언어와는 달리 자바는 기본 기능을 제공하는 클래스, 뿐만 아니라 자료구조, 네트워크, 입출력, 예외 처리 등에 최적화 된 **알고리즘 라이브러리를 제공하는 자바 개발 키트(Java Development Kit, JDK)가 있음**.

<br><br>

## Hello Java

<br>

이클립스든 인텔리제이이든 `new project`로 project 생성을 한다. 그러면서 워크스페이스를 지정하는 것이다.

- 프로젝트(project) : 개발자가 만드는 하나의 프로그램 단위
- 클래스(class) : 객체를 소스 코드로 나타낸 것
- 패키지(package) : 프로그램 소스의 묶음으로 클래스를 만드는 데 만드시 필요, 패키지 이름은 항상 소문자로 쓴다.

<br>

src 폴더 -> package 생성 -> class 생성의 순서로 만든다. 이때 

```java
package hello;

public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, JAVA");
    }
}
```

추가로, build 결과물인 class 파일이 저장되는게 이클립스는 bin 폴더, 인텔리제이는 out 폴더인 것 같음
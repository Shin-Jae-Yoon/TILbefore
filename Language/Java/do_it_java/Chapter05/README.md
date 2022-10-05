# Chapter 05 - 클래스와 객체 (1)

<br>

|용어|설명|
|:--:|:--:|
|객체|객체 지향 프로그램의 대상, 생성된 인스턴스|
|클래스|객체를 프로그래밍하기 위해 코드로 만든 상태|
|인스턴스|클래스가 메모리에 생성된 상태|
|멤버 변수|클래스의 속성, 특성|
|메서드|멤버 변수를 이용하여 클래스의 기능을 구현|
|참조 변수|메모리에 생성된 인스턴스를 가리키는 변수|
|참조 값|생성된 인스턴스의 메모리 주소 값|

<br>

## 클래스와 객체

### 객체 지향 프로그래밍 기본 컨셉

- 절차 지향 프로그래밍 : 일어나는 일을 시간 순서으로 프로그래밍
- 객체 지향 프로그래밍 : 객체를 만들고 객체 사이에 일어나는 일을 구현하는 프로그래밍

<br>

### 클래스 (Class)

- 객체 지향 프로그램은 클래스를 기반으로 프로그래밍
- 클래스 : 객체의 속성과 기능을 구현
- 클래스를 정의한다 : 객체를 클래스로 구현한다
- 멤버 변수 : 객체의 속성
- 메서드 : 객체의 기능

<br>

Student 클래스를 생각했을 때, 학번, 이름, 학년, 사는 곳 등 선언하는 클래스의 속성을 **멤버 변수**라고 한다.

```java
(접근 제어자) class 클래스 이름 {
    멤버 변수;
    메서드;
}

public class Student {
    int studentID;
    String studentName;
    int grade;
    String address;
}
```

    접근 제어자가 public인 경우
    클래스 이름 = 자바 파일 이름
    이어야 한다.

클래스 외부에는 package 선언, import 문장 외에 아무 것도 선언 X <br>
클래스 코딩 컨벤션 : 클래스 이름은 대문자로 시작

<br>

## 클래스 살펴보기

### 멤버 변수

- 멤버 변수(member variable) = 속성(property) = 특성(attribute)
- 클래스형 = 객체 자료형 = 참조 자료형

<br>

변수의 자료형 = 기본 자료형 + 참조 자료형
- 기본 자료형 : int, long, float, double 등
- 참조 자료형 : JDK에서 제공하는 String, Date 혹은 내가 만든 Student 등

<br>

### 메서드

- 메서드(method) = 멤버 함수(member function)

```java
package classpart;

public class Student {
    // 멤버 변수 - 클래스의 속성
    int studentID;
    String studentName;
    int grade;
    String address;

    // 메서드 - 클래스의 기능
    public void showStudentInfo() {
        System.out.println(studentName + "," + address);
    }
}
```

<br>

### 패키지

- 패키지 : 클래스 파일의 묶음, 계층 구조 가질 수 있음
- 계층 구조를 잘 구성해야 소스코드 관리, 유지 보수 수월

```java
package domain.student.view;

public class StudentView {

}
```
위 코드에서 `클래스 이름 = StudentView` 이지만, `클래스 전체 이름 = domain.student.view.StudentView`이다. **클래스 이름이 같아도 패키지 이름이 다르면 클래스 전체 이름이 다른 것이므로 다른 클래스이다.**

<br>

## 메서드 (method)

- 메서드는 함수(function)의 한 종류

### 함수란?

- **하나의 기능**을 수행하는 일련의 코드
- 함수는 어떤 **기능**을 수행하도록 미리 구현해 놓고 필요할 때마다 호출해서 사용

### 함수의 입력과 반환

- 함수는 이름, 입력 값, 결과 값을 가짐
- Input이 있으면 Output이 있다는 말
- 매개변수(parameter) : 함수의 **입력**으로 받는 변수
- 반환 값 : 입력의 결과로 반환해주는 함수의 결과

### 함수 정의하기

```java
int add(int num1, int num2) {
    int result;
    result = num1 + num2;
    return reslt;
}
```
- `int` : 함수 반환형
- `add` : 함수 이름
- `(int num1, int num2)` : 매개변수

<br>

매개변수가 필요 없는 함수도 있음. 함수 실행하면 함수를 수행한 결과 값만 있음

```java
int getTenTotal() {
    int i;
    int total = 0;
    for (i = 1; i <= 10; i++) {
        total += i;
    }
    return total;
}
```

<br>

반환 값 없는 함수
- 반환 값 없어도 위치 비우지말고 return은 쓰기
- 반환형에 **void** 표시
- return은 함수 수행을 종료하는 명령어로 이해

```java
void printGreeting(String name) {
    System.out.println(name + "님 안녕하세요");
    return; // 반환 값 없음
}
```

<br>

### 함후 호출과 스택 메모리

- 스택(stack) : 함수를 호출하면 그 함수만을 위하여 할당되는 메모리 공간
    - 자료가 상자처럼 쌓임, LIFO(Last In First Out)

<p align="center"><img src="./img/img01.png"></img></p>

<p align="center"><img src="./img/img02.png"></img></p>

- 지역변수 : num1, num2 혹은 n1, n2 같이 함수 내부에서만 사용하는 변수
    - 지역변수는 스택 메모리에 생성

<br>

### 함수의 장점

1. 기능을 나누어 코드를 효율적으로 구현
2. 기능별로 함수 구현해 놓으면 같은 기능 매번 코드로 안짜고 함수 호출하면 됨
3. **오류 수정 디버깅 작업 편함**, 하나의 기능이 함수로 구현되어 있으니까 오류가 난 기능만 찾아서 수정하면 됨

하나의 함수에 여러 기능이 섞여 있으면, 함수의 장점을 활용할 수 없음. **이름에 맞는 하나의 기능을 구현하는 함수를 작성하자.**

<br>

### 메서드는 클래스 기능을 구현

위에서 설명한건 프로그래밍 언어적인 면에서 함수의 기능이다. 자바의 클래스 내부에는 클래스의 속성인 멤버 변수, 클래스의 기능인 멤버 함수(메서드)가 있다.

<br>

    메서드는 함수에 객체지향 개념이 포함된 용어

<br>

```java
package classpart;

public class Student {
    int studentID;
    String studentName;
    int grade;
    String address;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String name) {
        studentName = name;
    }
}
```

- `getStudentName()` : 학생 이름 반환하는 메서드
- `setStudentName()` : 학생 이름을 멤버 변수에 대입하는 메서드

setStudentName() 메서드는 Student 클래스를 사용하는 다른 코드에서 학생 이름을 새로 지정하거나 바꿔준다. **studentName 값을 지정하는 set 기능을 제공하는 것이다.**

<br>

## 클래스와 인스턴스

### 클래스 사용과 main() 함수

<br>

**프로그램을 시작하는 main() 함수** <br>

`main() 함수` : 자바 가상 머신(JVM)이 프로그램을 시작하기 위해 호출하는 함수, 클래스 내부에 만들지만, 클래스의 메서드는 아니다.

<br>

main() 함수에서 클래스 사용하는 방법
- 만든 클래스 내부에 main() 함수 만들기
- 외부에 테스트용 클래스 만들어서 사용

<br>

**Student 클래스 내부에 main() 만들어서 사용**
```java
package chapter05;

public class Student {
    int studentID;
    String studentName;
    int grade;
    String address;

    public String getStudentName() {
        return studentName;
    }

    public static void main(String[] args) {
        Student studentAhn = new Student(); // Student 클래스 생성
        studentAhn.studentName = "안연수";

        System.out.println(studentAhn.studentName);
        System.out.println(studentAhn.getStudentName());
    }
}

// 안연수
// 안연수
```

- 클래스 내부에 main() 함수를 만들면 이 클래스가 프로그램의 시작 클래스
- 클래스가 제대로 수행되는지 알아보기 위해 클래스 내부에 main() 함수 만들고 직접 실행할 수 있음
- 하지만, 이렇게 모든 클래스 내부에 main()을 포함시키지는 않음. 귀찮으니까

<br>

**main() 함수를 포함한 실행 클래스 따로 만들기**

```java
package chapter05;

public class StudentTest {
    public static void main(String[] args) {
        Student studentAhn = new Student(); // Student 클래스 생성
        studentAhn.studentName = "안승연";

        System.out.println(studentAhn.studentName);
        System.out.println(studentAhn.getStudentName());
    }
}

// 안연수
// 안연수
```

- Student 클래스를 만들지 않은 것이 아니다. 같은 패키지 내부에 아까 Student 클래스를 만들어놨으니 당연히 불러와서 사용할 수 있는 것
- 이 말은 패키지가 다르다면, 사용할 수 없다는 말이다. 그럴때는 **import문을 사용해서 함께 사용하기를 원하는 클래스를 불러와야 한다.**

<br>

### new 예약어로 클래스 생성

- 클래스를 사용하려면 클래스를 생성해야 함
- 클래스가 생성된다는 것 = 클래스를 실제 사용할 수 있도록 **메모리 공간(힙 메모리)에 올린다는 의미**
- 인스턴스 : 실제로 사용할 수 있도록 생성된 클래스
- 참조 변수 : 인스턴스를 가리키는 클래스형 변수

```java
클래스형 변수이름 = new 생성자;
Student studentAhn = new Student();
```

1. `Student` 클래스 자료형으로
2. `studentAhn` 변수를 선언하고
3. `new Student();`로 Student 클래스를 생성하여
4. `studentAhn`에 대입한다

    - studentAhn = 참조 변수
    - studentAhn이 생성된 인스턴스를 가리킴

<br>

### 인스턴스와 참조 변수

- 객체 : 의사나 행위가 미치는 대상
- 클래스 : 객체를 코드로 구현한 것
- 인스턴스 : 클래스가 메모리 공간(힙 공간)에 생성된 상태

<br>

    생성된 클래스의 인스턴스도 객체라고 함

<br>

<p align="center"><img src="./img/img03.png"></img></p>

<br>

**인스턴스 여러 개 생성**

```java
package chapter05

public class StudentTest1 {
    public static void main(String[] args) {
        Student student1 = new Student();   // 첫 번째 학생 생성
        student1.studentName = "안연수";
        System.out.println(student1.getStudentName());
        Student student2 = new Student();   // 두 번째 학생 생성
        student2.studentName = "안승연";
        System.out.println(student2.getStudentName());
    }
}

// 안연수
// 안승연
```

<br>

**참조 변수 사용하기**

- 참조 변수를 사용하여, 인스턴스의 멤버 변수와 메서드 참조가능
- 이때, `도트(.)` 연산자 사용

```java
studentAhn.studentName = "안연수";  // 멤버 변수 사용
System.out.println(studentAhn.getStudentName()); // 메서드 사용
```

<br>

### 인스턴스와 힙 메모리

- 인스턴스가 가지고 있는 멤버 변수를 **힙 메모리**에 저장
- 클래스 생성자를 하나 호출하면 인스턴스가 힙 메모리에 생성됨

```java
Student studentAhn = new Student();
```

<p align="center"><img src="./img/img04.png"></img></p>

- studentAhn 변수는 **지역 변수**, 따라서 **스택 메모리에 저장**
- 지역 변수인 studentAhn에 생성된 인스턴스를 대입하는 것 = studentAhn에 인스턴스가 생성된 힙 메모리의 주소를 대입한다.

<br>

```java
Student student1 = new Student();
Student student2 = new Student();
```

<p align="center"><img src="./img/img05.png"></img></p>

- 생성된 다른 인스턴스는 당연히 다른 힙 메모리 공간을 차지
- 클래스가 생성될 때마다 인스턴스는 다른 힙 메모리 공간 차지
- **즉, 멤버 변수를 저장하는 공간이 매번 따로 생긴다는 의미**
- 따라서, 클래스에 선언한 멤버 변수를 다른 말로 **인스턴스 변수**라고 부름

<br>

**힙 메모리**

<br>

힙(heap)은 동적 메모리(dynamic memory) 공간이다. 객체가 생성될 때 사용하는 공간이 힙이다. 힙은 동적으로 할당되고 사용이 끝나면 메모리를 해제해 줘야 한다. 자바는 가비지 컬렉터(garbage collector)가 자동으로 메모리를 해제해 준다.

<br>

**참조 변수와 참조 값**

<br>

참조 변수(ex.student1, student2)는 힙 메모리에 생성된 인스턴스(ex.Student 클래스)를 가리킨다. 참조 변수에 실제로 어떤 내용이 있는지 출력하겠다.

```java
package chapter05;

public class StudentTest2 {
    public static void main(String[] args) {
        Student student1 = new Student();
        student1.studentName = "안연수";

        Student student2 = new Student();
        student2.studentName = "안승연";

        System.out.println(student1);
        System.out.println(student2);
    }
}

// chapter05.Student@1b6d3586
// chapter05.Student@4554617c
```

- 힙 메모리에 생성된 **인스턴스의 메모리 주소**는 **참조 변수**에 저장 됨
- `클래스 이름@주소 값`
- `주소 값` = `해시 코드(hash code) 값`
- 해시 코드 값은 자바 가상 머신(JVM)에서 객체가 생성되었을 때, **생성된 객체에 할당하는 가상 주소 값**
- 즉, `student1`이 참조 변수, `주소 값`이 참조 값

<br>

## 생성자

```java
package constructor;

public class Person {
    String name;
    float height;
    float weight;
}
```

```java
package constructor;

public class PersonTest {
    public static void main(String[] args) {
        Person personLee = new Person();
    }
}
```

- 클래스의 멤버 변수는 메서드에 의해 값이 변경될 수도 있지만, 처음 클래스를 생성할 때 값을 정해야 하는 경우도 있음
- 생성자 : 클래스 처음 생성 시, 멤버 변수나 상수를 초기화하는 것

<br>

**디폴트 생성자** <br>

디폴트 생성자(default constructor) : 생성자가 없는 클래스는 클래스 파일을 컴파일할 때 자바 컴파일러에서 자동으로 생성자를 만들어주는데, 이때, 자동으로 만들어진 생성자

```java
package constructor;

public class Person {
    String name;
    float height;
    float weight;

    // 자바 컴파일러가 자동으로 제공하는 디폴트 생성자
    public Person() {}
}
```

<br>

### 생성자 만들기

필요한 경우, 프로그래머가 직접 생성자 구현할 수 있음.
1. 멤버 변수에 대한 값들을 매개변수로 받음
2. 인스턴스가 생성될 때, 멤버 변수 값들을 초기화

즉, 인스턴스가 생성됨과 동시에 멤버 변수의 값을 지정하고 인스턴스를 초기화하기 위해 생성자를 직접 구현해서 사용하기도 함.

<br>

**생성자 직접 구현한 경우**
- 프로그래머가 직접 구현한 새로운 생성자는 문자열 String형 매개변수를 입력받아서 이름을 지정함.
```java
package constructor;

public class Perseon {
    String name;
    float height;
    float weight;

    public Person(String pname) {
        name = pname;
    }
}
```

<br>

**생성자를 구현하여 디폴트 생성자 없는 경우**
```java
package constructor;

public class PersonTest {
    public static void main(String[] args) {
        Person personLee = new Person();
    }
}
```

오류 발생. 위에서 String 문자열 하나를 매개변수로 받도록 하는 생성자를 만들면서, **default 생성자가 없음**. 뭐, 쓰고싶으면 디폴트 생성자 하나 만들어서 사용하면 됨

<br>

**생성자를 구현하고 디폴트 생성자도 구현**
```java
package constructor;

public class Perseon {
    String name;
    float height;
    float weight;

    public Person() {}

    public Person(String pname) {
        name = pname;
    }
}
```

이 경우, 클래스를 실행하면 **두 생성자 중 하나를 선택해서 사용 가능**. 보안 수업 생각해보면 라이브러리 불러와서 쓸 때 import로 막 받아와서 쓰잖음? 그게 클래스를 불러와서 사용할 수 있는거. 그때 그냥 `new keygenerator()` 이런식으로 쓰기도 하지만 매개변수로 값을 넣어서도 쓸 수 있었음. 이는 라이브러리 열어보면 생성자가 여러 개 정의되어 있는 것을 확인가능 !

<br>

### 생성자 오버로드

- 클래스에 생성자가 두 개 이상 제공되는 경우가 **생성자 오버로드(constructor overload)**
- 매개변수가 있는 생성자를 추가한다고 해서 디폴트 생성자를 꼭 추가해야 하는 것은 아님

<br>

    객체 지향 프로그램에서 메서드 이름이 같고
    매개변수만 다른 경우를 "오버로드"라고 함

<br>

학생이 생성될 때 반드시 학번이 있어야 한다면, 아래 처럼 생성자 제공 가능
```java
public class Student {
    int studentID;

    public Student(int studentID) {
        this.studentID = studentID;
    }
}
```
- 학번을 매개변수로 입력받아, Student 클래스를 생성하는 생성자를 추가함
- 학생을 생성할 때 학번이 꼭 필요하니까, 그냥 만들면 안만들어짐

<br>

### this 맛보기

```java
public class Student {
    int studentID;

    public Student(int studentID) {
        studentID = studentID
    }
}
```

- 현재, 인스턴스 변수인 studentID와 매개변수로 전달받은 studentID가 있음
- 나의 마음은 앞의 studentID은 인스턴스 변수로, 뒤의 studentID는 매개변수로 전달받은 것으로 생각할 수 있다. 하지만, 컴파일러는 그렇게 하지 못한다.

```java
public class Student {
    int studentID;

    public Student(int mystudentID) {
        studentID = mystudentID
    }
}
```

- 그럼 인스턴스 변수와 매개변수로 전달받은 변수의 이름을 바꾸면 된다. 위에서 pname 사용한 것처럼. 그러나, 이렇게하면 인생이 피곤하지 않을까? 그래서 this 투입

```java
public class Student {
    int studentID;

    public Student(int studentID) {
        this.studentID = studentID;
    }
}
```
- 매개변수로 전달받은 것은 studentID. 납득하지?
- this는 인스턴스 자기 자신을 가리킨다. 이거 지금 내가 만든 클래스라서 명확하게 인스턴스랑은 다른거 아닌가?라고 생각하고 삐딱선 탄 것 같은데.. 그냥 객체 자기 자신을 가리킨다고 생각하자.

<br>

추가로, 정보 은닉과 관련된 이야기인데, 어떤 멤버 변수들은 외부 클래스에서 값을 지정하지 못하는 경우도 있다. (ex. `personLee.name = "이소룡"` 이런거 안된다는 말) public이냐 private이냐 등등 접근제어자 신경 안쓸거면 **매개변수가 있는 생성자를 구현하고 이를 사용하는 것이 편리한 경우가 많다.**

<br>

## 참조 자료형

<br>

- 자료형 = 기본 자료형(int, float 등) + 참조 자료형(String, Date, Student 등)
- 즉, 필요하다면 클래스를 분리하여 참조 자료형으로 다른 클래스를 참조하여 코드를 짤 수 있음
- 참조 자료형은 프로그래머가 필요에 의해 만든 클래스 or JDK에서 제공하느 클래스를 사용할 수 있음

```java
package reference;

public class Subject {
    String SubjectName;
    int scorePoint;
}

public class Student3 {
    int studentID;
    String studentName;
    Subject korean;
    Subject math;
}
```

<br>

## 정보 은닉

### 접근 제어자

접근 제어자(access modifier)는 **클래스 내부의 변수/메서드/생성자에 대한 접근 권한을 지정**할 수 있는 예약어이다. 

- public : public으로 선언한 변수나 메서드는 **외부 클래스에서 접근 가능**
- private : private으로 선언한 변수나 메서드는 **외부 클래스에서 접근 불가능**

```java
package hiding;

public class Student {
    int studentID;
    private String studentName;
    int grade;
    String address;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
```

```java
package hiding;

public class StudentTest {
    public static void main(String[] args) {
        Student studentLee = new Student();
        studentLee.studentName = "이상원";

        System.out.println(studentLee.getStudentName());
    }
}
```

Student 클래스의 studentName 변수의 접근 제어자를 private으로 바꾸고 StudentTest 클래스에서 studentName을 접근하려고 하니 바로 오류가 출력된다. `studentLee.studentName = "이상원";` 여기부터 바로 오류 출력

<br>

접근 제어자가 public일 때는 외부 클래스인 StudentTest에서 접근 가능했지만, private으로 바뀌자 접근이 불가능해졌다.

<br>

### get(), set() 메서드

private으로 선언한 studentName 변수를 외부 코드에서 사용하려면 어떻게?
- studentName 변수를 사용할 수 있도록 public 메서드를 제공해야 함
- 그것이 바로 `get()`, `set()` 메서드.
- 값을 얻는 get() 메서드를 getter, 값을 저장하는 set() 메서드를 setter 라고도 함

<br>

```java
package hiding;

public class Student {
    int studentID;
    private String studentName;
    int grade;
    String address;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
```

```java
package hiding;

public class StudentTest {
    public static void main(String[] args) {
        Student studentLee = new Student();
        // studentLee.studentName = "이상원";
        studentLee.setStudentName("이상원");

        System.out.println(studentLee.getStudentName());
    }
}
```

- studentName 변수에 직접 값을 대입하는 방식 (X)
- public인 setStudentName() 메서드를 활용하여 값 대입

<br>

### 정보 은닉이란?

그래서 변수를 public으로 선언하고 접근하는 것과 private으로 선언하고 public인 메서드로 접근하는 것의 차이가 뭔데? 어차피 접근하는거 똑같은데

<br>

```java
public class Mydate {
    public int day;
    public int month;
    public int year;
}
```

```java
public class MydateTest {
    public static void main(String[] args) {
        Mydate date = new Mydate();
        date.month = 2;
        date.day = 31;
        date.year = 2022;
    }
}
```

당연히 Mydate 클래스에 변수들을 전부 public으로 선언했으니까 막 접근해서 값 대입 가능하다. 그러나, 2월은 알다시피 28일이나 29일까지인데 31을 넣어버렸다. **public으로 선언하면 접근이 제한되지 않으니까 정보의 오류가 발생할 수 있다.** 

<br>

그래서, 단순히 값을 변수에 대입하는 형태가 아니라, 메서드 형태로 값을 대입하도록 하면 if문과 같은 제어문을 넣어서 잘못된 값인지 아닌지 알려줄 수 있다.

<br>

```java
public class Mydate {
    private int day;
    private int month;
    private int year;

    public setDay(int dau) {
        if (month == 2) {
            if (day < 1 || day > 28) {
                System.out.println("오류입니다.");
            } else {
                this.day = day;
            }
        }
    }
}
```

|접근 제어자|설명|
|:--:|:--:|
|public|외부 클래스 어디에서나 접근 O|
|protected|같은 패키지 내부, 상속 관계의 클래스에서만 접근 O, 그외 X|
|아무것도 없는 경우| default, 같은 패키지 내부에서만 접근 O|
|private|같은 클래스 내부에서만 접근 O|
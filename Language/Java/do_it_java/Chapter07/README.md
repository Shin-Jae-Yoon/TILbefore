# Chapter 07 - 배열과 ArrayList

## 배열이란?

### 배열 선언과 초기화

```java
자료형[] 배열이름 = new 자료형[개수];
자료형 배열이름[] = new 자료형[개수];
int[] studentsID = new int[10];
```
뭘 사용해도 되지만, 두잇자바 교재에서는 위 방식을 채택함

<be>

int형이니까 4바이트 이므로, 10칸 선언했으니 40바이트가 배열 전체의 크기이다. **선언한 자료형과 배열 길이에 따라 메모리가 할당**된다. 이때 **선언과 동시에 요소의 값이 초기화**된다.

- 정수형 : 0
- 실수형 : 0.0
- 객체 : null

<br>

**배열 선언 방법**

- 개수 생략, 초기화 요소의 개수만큼 배열이 생성
```java
int[] studentIDs = new int[] {101, 102, 103};
```
- 위 케이스에서 new int[] 부분 생략 가능 (초기화 개수만큼 배열 생성)
```java
int[] studentIDs = {101, 102, 103};
```
- 위 케이스에서 new int 안에 개수 넣으면 오류 발생
```java
// 이거 오류 발생 !!!!!!
int[] studentIDs = new int[3] {101, 102, 103};
```
- 배열 자료형을 먼저 선언하고 초기화 하는 경우, new int 생략 불가
```java
int[] studentIDs;
studentIDs = new int[] {101, 102, 103};
```

<br>

### 배열 사용하기

인덱스에 값 저장하거나 인덱스에서 값 뽑아오는거 말함

<br>

- 배열의 물리적 위치 : 메모리에서 배열이 실제로 저장되는 곳
- 배열의 논리적 위치 : 이론상 배열 위치

이게 무슨 말이냐면, 배열 이외의 자료구조는 논리적으로 바로 옆에 붙어있다고 해도 실제 메모리 위치는 아예 다를 수도 있음. 

<br>

하지만, 배열은 논리적 위치에서 사용하는 실제 값도 바로 이웃한 메모리에 위치함. 예를 들어, 5칸짜리 배열이 있으면 그 5칸은 실제의 물리적 위치에서도 이웃하게 붙어있음. 주소값 출력 찍어보면 바로 암

<br>

### 전체 배열 길이와 유효한 요소 값

- 배열 사용할 때 처음 선언한 배열 길이만큼 값을 저장해서 사용하는 경우는 많지 않음
- `전체 배열길이 != 현재 배열에 유효한 값이 저장되어 있는 배열 요소 개수`

```java
public class ArrayTest {
    public static void main(String[] args) {
        double[] data = new double[5];
        data[0] = 10.0;
        data[1] = 20.0;
        data[2] = 30.0;

        for (int i = 0; i < data.length; i++) {
            System.out.println(data[i]);
        }
    }
}

// 10.0
// 20.0
// 30.0
// 0.0
// 0.0
```

전체 배열 길이 5에서 유효한 값은 3까지임. 그러면 유효한 값까지만 출력해보는 프로그램은 어떻게 만들까?

```java
public class ArrayTest2 {
    public static void main(String[] args) {
        double[] data = new double[5];
        // 유효한 값이 저장된 배열 요소 개수를 저장할 변수
        int size = 0;

        data[0] = 10.0; size++;
        data[1] = 20.0; size++;
        data[2] = 30.0; size++;

        // 유효한 값이 저장된 배열 요소 개수만큼 반복문 실행
        for(int i = 0; i < size; i++) {
            System.out.println(data[i]);
        }
    }
}

// 10.0
// 20.0
// 30.0
```

- 이렇게 추가적인 변수를 통하여 유효한 값만 뽑아올 수 있다.
- ArrayList 객체 배열은 이런 부분을 미리 구현해서 메서드로 제공해줌 ㅎ

<br>

### 문자 저장 배열 만들기

```java
package chapter07;

public class CharArray {
    public static void main(String[] args) {
        char[] alphabets = new char[26];
        char ch = 'A';

        for(int i = 0; i < alphabets.length; i++, ch++) {
            alphabets[i] = ch;
        }

        for(int i = 0; i < alphabets.length; i++) {
            System.out.println(alphabets[i] + ", " + (int)alphabets[i]);
        }
    }
}
```

- 알파벳 문자는 실제 메모리에 아스키 코드 값으로 저장됨
- 예를 들어, 아스키 코드값 65는 대문자 'A'임
- 아스키 코드값을 1씩 증가시키면 A, B, C .. 이렇게 증가

<br>

### 객체 배열 사용

- 기본 자료형(int, double 등)이 아닌 참조 자료형으로 선언하는 방법
- 참조 자료형 변수는 클래스형으로 선언한 변수를 의미

```java
// Book 클래스
package chapter07;

public class Book {
    private String bookName;
    private String author;

    public Book () {};

    public Book(String bookName, String author) {
        this.bookName = bookName;
        this.author = author;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void showBookInfo() {
        System.out.println(bookName + ", " + author);
    }
}
```

```java
// BookArray 클래스
package chapter07;

public class BookArray {
    public static void main(String[] args) {
        Book[] library = new Book[5];

        for(int i = 0; i < library.length; i++) {
            System.out.println(library[i]);
        }
    }
}

// null
// null
// null
// null
// null
```

- `Book[] library = new Book[5];`은 Book 클래스의 인스턴스가 5개 생성된 것이 아님
- 인스턴스를 생성하면 그 인스턴스를 가리키는 주소 값이 있는데, 인스턴스 주소 값을 담을 공간 5개를 생성한다는 의미
- 그래서 Book 클래스 주소를 담을 공간 5개를 만들었고, 비어있으니까 null이 출력되는 것

```java
// BookArray2 클래스
package chapter07;

public class BookArray2 {
    public static void main(String[] args) {
        Book[] library = new Book[5];

        library[0] = new Book("태백산맥", "조정래");
        library[1] = new Book("데미안", "헤르만 헤세");
        library[2] = new Book("어떻게 살 것 인가", "유시민");
        library[3] = new Book("토지", "박경리");
        library[4] = new Book("어린왕자", "생택쥐페리");

        for (int i = 0; i < library.length; i++) {
            library[i].showBookInfo();
        }

        for (int i = 0; i < library.length; i++) {
            System.out.println(library[i]);
        }
    }
}

// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것 인가, 유시민
// 토지, 박경리
// 어린왕자, 생택쥐페리
// chapter07.Book@1b6d3586
// chapter07.Book@4554617c
// chapter07.Book@74a14482
// chapter07.Book@1540e19d
// chapter07.Book@677327b6
```
- 참조 변수 library에 5칸의 인스턴스 주소값을 담을 공간을 생성
- 이후 Book 클래스에 매개변수로 값을 담은 상태
- 그 이후 showBookInfo 메서드로 내용을 출력해보고
- 그 이후 참조 변수에 저장된 주소 값을 출력해봄

<br>

### 배열 복사하기

- 기존 배열과 똑같은 배열을 만들고 싶거나, 자료가 꽉 차서 더 큰 배열을 만들어 **기존 배열에 저장된 자료를 가져오고 싶을 때** 복사해보자
- `01. for문을 사용하여 각 요소 값을 반복해서 복사`
- `02. System.arraycopy() 메서드 이용`

System.arraycoppy(src, srcPos, dest, destPost, length) 매개 변수 형식

|매개변수|설명|
|-------|-----|
|src|복사할 배열 이름|
|srcPos|복사할 배열의 첫 번째 위치|
|dest|복사해서 붙여 넣을 대상 배열 이름|
|destPost|복사해서 대상 배열에 붙여 넣기를 시작할 첫 번째 위치|
|length|src에서 dest로 자료를 복사할 요소 개수|

```java
package chapter07;

public class ArrayCopy {
    public static void main(String[] args) {
        int[] array1 = {10, 20, 30, 40, 50};
        int[] array2 = {1, 2, 3, 4, 5};

        System.arraycopy(array1, 0, array2, 1, 4);
        for(int i = 0; i < array2.length; i++) {
            System.out.println(array2[i]);
        }
    }
}
// 1
// 10
// 20
// 30
// 40
```
- 복사할 대상 배열의 전체 길이 < 복사할 요소 개수 = 오류

<br>

### 객체 배열 복사

```java
package chapter07;

public class ObjectCopy1 {
    public static void main(String[] args) {
        Book[] bookArray1 = new Book[3];
        Book[] bookArray2 = new Book[3];

        bookArray1[0] = new Book("태백산맥", "조정래");
        bookArray1[1] = new Book("데미안", "헤르만 헤세");
        bookArray1[2] = new Book("어떻게 살 것인가", "유시민");
        System.arraycopy(bookArray1, 0, bookArray2, 0, 3);

        for (int i = 0; i < bookArray2.length; i++) {
            bookArray2[i].showBookInfo();
        }
    }
}
```

- 여기서 의문, bookArray2 배열의 인스턴스를 따로 만든건 아니고 주소 값 저장할 공간만 만들어놨는데 어떻게 출력이 잘 될까? (사실 벌써 감 오지? 주소 값 가리키는 포인터 개념이니까 ㅎ)

<br>

**얕은 복사(shallow copy)**

<br>

```java
package chapter07;

public class ObjectCopy1 {
    public static void main(String[] args) {
        Book[] bookArray1 = new Book[3];
        Book[] bookArray2 = new Book[3];
        
        bookArray1[0] = new Book("태백산맥", "조정래");
        bookArray1[1] = new Book("데미안", "헤르만 헤세");
        bookArray1[2] = new Book("어떻게 살 것인가", "유시민");
        System.arraycopy(bookArray1, 0, bookArray2, 0, 3);

        for (int i = 0; i < bookArray2.length; i++) {
            bookArray2[i].showBookInfo();
        }

        System.out.println("bookArray2[0]의 내용을 변경");
        bookArray2[0].setBookName("나목");
        bookArray2[0].setAuthor("박완서");

        System.out.println("=== bookArray1 출력 ===");
        for (int i = 0; i < bookArray1.length; i++) {
            bookArray1[i].showBookInfo();
        }
    }
}
// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
// bookArray2[0]의 내용을 변경
// === bookArray1 출력 ===
// 나목, 박완서
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
```
- `bookArray2[0]`의 요소 값을 변경했는데, `bookArray[1]`의 요소 값도 같이 바뀜
- 객체 배열의 요소에 저장된 값 = 인스턴스의 주소 값
- 객체 배열의 요소에 저장된 값 != 인스턴스 자체
- 객체 배열을 복사할 때 인스턴스를 따로 생성하는게 아니라 **기존 인스턴스의 주소 값만 복사**하기 때문에 이런 일 발생

<br>

**깊은 복사(deep copy)**

- `System.arraycopy()` 메서드 사용 / 객체 배열 복사하면 **항상 인스턴스 주소가 복사됨**
- 인스턴스를 따로 관리하고 싶으면 직접 인스턴스를 만들고 값을 복사해야함
- 즉, 인스턴스 생성 -> 배열 복사가 되어야 함

```java
bookArray2[0] = new Book();
bookArray2[1] = new Book();
bookArray2[2] = new Book();

for (int i = 0; i < bookArray1.length; i++) {
    bookArray2[i].setBookName(bookArray1[i].getBookName());
    bookArray2[i].setAuthor(bookArray1[i].getAuthor());
}
```

- 전체 코드
```java
package chapter07;

public class ObjectCopy2 {
    public static void main(String[] args) {
        Book[] bookArray1 = new Book[3];
        Book[] bookArray2 = new Book[3];

        bookArray1[0] = new Book("태백산맥", "조정래");
        bookArray1[1] = new Book("데미안", "헤르만 헤세");
        bookArray1[2] = new Book("어떻게 살 것인가", "유시민");

        bookArray2[0] = new Book();
        bookArray2[1] = new Book();
        bookArray2[2] = new Book();

        for (int i = 0; i < bookArray1.length; i++) {
            bookArray2[i].setBookName(bookArray1[i].getBookName());
            bookArray2[i].setAuthor(bookArray1[i].getAuthor());
        }

        System.out.println("=== 인스턴스 생성 이후 값 복사한 bookArray2 ===");
        for (int i = 0; i < bookArray2.length; i++) {
            bookArray2[i]. showBookInfo();
        }

        bookArray1[0].setBookName("나목");
        bookArray1[0].setAuthor("박완서");
        System.out.println("=== bookArray1 ===");
        for (int i = 0; i < bookArray1.length; i++) {
            bookArray1[i].showBookInfo();
        }

        System.out.println("=== bookArray2에 변경 끼쳤나 확인 ===");
        for (int i = 0; i < bookArray2.length; i++) {
            bookArray2[i]. showBookInfo();
        }
    }
}
// === 인스턴스 생성 이후 값 복사한 bookArray2 ===
// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
// === bookArray1 ===
// 나목, 박완서
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
// === bookArray2에 변경 끼쳤나 확인 ===
// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
```

### 향상된 for문과 배열

- 배열의 처음에서 끝까지 모든 요소를 참조할 때 사용하면 편리함
- **향상된 for문**은 배열 요소 값을 순서대로 하나씩 가져와서 변수에 대입

```java
for(변수 : 배열) {
    반복 실행문;
}
```

```java
package chapter07;

public class EnhancedForLoop {
    public static void main(String[] args) {
        String[] strArray = {"Java", "Android", "C", "JavaScript", "Python"};

        for(String language : strArray) {
            System.out.println(language);
        }
    }
}

// Java
// Android
// C
// JavaScript
// Python
```

<br>

## 다차원 배열

### 이차원 배열

```java
// 둘다 2 X 3 행렬
int[][] arr = new int[2][3];
int[][] arr = {{1, 2, 3}, {4, 5, 6}};
```

- 이차원 배열은 중첩 for문 활용
- `arr.length` : 행의 길이
- `arr[0].length` : 열의 길이

```java
package chapter07;

public class TwoDimension {
    public static void main(String[] args) {
        int[][] arr = {{1, 2, 3}, {4, 5, 6}};

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}

// 1 2 3
// 4 5 6
```

<br>

## ArrayList 클래스 활용

### 기존 배열의 단점, 그리고 ArrayList

1. 항상 배열 길이를 정하고 시작
2. 당연히 배열 길이는 가변적으로 변할 것
3. 혹은 중간에 배열 값이 빠지게 되면, 중간에 요소 비우면 안되니까 수정해야함

-> 그래서 자바는 객체 배열 더 쉽게 사용하게 ArrayList로 멤버 변수, 메서드 제공

### ArrayList 클래스 주요 메서드

|메서드|설명|
|------|----|
|boolean add(E e)|요소 하나를 배열에 추가. E는 요소의 자료형|
|int size()|배열에 추가된 요소 전체 개수 반환|
|E get(int index)|배열의 index 위치에 있는 요소 값 반환|
|E remove(int index)|배열의 index 위치에 있는 요소 값 제거하고 그 값 반환|
|boolean isEmpty()|배열이 비어 있는지 확인|

<br>

추가
- `add() 메서드` : 배열 길이와 상관없이 객체 추가 (배열 요소 개수가 부족하면 배열 크기 자동으로 키워줌 + 배열 중간에 요소 값 제거 되면 그 다음 요소 값 하나씩 앞으로 당겨줌)

<br>

### ArrayList 클래스 활용

```java
ArrayList<E> 배열 이름 = new ArrayList<E>();
```

- 어떤 자료형 객체를 사용할 지 선언할 수 있음
- ArrayList 클래스는 util 패키지에 있음. 쓰려면 import 해와야겠지?
- `<E>`는 제네릭 자료형
- `<>` 안에 객체의 자료형 쓰면 됨
- 예를 들어서, 위에서 한 Book 클래스형을 자료형으로 쓴다면

```java
ArrayList<Book> library = new ArrayList<Book>();
```

```java
package chapter07;
import java.util.ArrayList;

public class ArrayListTest {
    public static void main(String[] args) {
        ArrayList<Book> library = new ArrayList<Book>();

        library.add(new Book("태백산맥", "조정래"));
        library.add(new Book("데미안", "헤르만 헤세"));
        library.add(new Book("어떻게 살 것인가", "유시민"));
        library.add(new Book("토지", "박경리"));
        library.add(new Book("어린왕자", "생텍쥐페리"));

        for (int i = 0; i < library.size(); i++) {
            Book book = library.get(i);
            book.showBookInfo();
        }
        System.out.println();

        System.out.println("=== 향상된 for문 사용 ===");
        for(Book book : library) {
            book.showBookInfo();
        }
    }
}
// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
// 토지, 박경리
// 어린왕자, 생텍쥐페리

// === 향상된 for문 사용 ===
// 태백산맥, 조정래
// 데미안, 헤르만 헤세
// 어떻게 살 것인가, 유시민
// 토지, 박경리
// 어린왕자, 생텍쥐페리
```

<br>

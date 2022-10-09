# Java 언어 학습 계획

-   Do it Java로 빠르게 입문서 완독
-   이후 Java의 정석 회독을 늘리면서 익숙해지기
-   Do it 자료구조와 알고리즘도 함께 학습

<br>

## Java 코딩 컨벤션

-   클래스 이름 : 대문자로 시작
-   패키지 이름 : 모두 소문자로
-   public 클래스는 단 하나, public 클래스 이름과 자바 파일이름은 동일하게
-   변수, 메서드 이름 : 소문자로 시작, 이름이 길어지는 경우 camel notation이용하여 중간중간 대문자로 구분하기

<br>

## Java settings

### Windows

[환경 변수 설정법 링크](https://suzxc2468.tistory.com/141)

1. https://www.oracle.com/java/technologies/downloads/ 에서 Java 8에 Java SE Development Kit 8u341를 windows x64 다운로드 받기
2. 검색창 - 내 pc(클릭 X, 마우스 우클릭) 속성 - 고급 시스템 설정 - 환경 변수

    - 아래 시스템 변수 - 새로 만들기

        - 변수 이름 : JAVA_HOME
        - 변수 값 : C:\Program Files\Java\jdk1.8.0_341 (자바 JDK 설치 경로)

    - 아래 시스템 변수 - Path - 편집 - 새로 만들기

        - %JAVA_HOME%\bin

    - 아래 시스템 변수 - 새로 만들기
        - 변수 이름 : CLASSPATH
        - 변수 값 : %JAVA_HOME%\lib

3. 환경변수 설정 이후 확인하려면 cmd에서 `javac -version` 입력
4. 자바11 쓸거면 JAVA_HOME의 JDK 설치 경로만 11로 바꿔주면 됨

<br>

### WSL2

1. `sudo vi /etc/apt/sources.list`에서 카카오 미러서버 되어있는지 부터 확인
    - 안되어 있으면 `%s /기존주소/mirror.kakao.com` 으로 변경하고 저장
2. `sudo apt-get update`로 우분투 패치
3. `sudo apt install openjdk-11-jdk`로 자바11 JDK 설치

<br>

-   환경설정

1. `which java`로 java 위치 파악, 결과 `/usr/bin/java`로 뜰 것
2. `readlink -f /usr/bin/java` 하면 결과 `/usr/lib/jvm/java-8-openjdk-amd64/bin/java`로 뜰 것, 여기서 `/usr/lib/jvm/java-8-openjdk-amd64`를 기억
3. `sudo vi /etc/environment`에서 기존에 있던거 지우고 `JAVA_HOME=/usr/lib/jvm/java-11-openjdk-arm64` 입력 후 저장
4. `source /etc/environment`로 환경설정 파일 적용
5. `echo $JAVA_HOME`로 JAVA 환경변수 작동 확인. 경로 나오면 제대로 된거

<br>

-   버전관리

1. [블로그 링크](https://codechacha.com/ko/ubuntu-install-open-jdk11/)를 따라하려고 했는데.. 나랑은 뭔가 달라서 일단
2. `sudo apt install openjdk-8-jdk`로 자바8 jdk 설치
3. `sudo update-alternatives --config java` 이거 해보면 알아서 적용 되어있음. 아마 환경설정할때 경로 다 날리고 JAVA_HOME만 냅둬서 그런듯
4. 저기서 원하는 모드 선택하면 버전 왔다갔다 끝

## IntelliJ settings

1. 인텔리제이 pro버전 다운로드 체크는 전부 다 체크하고 맨 밑에 association만 java파일 연관 체크
2. 깃허브 권한 설정으로 아이디 연동

<br>

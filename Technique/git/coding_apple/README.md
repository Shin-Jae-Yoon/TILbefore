## git 사용법

<br>

### git 설치법 (windows)

<br>

1. 구글에 git windows 검색 후 다운
2. 설치 과정에서 `Use Visual Studio Code as Git's default editor` 체크
3. 설치 과정에서 `Override the default branch` 체크하고 원하는 branch 명
   현재, 깃과 깃허브 기본 브랜치를 **master**로 설정해놨음
4. 설치 과정에서 기본 에디터 체크 안했다면 `git config --global core.editor "code --wait"`

<br>

### git 설치법 (Mac)

<br>

1. 구글에 Homebrew 검색 후 설치
2. 터미널에 `brew install git` 입력 후 깃 설치
3. `git config --global init.defaultBranch master` 기본 브랜치 master로 설정
4. `git config --global core.editor "code --wait"` 기본 에디터 vscode로 설정

<br>

### git 초기 세팅

<br>

1. windows는 powershell, mac은 터미널
2. `git config --global user.email "github 아이디"`
3. `git config --global user.name "이름"`
4. `git config --global core.autocrlf true` windows
5. `git config --global core.autocrlf input` linux/mac

<br>

### git init, add, commit, status, log

<br>

<p align="center"><img src="./img/img01.png" width="75%"></img></p>

-   `git init` : git 사용할 수 있게 폴더를 세팅해주는 명령어
-   `git add 파일명` : 작업 폴더에서 staging area로 올려줌
-   `git commit -m "메모"` : staging area에서 repository로 올려줌
-   작업 폴더에서 staging area로 올릴 파일을 고르는 행위를 **스테이징 한다**라고 함
-   `git status` : 어떤 파일들이 staging area에 있는지 상태창 확인
-   `git log --all --oneline` : commit 내역 조회

<br>

git add, commit을 vscode로 쉽게 하는 방법

-   vscode 내장 기능 이용해서도 가능 왼쪽 git 모양에서 `+` 눌러서 add, 취소는 `-`, `체크` 눌러서 commit

<br>

### git diff

<br>

-   `git diff` : 최근 commit과 현재 파일의 차이점 보여줌
    -   j, k로 스크롤바 조작 / q로 종료
-   diff가 엔터키 하나, 스페이스바 하나만 했다고 해도 차이점으로 보여주기 때문에 좀 쓰레기 같음
-

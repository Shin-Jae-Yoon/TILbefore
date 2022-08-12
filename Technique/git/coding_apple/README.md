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

```bash
git config --global init.defaultBranch master
git config --global core.editor "code --wait"
git config --global user.email "github 아이디"
git config --global user.name "이름"
git config --global core.autocrlf true   # windows
git config --global core.autocrlf input  # mac
```

<br>

### git init, add, commit, status, log

<br>

<p align="center"><img src="./img/img01.png"></img></p>

```bash
git init                 # 초기 폴더를 git 사용할 수 있게
git add file_name        # 작업 폴더 -> staging area
git commit -m "memo"     # staging area -> repository
git status               # staging area 목록 확인
git log --all --oneline  # commit 내역 한 줄로 조회
```

작업 폴더에서 staging area로 올릴 파일을 고르는 행위를 **스테이징 한다** 라고 함

<br>

### git diff

<br>

-   `git diff` : 최근 commit과 현재 파일의 차이점 보여줌
    -   j, k로 스크롤바 조작 / q로 종료
-   diff가 엔터키 하나, 스페이스바 하나만 했다고 해도 차이점으로 보여주기 때문에 좀 쓰레기 같음
-   `git difftool` : vi 에디터 형태로 비교해서 편하게 보여줌
    -   vi에디터 기본 동작키 h, j, k, l, `:q` 이런거 사용
-   `git difftool 커밋아이디` : 현재 파일과 특정커밋 비교 가능
-   사실 difftool도 쓰레기라... 그냥 vscode로 설정하고 보자
-   vscode extensions에서 git graph 다운받으면

<br>

```bash
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
git difftool
```

<br>

### VScode 이용한 git 사용

<p align="center"><img src="./img/img02.png"></img></p>

1. 1번 버튼 누르면 사용 가능
2. 플러스 모양 눌러서 `작업폴더 -> staging area`
3. 마이너스 모양 눌러서 `staging area -> 작업폴더`
4. 체크 모양 눌러서 `staging area -> repository`
5. 그래프 모양 눌러서 브랜치 별 커밋 내용들, 각 파일 눌러서 diff 모두 확인 가능

<br>

### git branch

<br>

<p align="center"><img src="./img/img03.png"></img></p>

<br>

```bash
git branch 브랜치명     # 브랜치 생성
git switch 브랜치명     # 브랜치로 이동
git log --all --oneline --graph # branch 그래프 모양도 같이 보기

git merge 브랜치명      # 현재 위치(HEAD)에 브랜치명을 병합
```

<br>

<p align="center"><img src="./img/img04.png"></img></p>

<br>

-   충돌이 났을 때, 어떤 것을 적용할 지 선택하고 꼭 git add, git commit 해주자.
-   merge는 현재 위치(HEAD)에 브랜치를 병합하는 과정이다. 따라서 switch로 브랜치 이동을 꼭 해주고 병합하자.
-   과거에는 checkout을 주로 썼는데, checkout은 만능인 반면 switch는 정말 브랜치 이동만 한다. 무지성 checkout 하는걸 염려해서 브랜치 이동은 `switch`, 스테이징 취소는 `git restore --staged <file>` 명확하게 나눠서 사용하는 추세인 듯 하다.

<br>

<left>![img](./img/img05.png)</left> <right>![img](./img/img06.png)</right>

-   git graph로 보면 시간 순서가 완벽하게 되어있는데, git log는 그래보이진 않음

<br>

```bash
git branch      # 브랜치 목록 확인 (로컬)
git branch -r   # 브랜치 목록 확인 (원격 ex.github)
git branch -a   # 브랜치 목록 확인 (전체)
git branch -d 브랜치명              # 브랜치 삭제 (로컬저장소)
git push origin --delete 브랜치명   # 브랜치 삭제 (원격저장소)
```

<br>

### git hist

<br>

`git hist`는 실제로는 없는 명령어이다. 매번 `git log --all --oneline --graph` 이런식으로 작성하기 귀찮으니까 `alias` 기능으로 만든 것이다. 일종의 커스텀 기능이다. 원래 oneline만 하면 날짜나 누가 커밋했는지는 안나와서, 내가 커스텀 한 것은 아래와 같다.

```bash
git config --global alias.hist "log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short"
```

<p align="center"><img src="./img/img07.png"></img></p>

<br>

-   날짜, 커밋명 간단히, 커밋내용, 커밋작성자, 브랜치 다 보인다.
-   보면 git config user name을 수정했었는데, `origin/master`, `orign/HEAD` 저기까지가 깃허브에 git push로 올렸던 커밋들이다. 그 이후 user name을 저렇게 수정했었다. 아직은 push 하지 않은 상태라 브랜치가 coupon, HEAD -> master 이렇게 되어있는 모습이다.
-   vim 환경이기 때문에 j가 아래 방향키, k가 위 방향키로 잘먹는다.

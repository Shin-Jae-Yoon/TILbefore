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

<p align="center"><img src="./img/img01.png" width="75%"></img></p>

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

<p align="center"><img src="./img/img02.png" width="75%"></img></p>

1. 1번 버튼 누르면 사용 가능
2. 플러스 모양 눌러서 `작업폴더 -> staging area`
3. 마이너스 모양 눌러서 `staging area -> 작업폴더`
4. 체크 모양 눌러서 `staging area -> repository`
5. 그래프 모양 눌러서 브랜치 별 커밋 내용들, 각 파일 눌러서 diff 모두 확인 가능

<br>


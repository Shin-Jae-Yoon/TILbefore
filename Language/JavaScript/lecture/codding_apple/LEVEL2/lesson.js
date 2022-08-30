// 로그인하기 버튼
$('#login').on('click', function () {
    $('.black-bg').addClass('show-modal');
});

// 검은배경 누르면 모달창 닫기 버튼
$('.black-bg').on('click', function (e) {
    if ($(e.target).is($('.black-bg'))) {
        $('.black-bg').removeClass('show-modal');
    }
});

// 닫기 버튼
$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
});

// 햄버거 버튼
$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show-menubar');
});

// 다크 버튼
var count = 0;

$('.badge').on('click', function () {
    count += 1;
    if (count % 2 == 1) {
        $('.badge').html('Light 🔄');
        $('.badge').removeClass('bg-dark');
        $('.badge').addClass('bg-primary');
    } else {
        $('.badge').html('Dark 🔄');
        $('.badge').removeClass('bg-primary');
        $('.badge').addClass('bg-dark');
    }
});

// 5초 이내 닫히는 알림창
let alert_num = parseInt(document.querySelector('#alert-sec').innerHTML);

function 알림창제거() {
    document.querySelector('.alert').style.display = 'none';
}

let 타이머 = setInterval(function () {
    if (alert_num > 0) {
        alert_num -= 1;
        document.querySelector('#alert-sec').innerHTML = alert_num;
    } else {
        알림창제거();
        clearTimeout(타이머);
    }
}, 1000);

// 아이디, 비번 제출 폼
$('form').on('submit', function (e) {
    let 아이디 = document.getElementById('email').value;
    let 비번 = document.getElementById('pw').value;

    if (아이디 == '') {
        alert('아이디를 입력 해주세요 !');
        e.preventDefault();
    } else if (/\S+@\S+\.\S+/.test(아이디) == false) {
        alert('이메일 형식이 아닙니다 !');
        e.preventDefault();
    } else if (비번 == '') {
        alert('비밀번호를 입력 해주세요 !');
        e.preventDefault();
    } else if (비번.length < 6) {
        alert('비밀번호를 6자리 이상 입력 해주세요 !');
        e.preventDefault();
    } else if (/[A-Z]/.test(비번) == false) {
        alert('비밀번호에 영어 대문자를 최소 1개 이상 입력 해주세요 !');
        e.preventDefault();
    } else {
        alert('정상적으로 제출되었습니다.');
    }
});

// 캐러셀
let var_btn = 0;

document.querySelector('.slide-1').addEventListener('click', function () {
    var_btn = 0;
    document.querySelector('.slide-container').style.transform =
        'translateX(0vw)';
});

document.querySelector('.slide-2').addEventListener('click', function () {
    var_btn = 1;
    document.querySelector('.slide-container').style.transform =
        'translateX(-100vw)';
});

document.querySelector('.slide-3').addEventListener('click', function () {
    var_btn = 2;
    document.querySelector('.slide-container').style.transform =
        'translateX(-200vw)';
});

function 이전버튼클릭() {
    if (var_btn > 0 && var_btn <= 2) {
        var_btn -= 1;
        document.querySelector('.slide-container').style.transform =
            'translateX(-' + var_btn + '00vw)';
    }
}

function 다음버튼클릭() {
    if (var_btn >= 0 && var_btn < 2) {
        var_btn += 1;
        document.querySelector('.slide-container').style.transform =
            'translateX(-' + var_btn + '00vw)';
    }
}

document.querySelector('.before-btn').addEventListener('click', 이전버튼클릭);

document.querySelector('.after-btn').addEventListener('click', 다음버튼클릭);

// 캐러셀 심화
let 시작좌표 = 0;
let 눌렀냐 = false;

document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('mousedown', function (e) {
        시작좌표 = e.clientX;
        눌렀냐 = true;
    });

document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('mousemove', function (e) {
        if (눌렀냐 === true) {
            document.querySelector(
                '.slide-container'
            ).style.transform = `translateX(${e.clientX - 시작좌표}px)`;
        }
    });

document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('mouseup', function (e) {
        눌렀냐 = false;
        console.log(e.clientX - 시작좌표);

        if (e.clientX - 시작좌표 < -100) {
            document.querySelector('.slide-container').style.transform =
                'translateX(-100vw)';
            document.querySelector('.slide-container').style.transition =
                'all 0.5s';
        } else {
            document.querySelector('.slide-container').style.transform =
                'translateX(0vw)';
            document.querySelector('.slide-container').style.transition =
                'all 0.5s';
        }

        setTimeout(() => {
            document.querySelector('.slide-container').style.transition =
                'none';
        }, 500);
    });

// 캐러셀 심화 모바일
document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('touchstart', function (e) {
        시작좌표 = e.touches[0].clientX;
        눌렀냐 = true;
    });

document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('touchmove', function (e) {
        if (눌렀냐 === true) {
            document.querySelector(
                '.slide-container'
            ).style.transform = `translateX(${
                e.touches[0].clientX - 시작좌표
            }px)`;
        }
    });

document
    .querySelectorAll('.slide-box')[0]
    .addEventListener('touchend', function (e) {
        눌렀냐 = false;
        console.log(e.changedTouches[0].clientX - 시작좌표);

        if (e.changedTouches[0].clientX - 시작좌표 < -100) {
            document.querySelector('.slide-container').style.transform =
                'translateX(-100vw)';
            document.querySelector('.slide-container').style.transition =
                'all 0.5s';
        } else {
            document.querySelector('.slide-container').style.transform =
                'translateX(0vw)';
            document.querySelector('.slide-container').style.transition =
                'all 0.5s';
        }

        setTimeout(() => {
            document.querySelector('.slide-container').style.transition =
                'none';
        }, 500);
    });

// 회원약관 알림창
document.querySelector('.lorem').addEventListener('scroll', function () {
    let 스크롤양 = document.querySelector('.lorem').scrollTop;
    let 실제높이 = document.querySelector('.lorem').scrollHeight;
    let 눈높이 = document.querySelector('.lorem').clientHeight;
    // console.log(스크롤양, 실제높이, 눈높이);

    if (스크롤양 + 눈높이 > 실제높이 - 10) {
        alert('약관을 모두 읽으셨네요!');
    }
});

// 스크롤바 내리면 글자 작아지게
// 현재 페이지 바닥 감지
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
        this.document.querySelector('.navbar-brand').style.fontSize = '20px';
    } else {
        this.document.querySelector('.navbar-brand').style.fontSize = '30px';
    }
    let 페이지실제높이 = document.querySelector('html').scrollHeight;
    let 페이지눈높이 = document.querySelector('html').clientHeight;
    let 페이지스크롤양 = document.querySelector('html').scrollTop;
    let 스크롤퍼센트 = (페이지스크롤양 / (페이지실제높이 - 페이지눈높이)) * 100;
    // console.log(스크롤퍼센트);

    this.document.querySelector('.page_progress').style.width =
        스크롤퍼센트 + '%';

    // if (페이지스크롤양 + 페이지눈높이 > 페이지실제높이 - 10) {
    //     alert("페이지 끝이지롱!");
    // }
});

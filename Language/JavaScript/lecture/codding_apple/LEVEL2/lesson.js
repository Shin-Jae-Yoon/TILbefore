// 스크롤바 내리면 글자 작아지게
window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
        this.document.querySelector(".navbar-brand").style.fontSize = "20px";
    } else {
        this.document.querySelector(".navbar-brand").style.fontSize = "30px";
    }
});

// 로그인하기 버튼
$("#login").on("click", function () {
    $(".black-bg").addClass("show-modal");
});

// 닫기 버튼
$("#close").on("click", function () {
    $(".black-bg").removeClass("show-modal");
});

// 햄버거 버튼
$(".navbar-toggler").on("click", function () {
    $(".list-group").toggleClass("show-menubar");
});

// 다크 버튼
var count = 0;

$(".badge").on("click", function () {
    count += 1;
    if (count % 2 == 1) {
        $(".badge").html("Light 🔄");
        $(".badge").removeClass("bg-dark");
        $(".badge").addClass("bg-primary");
    } else {
        $(".badge").html("Dark 🔄");
        $(".badge").removeClass("bg-primary");
        $(".badge").addClass("bg-dark");
    }
});

// 5초 이내 닫히는 알림창
let alert_num = parseInt(document.querySelector("#alert-sec").innerHTML);

function 알림창제거() {
    document.querySelector(".alert").style.display = "none";
}

let 타이머 = setInterval(function () {
    if (alert_num > 0) {
        alert_num -= 1;
        document.querySelector("#alert-sec").innerHTML = alert_num;
    } else {
        알림창제거();
        clearTimeout(타이머);
    }
}, 1000);

// 아이디, 비번 제출 폼
$("form").on("submit", function (e) {
    let 아이디 = document.getElementById("email").value;
    let 비번 = document.getElementById("pw").value;

    if (아이디 == "") {
        alert("아이디를 입력 해주세요 !");
        e.preventDefault();
    } else if (/\S+@\S+\.\S+/.test(아이디) == false) {
        alert("이메일 형식이 아닙니다 !");
        e.preventDefault();
    } else if (비번 == "") {
        alert("비밀번호를 입력 해주세요 !");
        e.preventDefault();
    } else if (비번.length < 6) {
        alert("비밀번호를 6자리 이상 입력 해주세요 !");
        e.preventDefault();
    } else if (/[A-Z]/.test(비번) == false) {
        alert("비밀번호에 영어 대문자를 최소 1개 이상 입력 해주세요 !");
        e.preventDefault();
    } else {
        alert("정상적으로 제출되었습니다.");
    }
});

// 캐러셀
let var_btn = 0;

document.querySelector(".slide-1").addEventListener("click", function () {
    var_btn = 0;
    document.querySelector(".slide-container").style.transform =
        "translateX(0vw)";
});

document.querySelector(".slide-2").addEventListener("click", function () {
    var_btn = 1;
    document.querySelector(".slide-container").style.transform =
        "translateX(-100vw)";
});

document.querySelector(".slide-3").addEventListener("click", function () {
    var_btn = 2;
    document.querySelector(".slide-container").style.transform =
        "translateX(-200vw)";
});

function 이전버튼클릭() {
    if (var_btn > 0 && var_btn <= 2) {
        var_btn -= 1;
        document.querySelector(".slide-container").style.transform =
            "translateX(-" + var_btn + "00vw)";
    }
}

function 다음버튼클릭() {
    if (var_btn >= 0 && var_btn < 2) {
        var_btn += 1;
        document.querySelector(".slide-container").style.transform =
            "translateX(-" + var_btn + "00vw)";
    }
}

document.querySelector(".before-btn").addEventListener("click", 이전버튼클릭);

document.querySelector(".after-btn").addEventListener("click", 다음버튼클릭);

document.querySelector(".lorem").addEventListener("scroll", function () {
    let 스크롤양 = document.querySelector(".lorem").scrollTop;
    let 실제높이 = document.querySelector(".lorem").scrollHeight;
    let 눈높이 = document.querySelector(".lorem").clientHeight;

    console.log(스크롤양, 실제높이, 눈높이);
});

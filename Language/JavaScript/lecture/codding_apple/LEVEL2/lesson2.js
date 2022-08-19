// 이벤트리스너 1개 버전
let 탭버튼 = $(".tab-button");
let 탭내용 = $(".tab-content");

function 탭열기(구멍) {
    탭버튼.removeClass("orange");
    탭버튼.eq(구멍).addClass("orange");
    탭내용.removeClass("show");
    탭내용.eq(구멍).addClass("show");
}

$(".list").on("click", function (e) {
    탭열기(parseInt(e.target.dataset.id));
});

// 이벤트 리스너 3개 버전
// let 탭버튼 = $(".tab-button");
// let 탭내용 = $(".tab-content");

// for (let i = 0; i < 탭버튼.length; i++) {
//     탭버튼.eq(i).on("click", function () {
//         탭열기(i);
//     });
// }

// function 탭열기(구멍) {
//     탭버튼.removeClass("orange");
//     탭버튼.eq(구멍).addClass("orange");
//     탭내용.removeClass("show");
//     탭내용.eq(구멍).addClass("show");
// }

// 노가다 버전
// $(".tab-button")
//     .eq(0)
//     .on("click", function () {
//         $(".tab-button").removeClass("orange");
//         $(".tab-button").eq(0).addClass("orange");
//         $(".tab-content").removeClass("show");
//         $(".tab-content").eq(0).addClass("show");
//     });

// $(".tab-button")
//     .eq(1)
//     .on("click", function () {
//         $(".tab-button").removeClass("orange");
//         $(".tab-button").eq(1).addClass("orange");
//         $(".tab-content").removeClass("show");
//         $(".tab-content").eq(1).addClass("show");
//     });

// $(".tab-button")
//     .eq(2)
//     .on("click", function () {
//         $(".tab-button").removeClass("orange");
//         $(".tab-button").eq(2).addClass("orange");
//         $(".tab-content").removeClass("show");
//         $(".tab-content").eq(2).addClass("show");
//     });

// document.querySelectorAll('.tab-button')[0].addEventListener('click', function() {
//     document.querySelectorAll('.tab-button')[0].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[1].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[2].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');

//     document.querySelectorAll('.tab-content')[0].classList.remove('show');
//     document.querySelectorAll('.tab-content')[1].classList.remove('show');
//     document.querySelectorAll('.tab-content')[2].classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// })

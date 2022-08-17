// Q1. 변수 만들기
let age = 27;
const place = '김해';
// console.log(age, place);

// Q2. 변수 동작하지 않는 이유, 출력결과 예측
var name = 'park';
var id = 0;

function showName() {
    var name = 'kim';
    var id = 1;
    // console.log(name);
}

showName();
// console.log(id);

// Q3. 이자율 계산
let 예금액 = 10000;
let 미래예금액 = 0;

if (예금액 < 50000) {
    미래예금액 = 예금액 * 1.15 * 1.15;
} else {
    미래예금액 = 예금액 * 1.2 * 1.2;
}

// console.log(미래예금액);

// Q4. 커피 리필
let first_coffee = 360;
let total =
    first_coffee + (first_coffee * 2) / 3 + (((first_coffee * 2) / 3) * 2) / 3;
// console.log(total);

// (응용 01) 이자율 계산 함수
let 예금액2 = 60000;
let 미래예금액2 = 0;
let year = 0;

function 이자율계산(year) {
    if (예금액2 < 50000) {
        미래예금액2 = 예금액2 * 1.15 ** year;
    } else {
        미래예금액2 = 예금액2 * 1.2 ** year;
    }

    // console.log(미래예금액2);
}

이자율계산(2);

// (응용 02) 커피리필 문제
let coffee2 = 360;
let coffee2_r = 2 / 3;

let total2 = coffee2 / (1 - coffee2_r);
console.log(total2);

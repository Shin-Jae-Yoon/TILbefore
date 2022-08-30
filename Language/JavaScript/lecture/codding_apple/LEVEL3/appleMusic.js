window.addEventListener("scroll", function () {
    let 높이 = this.window.scrollY;
    let y = (-1 / 500) * 높이 + 115 / 50;
    let z = (-1 / 5000) * 높이 + 565 / 500;

    this.document.querySelectorAll(".card-box")[0].style.opacity = y;
    this.document.querySelectorAll(
        ".card-box"
    )[0].style.transform = `scale(${z})`;
    console.log(z);
});

document.getElementById("quiz").addEventListener("click", function (e) {
    switch (e.target.innerHTML) {
        case "와이프":
            alert("와이프를 구하셨네요!");
            break;
        case "부모님":
            alert("부모님을 구하셨네요!");
            break;
        case "키우던 개":
            alert("키우던 개를 구하셨네요!");
            break;
    }
});

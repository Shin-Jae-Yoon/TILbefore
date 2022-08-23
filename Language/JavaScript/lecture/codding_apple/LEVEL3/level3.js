let products = [
    {id: 0, price: 70000, title: 'Blossom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 60000, title: 'Black Monastery'},
];

for (let i = 0; i < products.length; i++) {
    let cardTitle = document.querySelectorAll('.card-title')[i];
    let cardPrice = document.querySelectorAll('.card-price')[i];

    cardTitle.innerHTML = products[i].title;
    // cardPrice.innerHTML = '가격 : ' + products[i].price;
    cardPrice.innerHTML = `가격 : ${products[i].price}`;
}

// 서버에서 보내준 데이터라고 가정
let shirts = [90, 95, 100, 105];
let pants = [28, 30, 32, 34];

document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        let value = this.value;
        let optionSelector = document.querySelectorAll('.form-select')[1];

        if (value == '셔츠') {
            optionSelector.classList.remove('form-hide');
            optionSelector.innerHTML = '';

            // for (let i = 0; i < shirts.length; i++) {
            //     optionSelector.insertAdjacentHTML(
            //         'beforeend',
            //         `<option>${shirts[i]}</option>`
            //     );
            // }

            shirts.forEach(function (data) {
                optionSelector.insertAdjacentHTML(
                    'beforeend',
                    `<option>${data}</option>`
                );
            });
        } else if (value == '바지') {
            optionSelector.classList.remove('form-hide');
            optionSelector.innerHTML = '';

            // pants.forEach(function (data) {
            //     optionSelector.insertAdjacentHTML(
            //         'beforeend',
            //         `<option>${data}</option>`
            //     );
            // });

            pants.forEach((data) => {
                optionSelector.insertAdjacentHTML(
                    'beforeend',
                    `<option>${data}</option>`
                );
            });
        } else {
            optionSelector.classList.add('form-hide');
        }
    });

// $.get('https://codingapple1.github.io/price.json')
//     .done(function (data) {
//         console.log(data.price);
//     })
//     .fail(function () {
//         console.log('실패함');
//     });

fetch('https://codingapple1.github.io/price.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.price);
    })
    .catch((error) => {
        console.log(error);
    });

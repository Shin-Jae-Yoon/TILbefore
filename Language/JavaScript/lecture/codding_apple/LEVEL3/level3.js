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

document
    .querySelectorAll('.form-select')[0]
    .addEventListener('input', function () {
        let value = this.value;

        if (value == '셔츠') {
            document
                .querySelectorAll('.form-select')[1]
                .classList.remove('form-hide');
            let 셔츠 = `
                <option>95</option>
                <option>100</option>
            `;

            document.querySelectorAll('.form-select')[1].innerHTML = 셔츠;
        } else if (value == '바지') {
            document
                .querySelectorAll('.form-select')[1]
                .classList.remove('form-hide');

            let 바지 = `
                <option>28</option>
                <option>30</option>
            `;

            document.querySelectorAll('.form-select')[1].innerHTML = 바지;
        } else {
            document
                .querySelectorAll('.form-select')[1]
                .classList.add('form-hide');
        }
    });

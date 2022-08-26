let products = [
    {id: 0, price: 70000, title: 'Blossom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 60000, title: 'Black Monastery'},
];

function template(data) {
    data.forEach((a) => {
        let cardTemplate = `
            <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100" />
                <h5>${a.title}</h5>
                <p>가격 : ${a.price}</p>
            </div>      
        `;

        document
            .querySelector('.row')
            .insertAdjacentHTML('beforeend', cardTemplate);
    });
}

template(products);

let count = 0;

document.querySelector('.btn-more').addEventListener('click', function () {
    if (count == 0) {
        fetch('https://codingapple1.github.io/js/more1.json')
            .then((res) => res.json())
            .then((data) => {
                template(data);
            })
            .catch((error) => {
                console.log(error);
            });

        count += 1;
    } else if (count == 1) {
        fetch('https://codingapple1.github.io/js/more2.json')
            .then((res) => res.json())
            .then((data) => {
                template(data);
            })
            .catch((error) => {
                console.log(error);
            });

        count += 1;
    } else {
        alert('마지막 상품페이지입니다.');
    }
});

// 가격순 정렬
document
    .querySelector('.btn-sort-price')
    .addEventListener('click', function () {
        products.sort(function (a, b) {
            return a.price - b.price;
        });
        document.querySelector('.row').innerHTML = '';
        template(products);
        count = 0;
    });

// 상품명 정렬
document.querySelector('.btn-sort-name').addEventListener('click', function () {
    products.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1;
        }
    });

    document.querySelector('.row').innerHTML = '';
    template(products);
    count = 0;
});

// 6만원 이하 정렬
document
    .querySelector('.btn-sort-price6')
    .addEventListener('click', function () {
        let products_under = products.filter(function (a) {
            return a.price <= 60000;
        });
        document.querySelector('.row').innerHTML = '';
        template(products_under);
        count = 0;
    });

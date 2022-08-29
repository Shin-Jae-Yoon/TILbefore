let products = [
    {id: 0, price: 70000, title: 'Blossom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 60000, title: 'Black Monastery'},
];

let setProducts = [...products];

function template(data) {
    data.forEach((a, i) => {
        let cardTemplate = `
            <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100" />
                <h5>${a.title}</h5>
                <p>가격 : ${a.price}</p>
                <button class="btn btn-primary buy mb-2">구매</button>
            </div>      
        `;

        document
            .querySelector('.row')
            .insertAdjacentHTML('beforeend', cardTemplate);

        document
            .querySelectorAll('.buy')
            [i].addEventListener('click', function () {
                let storageItem =
                    this.previousElementSibling.previousElementSibling
                        .innerHTML;

                if (localStorage.getItem('cart') != null) {
                    let outItem = JSON.parse(localStorage.getItem('cart'));
                    if (outItem.includes(storageItem)) {
                        alert('장바구니에 이미 물품이 있습니다.');
                    } else {
                        outItem.push(storageItem);
                        localStorage.setItem('cart', JSON.stringify(outItem));
                        alert('장바구니에 등록되었습니다.');
                    }
                } else {
                    localStorage.setItem('cart', JSON.stringify([storageItem]));
                    alert('장바구니에 등록되었습니다.');
                }

                // if (localStorage.getItem('cart') != null) {
                //     let outItem = JSON.parse(localStorage.getItem('cart'));
                //     let outItemIndex = outItem.findIndex((a) => {
                //         return a === storageItem;
                //     });

                //     if (outItemIndex === -1) {
                //         outItem.push(storageItem);
                //         localStorage.setItem('cart', JSON.stringify(outItem));
                //         alert('장바구니에 등록되었습니다.');
                //     } else {
                //         alert('장바구니에 이미 물품이 있습니다.');
                //     }
                // } else {
                //     localStorage.setItem('cart', JSON.stringify([storageItem]));
                // }
            });
    });
}

template(setProducts);

// 더보기
let count = 0;
document.querySelector('.btn-more').addEventListener('click', function () {
    if (count == 0) {
        fetch('https://codingapple1.github.io/js/more1.json')
            .then((res) => res.json())
            .then((data) => {
                data.forEach((a) => {
                    setProducts.push(a);
                });
                document.querySelector('.row').innerHTML = '';
                template(setProducts);
            })
            .catch((error) => {
                console.log(error);
            });

        count += 1;
    } else if (count == 1) {
        fetch('https://codingapple1.github.io/js/more2.json')
            .then((res) => res.json())
            .then((data) => {
                data.forEach((a) => {
                    setProducts.push(a);
                });
                document.querySelector('.row').innerHTML = '';
                template(setProducts);
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
        setProducts.sort(function (a, b) {
            return a.price - b.price;
        });
        document.querySelector('.row').innerHTML = '';
        template(setProducts);
    });

// 상품명 정렬
document.querySelector('.btn-sort-name').addEventListener('click', function () {
    setProducts.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1;
        }
    });

    document.querySelector('.row').innerHTML = '';
    template(setProducts);
});

// 6만원 이하 정렬
document
    .querySelector('.btn-sort-price6')
    .addEventListener('click', function () {
        let products_under = setProducts.filter(function (a) {
            return a.price <= 60000;
        });
        document.querySelector('.row').innerHTML = '';
        template(products_under);
    });

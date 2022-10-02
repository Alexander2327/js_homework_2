const products = [
    {
        id: 111,
        name: 'Джинсы',
        description: 'Зауженные',
        sizes: [32, 44, 45],
        price: 1800,
        available: true,
    },
    {
        id: 222,
        name: 'Рубашка',
        description: 'Красная',
        sizes: ['M', 'XL'],
        price: 800,
        available: true,
    },
    {
        id: 333,
        name: 'Кроссовки',
        description: 'Для бега',
        sizes: [39, 40],
        price: 4000,
        available: true,
    },
    {
        id: 444,
        name: 'Куртка',
        description: 'Зимняя',
        sizes: ['L'],
        price: 10000,
        available: false,
    },
    {
        id: 555,
        name: 'Носки',
        description: 'Короткие, мужские',
        sizes: [41, 42, 43],
        price: 300,
        available: true,
    },
]

const basket = [
    {
        productID: 555,
        amount: 3,
    },
    {
        productID: 222,
        amount: 2,
    },
]

basket.addProduct = function (productID, amount) {
    this.push({productID:  productID,
              amount: amount});
}
basket.delProduct = function (productID) {
    basket.forEach(function(el, i) {
        if (el.productID == productID) basket.splice(i, 1);
      })
}

basket.clear = function () {
    while (this.length) {
        this.pop();
      }
}

function total() {
    let total = {totalAmount: 0,
                totalSumm: 0,}
    for (i of basket) {
        total.totalAmount += i.amount;
        for (j of products) {
            if (j.id === i.productID) {
                total.totalSumm += j.price * i.amount;
            }
        }
    }
    return total
}


//basket.addProduct(111, 2)
//basket.delProduct(555)
//basket.clear()
//console.log(basket)
//console.log(total())
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'gold monkey',
        tag: 'gmonkey',
        price: 150,
        inCart: 0,
    },
    {
        name: 'human one',
        tag: 'humanone',
        price: 69,
        inCart: 0,
    }
]

for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumber();
    })
}

function cartNumber(){
    let productNumber = localStorage.getItem('cartNumber');
    console.log(productNumber)
    productNumber = parseInt(productNumber)
    localStorage.setItem('cartNumber', 1);
}
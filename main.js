let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'gold monkey',
        tag: 'gmonkey',
        price: 150,
        inCart: 0
    },
    {
        name: 'human one',
        tag: 'humanone',
        price: 69,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumber(products[i]);
    })
}
function onLoadCartNumber(){
    let productNumber = localStorage.getItem('cartNumber');
    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber;
    }
}

function cartNumber(product){
    console.log("product clicked: ", product);
    let productNumber = localStorage.getItem('cartNumber');

    productNumber = parseInt(productNumber);

    if (productNumber){
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    } else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);

    if(cartItems !== null){
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

onLoadCartNumber();
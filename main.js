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
    },
    {
        name: 'body guard',
        tag: 'bodyguard',
        price: 130,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumber(products[i]);
        totalCost(products[i]);
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

function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost+product.price);
    } else{
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".productsCart");
    console.log(cartItems);

    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products">
            <a class="remouv ${item.tag}" href="#" ><ion-icon name="close-circle"></ion-icon></a>
                <img class="prodpicscart" src="./image/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <a href="#" class="sous ${item.tag}"><ion-icon href="#" name="remove-circle"></ion-icon></a>
                <span>${item.inCart}<span>
                <a href="#" class="add ${item.tag}"><ion-icon name="add-circle"></ion-icon></a>
            </div>
            <div class="total">
                ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}
                </h4>
            </div>
        `
    }
}
displayCart();
onLoadCartNumber();
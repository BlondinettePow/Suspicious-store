let remouv = document.querySelectorAll('.remouv');
let sous = document.querySelectorAll('.sous');
let add = document.querySelectorAll('.add');


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
        `
    }
}
function remouvCart(product){
    console.log("vous tentez de suppr",product);
}
displayCart()
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email === "" || password === "") {
        alert("Please provide both email and password.");
    } else {
        window.location.href = "home.html";
    }
});

let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cartList");
    let totalPrice = 0;
    cartList.innerHTML = "";

    cart.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById("totalPrice").textContent = totalPrice;
}

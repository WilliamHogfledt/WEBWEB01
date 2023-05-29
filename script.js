item_names = ["Gray Tee", "Base 4 Pack", "Black/White 4 Pack", "Black Tee"]
cart = [0, 0, 0, 0]



function buy_button(item_id) {
    cart[item_id] += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function decrease_item(item_id) {
    if (cart[item_id] > 0) {
        cart[item_id] -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    hide_cart();
    show_cart();
}

function load_cart() {
    const found = localStorage.getItem("cart");
    if (found) cart = JSON.parse(found);
}

function show_cart() {
    load_cart();
    let cart_items = document.getElementById("#cart-items")
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        if (element > 0) {
            let div = document.createElement("div");
            div.classList.add("cart-item");
            let h3 = document.createElement("h3");
            h3.classList.add("item-text")
            h3.textContent = element + "x " + item_names[i];
            div.appendChild(h3);
            cart_items.appendChild(div)
            div.insertAdjacentHTML("beforeend", '<svg onclick="decrease_item(' + i + ')" class="cross" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>')
        }
        
    }
    document.getElementById("#cart").style.display = "flex";

}

function hide_cart() {
    let parent = document.getElementById("#cart-items");
    document.getElementById("#cart").style.display = "none";
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let cartItemObjects;
const CONVIENENCE_FEES = 99;
onLoad();

function onLoad() {
  loadCartItemObject();
  displayCartItems();
  displayCartPriceDetails();
}

function displayCartPriceDetails() {
  let cartPriceDetailsElement = document.querySelector(
    ".shoping-cart-price-details"
  );

  let totalItems = cartItemObjects.length;
  let totalMrp = 0;
  let totalDiscount = 0;

  cartItemObjects.forEach((cartItem) => {
    totalMrp += cartItem.original_price;
    totalDiscount += cartItem.original_price - cartItem.current_price;
  });

  let finalPayment = totalMrp - totalDiscount + CONVIENENCE_FEES;

  cartPriceDetailsElement.innerHTML = `<div><b>PRICE DETAILS (${totalItems} items)</b></div>
  <hr />
  <div>Total MRP <span class="total-mrp">₹${totalMrp}</span></div>
  <div>Discount on MRP <span class="disc-on-mrp">-₹${totalDiscount}</span></div>
  <div>Convenience Fee <span class="convenience-fee">₹99</span></div>
  <hr />
  <b
  let finalPayment = 0;
  ><div>Total Amount <span class="total-amount">₹${finalPayment}</span></div>
    <div></div
  ></b>
  <button class="place-order">PLACE ORDER</button>`;
}

function loadCartItemObject() {
  console.log(cartItems);
  cartItemObjects = cartItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(cartItemObjects);
}

function displayCartItems() {
  // console.log(cartItems);
  let itemCartContainerElement = document.querySelector(".shoping-cart");
  let innerHTML = "";
  cartItemObjects.forEach((cartItem) => {
    innerHTML += generateItemHtml(cartItem);
  });
  // console.log(innerHTML);
  itemCartContainerElement.innerHTML = innerHTML;
}

function removeFromCart(itemId) {
  cartItems = cartItems.filter((cartItemId) => cartItemId != itemId);
  // console.log(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  loadCartItemObject();
  displayCartCount();
  displayCartItems();
  displayCartPriceDetails();
}

function generateItemHtml(item) {
  return `<div class="cart-item-container">
  <img class="img" src="../${item.image}" alt="item-image"
  />
  <div class="item-details">
    <div class="company-name">${item.company}</div>
    <div class="item-name">
      ${item.item_name}
    </div>
    <div class="price">
      <span class="current-price">₹${item.current_price} </span>
      <span class="original-price">M.R.P:${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}off)</span>
    </div>
    <div class="return-policy"><b>${item.return_policy} days</b> return available</div>
    <div class="delivery">Delivery by ${item.delivery_date}</div>
  </div>
  <div class="delete-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></div>
</div>`;
}

let cartItems;

onLoad();

function onLoad() {
  let cartItemStr = localStorage.getItem("cartItems");

  cartItems = cartItemStr ? JSON.parse(cartItemStr) : [];

  displayItemsOnHomePage();
  displayCartCount();
}
// console.log(cartItemStr);
// console.log(cartItems);

function addToCart(itemId) {
  cartItems.push(itemId);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCartCount();
}

function displayCartCount() {
  let cartCountElement = document.querySelector(".cart-count");

  if (cartItems.length > 0) {
    cartCountElement.style.visibility = "visible";
    cartCountElement.innerText = cartItems.length;
  } else {
    cartCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `<div class="item-container">
  <img
    class="item-image"
    src="${item.image}"
    alt="mobile image"
  />
  <div class="rating">
    ${item.rating.stars}<i class="fa-solid fa-star" style="color: goldenrod"></i> | ${item.rating.count}
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">
  ${item.item_name}
  </div>
  <div class="bank-offer"><i class="fa-solid fa-tag offer-tag"></i> <b>Bank Offer:</b> ${item.offer} <i style="cursor : pointer;"><b><a href="https://www.flipkart.com/pages/sbi-offfer-tnc">T&C</a></b></i></div>
  <div class="price">
    <span class="current-price">₹${item.current_price}</span>
    <span class="original-price">M.R.P: ₹${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% off)</span>
  </div>
  <button class="btn-add-cart button-hover" onclick="addToCart(${item.id})"> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
  </div>`;
  });

  itemsContainerElement.innerHTML = innerHtml;
  // console.log(innerHtml);
}

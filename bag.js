const Convenience_Fees=99;
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displyaBagSummary();
  
}

function displyaBagSummary(){
    let bagSummaryElement=document.querySelector('.bag-summary');
    let totaleItem=bagItemObjects.length;
    let totaleMRP=0;
    let totaleDiscount=0;
    
    bagItemObjects.forEach(bagItem=>{
        totaleMRP+=bagItem.original_price;
        totaleDiscount+=bagItem.original_price-bagItem.current_price;
    });
    let finalPrice=totaleMRP-totaleDiscount+99;

    bagSummaryElement.innerHTML=`
        <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (${totaleItem}Items) </div>
        <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totaleMRP}</span>
        </div>
        <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totaleDiscount}</span>
        </div>
        <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹99</span>
        </div>
        <hr>
        <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPrice}</span>
        </div>
    </div>
    <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
    </button>`;
}
function loadBagItemObjects() {
    console.log(bagItem);
    bagItemObjects = bagItem.map(itemId => {
      for (let i = 0; i < item.length; i++) {
        if (itemId == item[i].id) {
          return item[i];
        }
      }
    });
    console.log(bagItemObjects);
}
function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
      innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItem = bagItem.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    loadBagItemObjects();
    displyabagicon();
    displayBagItems();
    displyaBagSummary()
    
}


function generateItemHTML(item) {
    return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="${item.image}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
}

   
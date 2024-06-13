let bagItem;
onlode();
function onlode(){
    let bagItemStr=localStorage.getItem('bagItem');
    bagItem=bagItemStr ? JSON.parse(bagItemStr) :[];
    dislpyaItemOnHomePage();
    displyabagicon()
}


function addToBag(itemID){
    bagItem.push(itemID);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    displyabagicon();

}
function displyabagicon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItem.length>0){

        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItem.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
   
}
  

function dislpyaItemOnHomePage(){
    let itemContainerElement=document.querySelector('.items-container');
    if (!itemContainerElement){
        return;
    }
    let innerHTML='';
    item.forEach(item=>{
        innerHTML+=`
        <div class="item-container">
            <img src="${item.image}" alt="iten-image" class="item-img">
            <div class="raing">
                ${item.rating.stars}⭐| ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price} </span>
                <span class="discount">${item. discount_percentage}% OFF</span>
            </div>
            <button class="add-bag-btn" onclick="addToBag(${item.id});">Add to Bag</button>
        </div>`
    });
    itemContainerElement.innerHTML=innerHTML;
}









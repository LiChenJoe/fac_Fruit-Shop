
let fruit = [
    {
        name:"Apple",
        image:"../img/Apple.jpeg",
        price:"10",
    },
    {
        name:"Orange",
        image:"../img/Orange.jpeg",
        price:"15",
    },
    {
        name:"Bannana",
        image:"../img/Bannana.jpeg",
        price:"50",
    },
    {
        name:"Watermelon",
        image:"../img/Watermelon.jpeg",
        price:"100"
    },
]
let fruitName = document.querySelectorAll(".fruitTitle");
let fruitImg = document.querySelectorAll("img");
let fruitPrice = document.querySelectorAll("span");
let cartItem = document.querySelector(".cartItem");
let cartTotalPrice= document.querySelector(".cartTotalPrice");
fruitName.innerHTML= "apple";
for (let i= 0; i<fruit.length; i++) {
    fruitName[i].innerHTML=fruit[i].name;
    fruitImg[i].src=fruit[i].image;
    fruitPrice[i].innerHTML+=fruit[i].price;
    
}
function increasePurchase(element) {
    let amountCount = element.parentElement.children[1].innerHTML;
    amountCount =Number(amountCount) +1;
    element.parentElement.children[1].innerHTML=amountCount;
}

function decreasePurchase(element) {
    let amountCount = element.parentElement.children[1].innerHTML;
    if (Number(amountCount)>=1) {
        amountCount =Number(amountCount) -1;

    } else {
        return ;
    }
    element.parentElement.children[1].innerHTML=amountCount;
}

function addtoCart(element) {
    let addFruit = element.parentElement.children[0].innerHTML;
    console.log(addFruit);
    let addAmount= element.parentElement.children[3].children[1].innerHTML;
    console.log(addAmount, element.parentElement.children[0]);
    if (cartTotalPrice.innerHTML===""){
        cartTotalPrice.innerHTML= 0
    }
    let fruitTotalPrice;
    let numberOfFruit;
    if (Number(addAmount)===0) {
        console.log(element.parentElement);
        //element.parentElement.remove();
        return ;
    }
    console.log(cartItem);
    if (cartItem.children.length>1){
            for (let i = 1; i <cartItem.children.length; i++) {
                console.log(element.parentElement.children[0]);
                console.log(cartItem.children, i);
                if (addFruit ===cartItem.children[i].children[0].innerHTML){ 
                    console.log(cartItem.children[i].children[cartItem.children[1].children.length-1], "here");
                    numberOfFruit = Number(cartItem.children[i].children[cartItem.children[1].children.length-1].innerHTML)+Number(addAmount);
                    cartItem.children[i].children[cartItem.children[1].children.length-1].innerHTML= numberOfFruit;
                    console.log(element.parentElement.children[2].children[0].innerHTML);
                    fruitTotalPrice=numberOfFruit* Number(element.parentElement.children[2].children[0].innerHTML);
                    cartTotalPrice.innerHTML+=fruitTotalPrice;
                    addAmount=1;
                    element.parentElement.children[3].children[1].innerHTML=addAmount;
                    return;
                } else {
                    continue;
                }
            }
    }
    console.log(element.parentElement.children[3].children[1].innerHTML);
    let newItem = document.createElement("div");
    let increaseNewItemAmount =  document.createElement("button");
    let decreaseNewItemAmount =  document.createElement("button");
    let newItemName = document.createElement("p");
    let newItemAmount = document.createElement("p");
    fruitTotalPrice=addAmount* Number(element.parentElement.children[2].children[0].innerHTML);
    newItemName.innerHTML = addFruit;
    newItemAmount.innerHTML = addAmount;
    increaseNewItemAmount.innerHTML= "+";
    increaseNewItemAmount.classList.add("increaseNewItemAmount");
    increaseNewItemAmount.addEventListener("click", (e)=>{
        console.log(e.target.parentElement.children.length-1);
        numberOfFruit=Number(e.target.parentElement.children[3].innerHTML)+1;
        console.log(numberOfFruit);
        e.target.parentElement.children[3].innerHTML=numberOfFruit;
    })
    decreaseNewItemAmount.innerHTML ="-";
    decreaseNewItemAmount.classList.add("decreaseNewItemAmount");
    newItem.classList.add("cartItemStyle");
    decreaseNewItemAmount.addEventListener("click", (e)=>{
        if (Number(e.target.parentElement.children[e.target.parentElement.children.length-1].innerHTML)>0){
            numberOfFruit= Number(e.target.parentElement.children[cartItem.children[1].children.length-1].innerHTML)-1;
            console.log(numberOfFruit);
            e.target.parentElement.children[cartItem.children[1].children.length-1].innerHTML= numberOfFruit;
            if (Number(e.target.parentElement.children[e.target.parentElement.children.length-1].innerHTML)===0){
                e.target.parentElement.remove();;
            }
        }
    })
    console.log("fruitTotalPrice:", fruitTotalPrice, "addAmount: ", addAmount);
    
    newItem.appendChild(newItemName);
    newItem.appendChild(increaseNewItemAmount);
    newItem.appendChild(decreaseNewItemAmount);
    newItem.appendChild(newItemAmount);
    cartItem.appendChild(newItem);
    console.log("fruitTotalPrice:", fruitTotalPrice, "numberOfFruit: ", numberOfFruit);
    cartTotalPrice.innerHTML+=Number(fruitTotalPrice); 
    addAmount=1;
    element.parentElement.children[3].children[1].innerHTML=addAmount;
}
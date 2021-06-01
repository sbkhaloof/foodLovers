'use strict'
let myForm=document.getElementById("myForm");
let tbody=document.getElementById("tbody");
myForm.addEventListener('submit',addUser);
let myArray=[];
function Food(cuName,foodType){
    this.cuName=cuName;
    this.foodType=foodType;
    this.bath=`img/${foodType}.jpg`;
    this.price=getPrice();
    myArray.push(this);
}
function addUser(event){
    event.preventDefault();
    let cuName=event.target.cuName.value;
    console.log(cuName);
    let fooType=event.target.foodType.value;
    new Food(cuName,fooType);
    settingItem();
    render();
}
function getPrice(){
    return Math.floor(Math.random()*100)+1;
}

function settingItem(){
    let data=JSON.stringify(myArray);
    localStorage.setItem('food',data);
}
function gettingItem(){
    let stringObject=localStorage.getItem('food');
    let normalObject=JSON.parse(stringObject);
    if(normalObject !== null)
    {myArray=normalObject;}
    render();
}

function render(){
     tbody.textContent=" ";
    
    for (let i=0;i<myArray.length;i++){
        let trEL=document.createElement('tr');
        tbody.appendChild(trEL);
        let tdEL=document.createElement('td');
        trEL.appendChild(tdEL);
        let imgEL=document.createElement('img');
        tdEL.appendChild(imgEL);
        imgEL.setAttribute('src',myArray[i].bath);
        let tdEL2=document.createElement('td');
        trEL.appendChild(tdEL2);
        tdEL2.textContent=`Customer name:${myArray[i].cuName},Food Type :${myArray[i].foodType},Food price :${myArray[i].price}`;

    }
} 
gettingItem();
for (let i = 0; i < prodactsArray.length; i++) {
    
    if(prodactsArray[i].Categories == "cacti"){
        diva.innerHTML += `<div id="divs">
        <div class="pics">
        <img src="${prodactsArray[i].imgArray[0]}" class="a">
    <img src="${prodactsArray[i].imgArray[1]}" class="b"><br>
    </div>
    <p class="Description">${prodactsArray[i].id}<br>
    ${prodactsArray[i].name}<br>
    ${prodactsArray[i].price}<br>
    ${prodactsArray[i].Description}<br>
    ${prodactsArray[i].Categories}<br>
    <button style="background-color : greenyellow"class="btn">הוסף</button></p>
    </div>`
    }
   
    
}


var btn = document.getElementsByClassName("btn");
var iconCounter = document.getElementById("iconCounter");

iconCounter.innerText = cartArray.length;

for (let i = 0; i < prodactsArray.length; i++) {
    if (prodactsArray[i].Categories == "cacti") {
    for (let j = 0; j < btn.length; j++) {
        btn[j].onclick = ()=>{
                newObject = {
                   id: prodactsArray[i].id,
                   name: prodactsArray[i].name,


                }
                iconCounter.innerText = cartArray.length;
                cartArray.push(newObject)
        
            }      
            }
    
    
    }
}

console.log(cartArray);



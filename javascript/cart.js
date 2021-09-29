

var cartArray = [
    {
        id: 1,
        name: "גפן הירקן  🌼",
        price: 12000,
        Description: "הציערות באזור מוצאם, הפיליפינים",
        Categories: "flowers",
        imgArray: ["https://pbs.twimg.com/media/ENdACknXYAAE609.jpg",
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/strongylodon-macrobotrys-rosita-so-image.jpg"
        ],
    },
    {
        id: 2,
        name: "מקור התוכי  🌼",
        price: 25000,
        Description: "ה אולם נכון ל- 2008, כולם כשלו",
        Categories: "flowers",
        imgArray: ["http://3.bp.blogspot.com/-nV_3milan_c/UVADxdrmODI/AAAAAAAABds/MRlnHIQohFI/s1600/81562090.jpg",
            "https://images.fineartamerica.com/images-medium-large-5/3-lotus-berthelotii-or-bicolored-golden-lotus-vine-j-mccombie.jpg"
        ],
    },
    {
        id: 16,
        name: "פרח אנפה לבן 🌼",
        price: 79900,
        Description: "Pecteilis radiata (פרח האנפה הלבן) הביב.",
        Categories: "flowers",
        imgArray: ["https://live.staticflickr.com/4085/4840851476_1c49c7d628_b.jpg",
            "https://theawesomedaily.com/wp-content/uploads/2018/05/incredible-flowers.jpg"
        ],
    },
];

for (let i = 0; i < 3; i++) {
    diva1.innerHTML += `
    <div class="trClass">
    <table>
        <tr>
            <th>name of prodact</th>
            <td>id:${cartArray[i].id}</td>
            <td>name:${cartArray[i].name}</td>
            <td>price:${cartArray[i].price}</td>
            <td>Description:${cartArray[i].Description}</td>
            <td>Categories:${cartArray[i].Categories}</td>
        </tr>
</table>
<button class="cartBtnAdd">Add</button>
<button class="cartBtnDelate">Delate</button>
</div>`
}


let sum = 0;
for (let i = 0; i < cartArray.length; i++) {
    sum += cartArray[i].price
}
para.innerHTML += `sum: ${sum}`;



var cartBtnDelate = document.getElementsByClassName("cartBtnDelate");
var tableRowDelate = document.getElementsByClassName("trClass");

for (let i = 0; i < cartArray.length; i++) {
    cartBtnDelate[i].onclick = () => {
        tableRowDelate[i].innerHTML = "";
        cartArray.splice(i, 1);
    }
}
console.log(cartArray);

var cartBtnAdd = document.getElementsByClassName("cartBtnAdd");
var tableRowAdd = document.getElementsByClassName("trClass");
var click = document.getElementById("click");

for (let i = 0; i < cartArray.length; i++) {
    cartBtnAdd[i].onclick = () => {
        tableRowAdd[i].innerHTML += "<h2>cent add yet</h2>";
        
    }
}
console.log(cartArray);

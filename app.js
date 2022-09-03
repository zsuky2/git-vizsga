var title = document.getElementById("title");
var author = document.getElementById("author");
var number = document.getElementById("number");
var category = document.getElementById("category");
var price = document.getElementById("price");

var vatNullPercent = document.getElementById("vatNullPercent");
var vatTenPercent = document.getElementById("vatTenPercent");
var vatTwentySevenPercent = document.getElementById("vatTwentySevenPercent");

var discounted = document.getElementById("discounted");
var notDiscounted = document.getElementById("notDiscounted");

var table = document.querySelector("table");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    
    e.preventDefault()

    
    addBook();
})

function addBook() {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var forintHULocale = Intl.NumberFormat('hu-HU');

    td1.innerText = title.value;
    td2.innerText = author.value;
    td3.innerText = number.value;
    td4.innerText = category.value;
    td5.innerText = forintHULocale.format(price.value)+" Forint";
 
    if (title.value=="" || author.value =="" || number.value=="" || category.value=="" || price.value=="" || number.value<0 || price.value<0){
       
        alert("Hiányosan töltötte ki vagy helytelen adatot adott meg.")
        return
    } else if (vatNullPercent.checked){

        
        td6.innerText = "0%";
        var grossPrice = forintHULocale.format(price.value*1);
    } else if (vatTenPercent.checked){

        td6.innerText = "10%";
        var grossPrice = forintHULocale.format(price.value*1.1);
    } else {

        td6.innerText = "27%";
        var grossPrice = forintHULocale.format(price.value*1.27);
    }

    if (discounted.checked){

        td7.innerText = "Nem";
    } else {

        td7.innerText = "Igen";
    }

    td8.innerText=grossPrice+" Forint";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    
    table.appendChild(tr);

    title.value = "";
    author.value = "";
    number.value = "";
    category.value = "";
    price.value = "";

}

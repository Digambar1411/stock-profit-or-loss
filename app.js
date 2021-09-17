var initialPrice=document.querySelector("#initial-price");
var stockQuantity=document.querySelector("#quantity");
var currentPrice=document.querySelector("#current-price");
var resultBtn=document.querySelector("#btn");
var output=document.querySelector("#output");

function calculateProfitLoss(){

    var purchasedPrice = initialPrice.value * stockQuantity.value; 
      var sellingPrice =currentPrice.value * stockQuantity.value;

    if(purchasedPrice > sellingPrice){
       
        showResult("its loss");
    }
    else if(purchasedPrice==sellingPrice){
        showResult("there is no loss or profit");
    }
    else{
        showResult("you earned profit");
    }

}

function showResult(result){
    output.innerText=result;
}

resultBtn.addEventListener("click", calculateProfitLoss);




var initialPrice=document.querySelector("#initial-price");
var quantity=document.querySelector("#quantity");
var currentPrice=document.querySelector("#current-price");
var errorMsg=document.querySelector("#error-msg");
var resultBtn=document.querySelector("#btn");
var output=document.querySelector("#output");

resultBtn.addEventListener("click", validateValue);

function validateValue(){
    hideMessage();
    if(initialPrice.value && quantity.value && currentPrice.value){
        if(initialPrice.value>0 && quantity.value>0 && currentPrice.value>0){
            calculateProfitLoss();  
           
        }
        else{
            showMessage("All the values must be greater than zero");
        }
    }
    else{
        showMessage("Fill out all the values");
    }         
}
        
function calculateProfitLoss(){   
    var costPrice = initialPrice.value * quantity.value; 
    var sellingPrice =currentPrice.value * quantity.value;

    if(costPrice > sellingPrice){
        var lossAmnt =costPrice - sellingPrice;
        var lossPercent =((lossAmnt/costPrice)*100).toFixed(2);
        showResult("Hey loss is", lossAmnt, lossPercent);
        document.body.style.backgroundColor="#FFA8B5";
    }
    else if(costPrice==sellingPrice){
        output.style.display="block";
        output.innerText="No gain No Pain";
        document.body.style.backgroundColor="#898385";
        
    }
    else{
        var profitAmnt=sellingPrice-costPrice;
        var profitPercent =((profitAmnt/costPrice)*100).toFixed(2);
        showResult("Hey profit is ", profitAmnt, profitPercent);
        document.body.style.backgroundColor="#FC7869";
        

    }
        
}    

function showResult(result,amount,percentage){
    output.style.display="block";
    output.innerText=result+" of Rs."+amount + " and the percent is "+percentage+"%";
}
function showMessage(msg){
    errorMsg.innerText=msg
    errorMsg.style.display="block";
    errorMsg.style.color="red";

}

function hideMessage(){
    errorMsg.style.display="none";
    output.style.display="none";

}








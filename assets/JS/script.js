const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");



var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  
};


btn.addEventListener('click', () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let InputVal = input.value;
    
    if (currency1 != currency2) {
        convert(currency1, currency2, InputVal);
    } else {
        alert("Choose Different Currencies!!!");
    }
});


function convert(currency1, currency2, InputVal){
    const  url= `https://api.exchangerate.host/latest?base=${currency1}&symbols=${currency2}&amount=${InputVal}`;
    //onst host = "api.frankfurter.app";
    fetch(
       
        url, requestOptions
    )
    .then((response) => response.json())
    .then((val) =>{
        let SingleRate = Object.values(val.rates);
        console.log(SingleRate[0]);
        if (currency2 == 'NGN') {
            result.value = (SingleRate[0] * 1.615).toFixed(2);
        } 
        else if(currency1 == 'NGN'){
            result.value = (SingleRate[0] / 1.615).toFixed(4);
        } else{
            result.value = SingleRate[0].toFixed(4);
        } 
        
    });
}
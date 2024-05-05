const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";




let selects=document.querySelectorAll(".container select");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
let btn=document.querySelector("button");

for (obj of selects){
    for (currcode in countryList){
        let newoption=document.createElement('Option');
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(obj.name ==="from" && currcode ==="USD"){
            newoption.selected="selected";
        }
        else if( obj.name ==="to" && currcode ==="INR"){
           newoption.selected="selected";
        }
        obj.append(newoption);
    }
    obj.addEventListener("change", (evt)=>{
        updateflag(evt.target);
    });
}
let output = async() => {
    let ammount=document.querySelector(".subcontainer input");
    if (ammount.value==='' || ammount.value<1 ){
        ammount=1;
        ammount.value = "1";
    }
    console.log(ammount.value);
    const URL =  `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data= await response.json();
    console.log(data);

    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = ammount * rate;
    msg.innerText = `${ammount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

}
function updateflag(element){
    let code=element.value;
    let countryCode=countryList[code]
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    output();

});

window.addEventListener("load", () => {
    output();
  });
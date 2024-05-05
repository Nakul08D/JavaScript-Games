let userscore=0;
let computerscore=0;

let choices=document.querySelectorAll(".option");
var score=document.querySelector("#result");

let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#comscore");


let result= (re, compchoice, userchoice)=>{
    if(re==true){
        userscore++;
        uscore.innerHTML=userscore;
        score.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        score.style.backgroundColor="green";
    }
    else{
        computerscore++;
        cscore.innerText=computerscore;
        score.innerHTML=`You Lose! ${compchoice} beats ${userchoice}`;
        score.style.backgroundColor="red";
    }
}

let randomnumber=()=>{
    let a=["stone", "paper", "scessior"];
    let rannum=Math.floor(Math.random() * 3);
    return a[rannum];
}
let playgame=(userchoice)=>{

    // console.log("Inside playgame:",userchoice);
    let computerchoice=randomnumber();
    // console.log("Computerchoice:",computerchoice);

    if(userchoice===computerchoice){

        score.innerText= `Draw! both have choosen ${userchoice}`;
        score.style.backgroundColor="white";

    }
    else if(computerchoice==="stone" && userchoice==="paper"){
        result(true, computerchoice, userchoice);
    }
    else if(computerchoice==="paper" && userchoice==="stone"){
        result(false, computerchoice, userchoice);
    }
    else if(computerchoice==="stone" && userchoice==="scessior"){
        result(false, computerchoice, userchoice);
    }
    else if(computerchoice==="scessior" && userchoice==="stone"){
        result(true, computerchoice, userchoice);
    }
    else if(computerchoice==="paper" && userchoice==="scessior"){
        result(true, computerchoice, userchoice);
    }
    else if(computerchoice==="scessior" && userchoice==="paper"){
        result(false, computerchoice, userchoice);
    }
    else if(computerchoice==="scessior" && userchoice==="stone"){
        result(true, computerchoice, userchoice);
    }
}

choices.forEach((choice)=>{
    
        choice.addEventListener('click',() =>{
        let choiceid=choice.getAttribute("id")
        // console.log("clicked:",choiceid);
        playgame(choiceid)
    }); 
});
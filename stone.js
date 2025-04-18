let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg")

const choices=document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")


const drawgame=()=>{
    msg.innerText="game was draw!"
    msg.style.backgroundColor="blue"
}
 const showwinner=(userwin,userchoice,compchoice)=>{

    if(userwin===true){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win!yours ${userchoice} beats ${compchoice},`;//
        msg.style.backgroundColor="red"
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose!,${compchoice} beats yours ${userchoice}`;//
        msg.style.backgroundColor="green"
    }
}

const playgame=(userchoice)=>{
   

    const compchoice=comuterchoice();
  

    if(userchoice===compchoice) {
      drawgame();//game is draw
    }else {
        let userwin=true;
        if(userchoice=="rock"){
            //paper ,scissors
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            //rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }else if(userchoice==="scissors"){
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
         showwinner(userwin,userchoice,compchoice);
    }
  
}

const comuterchoice=()=>{
    const option=["rock","paper","scissors"]
   let idx= Math.floor(Math.random()*3)
   return option[idx];
}


choices.forEach((choice)=>{
   
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    
  })
})

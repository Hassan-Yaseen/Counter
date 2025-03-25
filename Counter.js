let count=document.querySelector(".count");
let incBtn=document.querySelector("#inc");
let decBtn=document.querySelector("#dec");
let resBtn=document.querySelector("#res");
let newCount=0;

const increase=()=>{
    newCount++;
    count.innerText=newCount;
}

const decrease=()=>{
    newCount--;
    count.innerText=newCount;
}

const reset=()=>{
    newCount=0;
    count.innerText=newCount;
}

incBtn.addEventListener("click",()=>{
    increase();
})

decBtn.addEventListener("click",()=>{
    decrease();
})

resBtn.addEventListener("click",()=>{
    reset();
})

const decrease_btn = document.querySelector(".dec");
const reset_btn = document.querySelector(".reset");
const increase_btn = document.querySelector(".inc");

let counter_val = document.getElementById("counter_val");

decrease_btn.addEventListener("click",()=>{
  counter_val.innerHTML = parseInt(counter_val.innerHTML)-1;
  console.log(counter_val);
})

increase_btn.addEventListener("click",()=>{
    counter_val.innerHTML = parseInt(counter_val.innerHTML)+1;
})

reset_btn.addEventListener("click",()=>{
    counter_val.innerHTML = 0;
})
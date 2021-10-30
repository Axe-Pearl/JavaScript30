let btn = document.querySelector(".btn");
let todolist = document.querySelector(".added_items");
let txt = document.getElementById("input_text");

btn.addEventListener("click",()=>{
   //added_container
   let container = document.createElement("div");
   container.classList.add("container");
   todolist.appendChild(container);

   //text_content
   let added_item = document.createElement("li");
   let delete_btn = document.createElement("button");

   //delete_btn
   delete_btn.innerHTML = "Delete";
   delete_btn.classList.add("delete")
   added_item.innerHTML = txt.value;
   container.appendChild(added_item);
   container.appendChild(delete_btn);

   delete_btn.addEventListener("click",()=>{
       todolist.removeChild(container);
   })
});
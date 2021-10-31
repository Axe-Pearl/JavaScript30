let btn = document.querySelector(".btn");
let todolist = document.querySelector(".added_items");
let txt = document.getElementById("input_text");
let listArr;
showNotes();



btn.addEventListener("click",()=>{
    let userInput = txt.value;
    if(userInput == '') return alert('Please enter a Note :)');
    
    let getLocalStorage = localStorage.getItem('New todo');

    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }

    listArr.push(userInput);
    console.log(listArr);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    txt.value = "";
    showNotes();
 });


 function showNotes(){
     console.log("showNotes",listArr);
    let getLocalStorage = localStorage.getItem('New todo');
    
     if(getLocalStorage==null){
         listArr = [];
     }
     else{
         console.log("ye wala hain");
         listArr = JSON.parse(getLocalStorage);
     }
     console.log("showNotes2",listArr);
     let new_item = listArr.length-1;
    let newtagline = ``;
    listArr.forEach((text,index)=>{
    console.log(index,listArr[index]);
    newtagline = `
    <p>${text}</p>
    <button class="delete" onclick="deleteIt(${index})">Delete</button><br>`;
 
    localStorage.setItem('New todo', JSON.stringify(listArr));
    
    let containers = document.createElement("div");
    containers.classList.add("con");
    containers.innerHTML = newtagline;
    todolist.appendChild(containers);  
   });
    
     let items = document.querySelectorAll(".con");
     items.forEach((item)=>{
        console.log(item);
    })
 }

function deleteIt(index){
    let items = document.querySelectorAll(".con");
    for(var i=0;i<items.length;i++){
        if(index === i){
            console.log(index,i);
           listArr.splice(index,1);
           todolist.removeChild(items[i]);
        }
    }
    console.log(items.length,index);
    localStorage.setItem('New todo', JSON.stringify(listArr));
    location.reload();
    showNotes();
}
 
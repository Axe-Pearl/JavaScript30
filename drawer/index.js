const dr = document.querySelector(".drawer");
const head = document.querySelector("heading");
function openDrawer(){
   dr.style.width = "300px";
   head.style.width = "200px";
}
function closeDrawer(){
    dr.style.width = "0px";
    head.style.width = "0px";

}
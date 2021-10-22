const sec_hand = document.querySelector(".second_hand");
const min_hand = document.querySelector(".minute_hand");
const hrs_hand = document.querySelector(".hour_hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondDegree = ((seconds/60)*360);
    const minuteDegree = ((minutes/60)*360);
    const hourDegree = (30*hours);
    console.log("hrs",hours," ,minuteDegree:",minuteDegree);
    sec_hand.style.transform = `rotate(${secondDegree}deg)`;
    min_hand.style.transform = `rotate(${minuteDegree}deg)`;
    hrs_hand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000);
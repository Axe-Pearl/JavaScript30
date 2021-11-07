const contents = [
    {
         id : "1",
        img :"https://rashtram.org/wp-content/uploads/2021/05/Shankar-3.jpeg",
        quote :"Knowing that I am different from the body, I need not neglect the body. It is a vehicle that I use to transact with the world. It is the temple which houses the Pure Self within."
    },
    {
         id:"2",
          img : "https://images.news18.com/ibnlive/uploads/2017/09/Swami_Vivekananda_Jaipur.jpg?impolicy=website&width=510&height=356",
          quote: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul."
    },
    {
        id:"3",
        img : "https://cdn.myimgstock.com/myimgstock/preview/adiyogi-shiva-murti-images-download-11605108226plpd7jwe4s.jpg",
        quote:"don't worry, keep patience"
    }
]

const prev_btn = document.querySelector(".prev");
const next_btn = document.querySelector(".next");

let currentSlide = 0;

let image_url = document.querySelector(".img_prof");
let quote_txt = document.querySelector(".para");

next_btn.addEventListener("click",()=>{
    currentSlide++;
    if(currentSlide>(contents.length)-1){
        currentSlide = 0;
    }
    console.log(image_url);
    image_url.src = contents[currentSlide].img;
    console.log(image_url);
    quote_txt.innerHTML = `${contents[currentSlide].quote}`;
});


prev_btn.addEventListener("click", ()=>{
    currentSlide--;
    if(currentSlide<0){
        currentSlide = (contents.length-1);
    }
    image_url.src = contents[currentSlide].img;
    quote_txt.innerHTML = `${contents[currentSlide].quote}`;
})
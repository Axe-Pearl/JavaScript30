const pressed = [];
const secretCode = "anurag";     

window.addEventListener("keyup",(e)=>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1 , pressed.length - secretCode.length);
    console.log(pressed.join(''));
    if(pressed.join('').includes(secretCode)){
        document.body.append("Yes,it includes ",secretCode);
        cornify_add()
    }
    console.log(pressed);
})
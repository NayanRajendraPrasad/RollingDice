
let dice =document.getElementById("dice");
let shownum = document.getElementById("shownum");
const images = document.getElementById("images");

function convert(){
let val=Math.floor(Math.random()*6) +1;
val = Number(val);
var audio = document. getElementById("sound"); 
audio. play();

switch(val){
        case 1:
            images.innerHTML=`<img src="${val}.png" width="100px">`;
            dice.style.display="none";
            shownum.textContent="1";
            break;
        case 2:
            images.innerHTML=`<img src='${val}.png' width="100px">`;
            dice.style.display="none";
            shownum.textContent="2";
            break;
        case 3:
            images.innerHTML=`<img src='${val}.png' width="100px">`;
            dice.style.display="none";
            shownum.textContent="3";
            break;
        case 4:
            images.innerHTML=`<img src='${val}.png' width="100px">`;
            dice.style.display="none";
            shownum.textContent="4";
            break;
        case 5:
            images.innerHTML=`<img src='${val}.png' width="100px">`;
            dice.style.display="none";
            shownum.textContent="5";
            break;
        case 6:
            images.innerHTML=`<img src='${val}.png' width="100px">`;
            dice.style.display="none";
            shownum.textContent="6";
            break;
           
    }
}

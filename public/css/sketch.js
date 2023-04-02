
const messageLength=100;
let messageBody=document.querySelectorAll(".post-message")

for(let i=0;i<messageBody.length;i++){
    let currentString=messageBody[i].innerHTML
    console.log(currentString.length)
}

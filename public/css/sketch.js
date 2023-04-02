const messageLength = 10;
let messageBody = document.querySelectorAll(".post-message")
let messageTitle = document.querySelectorAll(".post-title")

for (let i = 0; i < messageBody.length; i++) {
    let title = messageTitle[i].innerHTML;
    let message = messageBody[i].innerHTML.split(" ")
    let trunkedMessage = message.slice(0, messageLength)
    let url = "<a href='/posts/" + title + "'>Readmore</a>"
    let readMore1 = " <span>" + url + "</span>"
    console.log(url)
    trunkedMessage = trunkedMessage.join(" ")
    messageBody[i].innerHTML = trunkedMessage
    messageBody[i].innerHTML += readMore1


}
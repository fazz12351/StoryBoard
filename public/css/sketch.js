const { lowerCase } = require("lodash");

function shortenParagraphs() {
    const messageLength = 20;
    let messageBody = document.querySelectorAll(".post-message")
    let messageTitle = document.querySelectorAll(".post-title")

    for (let i = 0; i < messageBody.length; i++) {
        let title = messageTitle[i].innerHTML;
        let message = messageBody[i].innerHTML.split(" ")
        let trunkedMessage = message.slice(0, messageLength)
        let url = "<a href='/posts/" + title + "'>...Read More</a>"
        let readMore1 = " <span>" + url + "</span>"
        trunkedMessage = trunkedMessage.join(" ")
        messageBody[i].innerHTML = trunkedMessage
        messageBody[i].innerHTML += readMore1


    }
}



shortenParagraphs()
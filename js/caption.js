

const createCaptionButton = document.getElementById("create-caption-button");
const caption = document.getElementById("new-caption")


createCaptionButton.addEventListener("click", () =>{
    let emoji = document.getElementById("emoji").value;
    let prettyAdjective = document.getElementById("adjective1").value;
    let talentedAdjective = document.getElementById("adjective2").value;
    let keyboardSmash = document.getElementById("keyboard-smash").value; 

    caption.textContent = emoji + " Kaitlin! " + keyboardSmash + " You're so " + prettyAdjective + "!!! " + "No one is as " + talentedAdjective + " you!! " + emoji;
})



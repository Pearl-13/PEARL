console.log("My script is running");
let form = 
document.getElementById("form");
let email = 
document.getElementById("email");
let password =
document.getElementById("password");
 let username =
 document.getElementById("name");
let popup = 
document.getElementById("popup");
let closePopup =
document.getElementById("closepopup");
let popupMessage =
document.getElementById("error");
let passwordPattern =
/^[A-Z][?=...*\d][?=...*!@#$%^&*][a-z].{8}$/;
function showPopup(message) {
    popupMessage.textContent = message;
    popup.classList.remove("hidden");
}
// function hidePopup() {
//     popup.classList.add("hidden");
//     popup.style.display = "none";
// }
// closePopup.addEventListener("click", hidePopup);
form.addEventListener("submit", function(e) {
        e.preventDefault();
        showPopup("An entry must be made to proceed");
        console.log("my button was clicked");
    if (email.value.trim() === "") {
        showPopup("Error! Please input a valid email address to proceed.");
        let isFormValid = false;
        console.log(email.value);
        
    }
    else if (password.value.trim() === "") {
        showPopup("Error! Input a valid password.");
        let isFormValid = false;
        console.log(password.value);
        
    }
    else if (username.value.trim() === "") {
        showPopup("Username is required.");
    }
    else if (!passwordPattern.test((password.value.trim()))) {
        showPopup("Password must follow the format Abcdef(symbol)(number 0-9).");
    }
    else{
       showPopup("Congratulations !" + " username.value" + " you have submitted your entry successfully");
       form: form.reset();
    }
});


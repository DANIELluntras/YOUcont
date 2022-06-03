// // <!-- 
// <form class="form form--hidden" id="login">
//     <h1 class="form__title">Login</h1>

//     <div class="form__message form__message--error"></div>
//     <!-- emial and username  -->
//     <div class="form__input-group">
//         <!-- acesta de mai jos este pentru aa aduga undeva unde sa scri adica cva smecher -->
//         <input type="text" class="form__input" autofocus placeholder="Username or email" />
//         <div class="form__input-error-message"></div>
//     </div>
//     <!-- password -->
//     <div class="form__input-group">
//         <input type="password" class="form__input" autofocus placeholder="Confirm password" />
//         <div class="form__input-error-message"></div>
//     </div>

//     <!--  -->
//     <button class="form__button">CONTINUE</button>

//     <p class="form__text">
//         <a href="#" class="from__link">forgot your password</a>
//             </p>
//             <p class="form__text">
//                 <a class="from__link" href="./" id="linkCreateAccount">dont have an accont ? Create a new account</a
//   >
// </p>
// </form>

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--succes", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}













console.log("papa")
document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });
    //
    //
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginform.addEventListener("submit", e => {
        e.preventDefault();
        // prefrn your ajax fetch login
        setFormMessage(loginform, "error", "invalid username/password combination");
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "username must be at least 10 characters in lenhgt")
            }
        })
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });





});


// mouse

const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";

    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 8000);

});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

    const loginBtn = document.querySelector("#btn-login");
    const signupBtn = document.querySelector("#btn-signup");

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        handleLogin();
    });

    signupBtn.addEventListener("click", (event) => {
        event.preventDefault();
        handleSignup();
    });

    const incorrectEmail = document.querySelector(".incorrect-email");
    const incorrectPassword = document.querySelector(".incorrect-password");
    const incorrectSignUpEmail = document.querySelector(".incorrect-SignupEmail");
    const incorrectSignUpPassword = document.querySelector(".incorrect-SignupPassword");
    const incorrectConfirmPassword = document.querySelector(".unmatched-password");
    const emailPattern = /^[Hh]\d+@hct\.ac\.ae$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function handleLogin() {
        const loginEmailInput = document.querySelector("#login-email");
        const passwordInput = document.querySelector("#login-pwd");
        const loginEmailValue = loginEmailInput.value;
        const passwordValue = passwordInput.value;

        incorrectEmail.textContent = "";
        incorrectPassword.textContent = "";
        loginEmailInput.style.borderColor = "";
        passwordInput.style.borderColor = "";

        if (!emailPattern.test(loginEmailValue)) {
            incorrectEmail.textContent = "Incorrect Email or ID";
            loginEmailInput.style.borderColor = "red";
            incorrectEmail.style.color = "red";
            return;
        } else if (!passwordPattern.test(passwordValue)) {
            incorrectPassword.textContent = "Incorrect Password";
            passwordInput.style.borderColor = "red";
            incorrectPassword.style.color = "red";
            return;
        }


        loginEmailInput.style.borderColor = "green";
        passwordInput.style.borderColor = "green";
    }

    function handleSignup() {
        const signupEmailInput = document.querySelector("#signup-email");
        const signupPasswordInput = document.querySelector("#signup-pwd");
        const confirmPasswordInput = document.querySelector("#conpwd");
        const signupEmailValue = signupEmailInput.value;
        const signupPasswordValue = signupPasswordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;


        incorrectSignUpEmail.textContent = "";
        incorrectSignUpPassword.textContent = "";
        incorrectConfirmPassword.textContent = "";
        signupEmailInput.style.borderColor = "";
        signupPasswordInput.style.borderColor = "";
        confirmPasswordInput.style.borderColor = "";

        if (!emailPattern.test(signupEmailValue)) {
            incorrectSignUpEmail.textContent = "Wrong Email Format!";
            incorrectSignUpEmail.style.fontFamily = "Arial";
            incorrectSignUpEmail.style.color = "red";
            signupEmailInput.style.border = "1px solid red";
            return;
        } else if (!passwordPattern.test(signupPasswordValue)) {
            incorrectSignUpPassword.textContent = "Incorrect Password Format";
            signupPasswordInput.style.borderColor = "red";
            incorrectSignUpPassword.style.color = "red";
            incorrectSignUpPassword.style.fontFamily = "Arial";
            incorrectSignUpPassword.style.fontSize = "12px"
            return;
        } else if (confirmPasswordValue !== signupPasswordValue) {
            incorrectConfirmPassword.textContent = "The password did not match";
            confirmPasswordInput.style.borderColor = "red";
            incorrectConfirmPassword.style.color = "red";
            return;
        }

  
        signupEmailInput.style.borderColor = "green";
        signupPasswordInput.style.borderColor = "green";
        confirmPasswordInput.style.borderColor = "green";
    }
    function bottomList(){
        const bottomListElements = document.querySelectorAll(".foot-ul > li > a");
        bottomListElements.forEach(list => {
            list.addEventListener("mouseover", function() {
                
                list.style.textDecoration = "underline";
            });
            list.addEventListener("mouseout", function() {
                
                list.style.textDecoration = "";
            });
        });
    }
    
    bottomList();
    

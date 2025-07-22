

const $ = document
const userName = $.getElementById("UserName");
const email = $.getElementById("email");
const password1 = $.getElementById("password1");
const password2 = $.getElementById("password2");
const rememberMe = $.getElementById("remember-me");
const submitBtn = $.getElementById("submit-btn");
const error = $.getElementById("error");

// submitBtn.addEventListener("click", function() {
//     if (userName.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
//         error.textContent = "لطفا اطلاعات را کامل پر کنید";
//         error.classList.remove("hidden");
//     } else {
//         error.classList.add("hidden");
//     }
// })

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (userName.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        // show error
        error.classList.remove("hidden");
        error.classList.add("flex");
        error.querySelector("div").textContent = "لطفا اطلاعات را کامل پر کنید";
        // hide error
        setTimeout(() => {
            error.classList.add("hidden");
            error.classList.remove("flex");
        }, 3500);
    } else {
        // password validation
        // حداقل 8 کاراکتر، حداقل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر خاص
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        if (!strongPassword.test(password1.value)) {
            error.classList.remove("hidden");
            error.classList.add("flex");
            error.querySelector("div").textContent = "رمز عبور باید حداقل ۸ کاراکتر، شامل حروف بزرگ، کوچک، عدد و کاراکتر خاص باشد";
            setTimeout(() => {
                error.classList.add("hidden");
                error.classList.remove("flex");
            }, 3500);
            return;
        }
        // Checking that the passwords are the same
        if (password1.value !== password2.value) {
            error.classList.remove("hidden");
            error.classList.add("flex");
            error.querySelector("div").textContent = "رمز های وارد شده شباهت ندارد";
            setTimeout(() =>{
                error.classList.add("hidden");
                error.classList.remove("flex");
            } , 3500)
            return;
        }
        // اگر همه چیز درست بود، می‌توان ادامه داد (مثلاً ارسال فرم)
    }
});
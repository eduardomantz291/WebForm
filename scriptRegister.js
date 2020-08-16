const btnRegister = document.querySelector(".btn-register");
const form = document.querySelector("form");
const name = document.querySelector("#register-name");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");
const confirmPassword = document.querySelector("#register-confirm-password");

function validate() {
  if (name.value == "") {
    btnRegister.addEventListener("click", event => {
      //event.preventDefault();
    
      const fields = [...document.querySelectorAll(".input-block input")];
    
      fields.forEach(field => {
        if (field.value === "") form.classList.add("validate-error");
      });
    
      const formError = document.querySelector(".validate-error");
      if (formError) {
        formError.addEventListener("animationend", event => {
          if (event.animationName === "nono") {
            formError.classList.remove("validate-error");
          }
        });
      }
    });
    
    return false
   }

 if (email.value == "") {
  btnRegister.addEventListener("click", event => {
    //event.preventDefault();
  
    const fields = [...document.querySelectorAll(".input-block input")];
  
    fields.forEach(field => {
      if (field.value === "") form.classList.add("validate-error");
    });
  
    const formError = document.querySelector(".validate-error");
    if (formError) {
      formError.addEventListener("animationend", event => {
        if (event.animationName === "nono") {
          formError.classList.remove("validate-error");
        }
      });
    }
  });

  return false
 }

 if (password.value == "") {
  btnRegister.addEventListener("click", event => {
    //event.preventDefault();
  
    const fields = [...document.querySelectorAll(".input-block input")];
  
    fields.forEach(field => {
      if (field.value === "") form.classList.add("validate-error");
    });
  
    const formError = document.querySelector(".validate-error");
    if (formError) {
      formError.addEventListener("animationend", event => {
        if (event.animationName === "nono") {
          formError.classList.remove("validate-error");
        }
      });
    }
  });

  return false
 }

 if (confirmPassword.value != password.value) {
    alert("A senha está incoreta ou o campo está vasio");

    btnRegister.addEventListener("click", event => {
      //event.preventDefault();
    
      const fields = [...document.querySelectorAll(".input-block input")];
    
      fields.forEach(field => {
        if (field.value === "") form.classList.add("validate-error");
      });
    
      const formError = document.querySelector(".validate-error");
      if (formError) {
        formError.addEventListener("animationend", event => {
          if (event.animationName === "nono") {
            formError.classList.remove("validate-error");
          }
        });
      }
    });
    return false
 }
}

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 25; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  const boderRadius = random(5, 50);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.borderRadius = `${boderRadius}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);
}
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
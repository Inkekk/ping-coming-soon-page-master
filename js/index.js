const form = document.querySelector("form");
const inputEmail = document.querySelector("input");
const fieldset = document.querySelector("fieldset");
const mensagemErro = document.querySelector(".mensagem-erro");

form.addEventListener("submit", valida);
inputEmail.addEventListener("blur", valida);

function valida(e) {
  e.preventDefault();

  const inputValue = inputEmail.value.trim();

  if (inputValue === "") {
    fieldset.classList.add("error");
    mensagemErro.classList.add("ativo");
    mensagemErro.textContent = "The field cannot be empty";
  } else if (!emailEhValido(inputValue)) {
    fieldset.classList.add("error");
    mensagemErro.classList.add("ativo");
    mensagemErro.textContent = "Please provide a valid email";
  } else {
    fieldset.classList.remove("error");
    mensagemErro.classList.remove("ativo");
  }
}

function emailEhValido(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
}

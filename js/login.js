let email = document.querySelector("#email");
let password = document.querySelector("#senha");
let form = document.querySelector("form");
let textForm = document.querySelector("#textForm");
let textEmail = document.querySelector("#textEmail");
let textPass = document.querySelector("#textPassword")
let textSucess = document.querySelector("#textSucess");

// Login e senha aparecem no console após a ação ser realizada com sucesso, e caso a requisição não for atendida, também.

form.addEventListener('submit' , (e) => {
    if(email.value == '' && password.value == ''){
        textForm.textContent = "Você precisa preencher todos os campos!"
        textForm.style.color = 'darkorange';
    }
    else if(
        validarEmail(email.value) === true &&
        validarSenha(password.value) === true
    ) {
        console.log (email.value);
        console.log(password.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textPass.textContent = "";
        textSucess.textContent = "Logado com sucesso!";
        textSucess.style.color = 'green';
    }
    else{
        console.log("Requisição não atendida.");
    }

    e.preventDefault()
});

email.addEventListener('keyup', () =>{
    if(validarEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser ex: abc@com.com"
        textEmail.style.color = 'red';
    }
    else {
        textEmail.textContent = '';
    }
});

password.addEventListener('keyup', () => {
    if(validarSenha(password.value) !== true) {
        textPass.textContent = "A senha deve ter no mínimo 6 caracteres, um caracter especial e um número.";
        textPass.style.color = 'red';
    }
    else{
        textPass.textContent = '';
    }
});

function validarEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validarSenha(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}
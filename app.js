(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// Função para enviar o e-mail
function enviarEmail1() {
    const form = document.getElementById("meu-formulario");
    const mensagemConfirmacao = document.querySelector(".mensagem-confirmacao");
    const errorEmail = document.getElementById("error-email");
    const email = form.elements["email"].value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!camposPreenchidos1(form)) {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se o campo de e-mail está vazio ou não é um e-mail válido
    if (!email || !isValidEmail(email)) {
        errorEmail.textContent = "Digite um e-mail válido.";
        return;
    }

    // Limpa a mensagem de erro de e-mail caso seja válido
    errorEmail.textContent = "";

    emailjs.send("service_ocl5n26", "template_7wp1s6c", {
        nome: form.elements["nome"].value,
        email: email,
        assunto: form.elements["assunto"].value,
        telefone: form.elements["telefone"].value,
        mensagem: form.elements["mensagem"].value
    }).then(
        function (response) {
            console.log("E-mail enviado com sucesso!", response);
            // Exibir a mensagem de confirmação após o envio do e-mail
            mensagemConfirmacao.style.display = "block";
            // Limpa o formulário após o envio (opcional)
            form.reset();
        },
        function (error) {
            console.log("Erro ao enviar o e-mail:", error);
            // Aqui você pode tratar o erro de envio do e-mail
        }
    );
}

// Função para verificar se o e-mail é válido
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Função para verificar se todos os campos obrigatórios estão preenchidos
function camposPreenchidos1(form) {
    const camposObrigatorios1 = ["nome", "email", "assunto", "telefone", "mensagem"];
    for (const campo of camposObrigatorios1) {
        if (!form.elements[campo].value.trim()) {
            return false;
        }
    }
    return true;
}
// Função para enviar o e-mail
function enviarEmail() {
    const form = document.getElementById("meu-formulario2");
    const mensagemConfirmacao = document.querySelector(".mensagem-confirmacao");
    const errorEmail = document.getElementById("error-email");
    const email = form.elements["email"].value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!camposPreenchidos(form)) {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se o campo de e-mail está vazio ou não é um e-mail válido
    if (!email || !isValidEmail(email)) {
        errorEmail.textContent = "Digite um e-mail válido.";
        return;
    }

    // Limpa a mensagem de erro de e-mail caso seja válido
    errorEmail.textContent = "";

    emailjs.send("service_ocl5n26", "template_g0jkzsu", {
        nome: form.elements["nome"].value,
        email: email,
        empresa: form.elements["empresa"].value,
        telefone: form.elements["telefone"].value
    }).then(
        function (response) {
            console.log("E-mail enviado com sucesso!", response);
            // Exibir a mensagem de confirmação após o envio do e-mail
            mensagemConfirmacao.style.display = "block";
            // Limpa o formulário após o envio (opcional)
            form.reset();
        },
        function (error) {
            console.log("Erro ao enviar o e-mail:", error);
            // Aqui você pode tratar o erro de envio do e-mail
        }
    );
}

// Função para verificar se o e-mail é válido
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Função para verificar se todos os campos obrigatórios estão preenchidos
function camposPreenchidos(form) {
    const camposObrigatorios = ["nome", "email", "empresa", "telefone"];
    for (const campo of camposObrigatorios) {
        if (!form.elements[campo].value.trim()) {
            return false;
        }
    }
    return true;
}
const botao = document.getElementById("entrar");

if (botao !== null) {
    botao.addEventListener("click", function(event) {

        event.preventDefault();

        if (document.getElementById("email").value === "admin@nexus.com" && document.getElementById("senha").value === "123456") {
            document.getElementById("mensagem").textContent = "Acesso Permitido";
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("mensagem").textContent = "Acesso negado";

        }
    });
}

const botaoIdentidade = document.getElementById("identidade");

if (botaoIdentidade !== null) {
    botaoIdentidade.addEventListener("click", function() {

        if (botaoIdentidade.textContent === "Ver identidade") {
            document.getElementById("informacao-identidade").textContent = "Nome: Luis\nEmail: admin@nexus.com\nStatus: Conta ativa :)";
            botaoIdentidade.textContent = "Ocultar identidade";
        } else {
            document.getElementById("informacao-identidade").textContent = "";
            botaoIdentidade.textContent = "Ver identidade";
        }
    });
}

const botaoSeguranca = document.getElementById("seguranca");

if (botaoSeguranca !== null) {
    botaoSeguranca.addEventListener("click", function() {

        if (botaoSeguranca.textContent === "Ver segurança") {
            document.getElementById("informacao-seguranca").textContent = "Nível de segurança: Alto\nMétodos de autenticação: Biometria, Token";
            botaoSeguranca.textContent = "Ocultar segurança";
        } else {
            document.getElementById("informacao-seguranca").textContent = "";
            botaoSeguranca.textContent = "Ver segurança";
        }
    });
}

const botaoAtividades = document.getElementById("atividades");

if (botaoAtividades !== null) {
    botaoAtividades.addEventListener("click", function() {

        if (botaoAtividades.textContent === "Ver atividades") {
            document.getElementById("informacao-atividades").textContent = "Últimas atividades:\n- Login realizado em 01/01/2024\n- Alteração de senha em 02/01/2024\n- Logout em 03/01/2024";
            botaoAtividades.textContent = "Ocultar atividades";
        } else {
            document.getElementById("informacao-atividades").textContent = "";
            botaoAtividades.textContent = "Ver atividades";
        }
    });
}

const botaoSair = document.getElementById("sair");

if (botaoSair !== null) {
    botaoSair.addEventListener("click", function() {
        window.location.href = "nexus.html";
    });
}

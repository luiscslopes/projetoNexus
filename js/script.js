const botao = document.getElementById("entrar");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    if (document.getElementById("email").value === "admin@nexus.com" && document.getElementById("senha").value === "123456") {
        document.getElementById("mensagem").textContent = "Acesso Permitido";
        window.location.href="dashboard.html";
    } else {
        document.getElementById("mensagem").textContent = "Acesso negado"
    }

})


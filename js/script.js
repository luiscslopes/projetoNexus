/* ==========================================================================
   LÓGICA DA TELA DE LOGIN
   ========================================================================== */
const botaoEntrar = document.getElementById("entrar");
const campoMensagem = document.getElementById("mensagem");
const senhaSalva = localStorage.getItem("senha");

if (botaoEntrar !== null) {
    botaoEntrar.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === "admin@nexus.com" && senha === senhaSalva) {
            // Estiliza a mensagem de sucesso em ciano/verde antes de redirecionar
            campoMensagem.style.color = "#00E5FF";
            campoMensagem.textContent = "Acesso Permitido! Entrando...";
            
            // Pequeno delay para o usuário ver o feedback de sucesso antes de mudar de página
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 800);
        } else {
            // Mensagem de erro (herda o vermelho #EF4444 do CSS)
            campoMensagem.style.color = "#EF4444";
            campoMensagem.textContent = "Acesso negado. Usuário ou senha incorretos.";
        }
    });
}

/* ==========================================================================
   LÓGICA DOS CARDS DO DASHBOARD
   ========================================================================== */

// Card: Minha Identidade
const botaoIdentidade = document.getElementById("identidade");
if (botaoIdentidade !== null) {
    botaoIdentidade.addEventListener("click", function() {
        // Usamos .trim() para evitar quebras por causa de espaços em branco no texto do botão
        if (botaoIdentidade.textContent.trim() === "Ver identidade") {
            document.getElementById("informacao-identidade").textContent = "Nome: Luis\nEmail: admin@nexus.com\nStatus: Conta ativa :)";
            botaoIdentidade.textContent = "Ocultar identidade";
        } else {
            document.getElementById("informacao-identidade").textContent = "";
            botaoIdentidade.textContent = "Ver identidade";
        }
    });
}

// Card: Segurança
const botaoSeguranca = document.getElementById("seguranca");
if (botaoSeguranca !== null) {
    botaoSeguranca.addEventListener("click", function() {
        if (botaoSeguranca.textContent.trim() === "Ver segurança") {
            document.getElementById("informacao-seguranca").textContent = "Nível de segurança: Alto\nMétodos de autenticação: Biometria, Token";
            botaoSeguranca.textContent = "Ocultar segurança";
        } else {
            document.getElementById("informacao-seguranca").textContent = "";
            botaoSeguranca.textContent = "Ver segurança";
        }
    });
}

// Card: Atividades Recentes
const botaoAtividades = document.getElementById("atividades");
if (botaoAtividades !== null) {
    //botaoAtividades.addEventListener("colocar", function() {}); // Mantendo o escopo limpo
    
    botaoAtividades.addEventListener("click", function() {
        if (botaoAtividades.textContent.trim() === "Ver atividades") {
            document.getElementById("informacao-atividades").textContent = "Últimas atividades:\n- Login realizado hoje\n- Alteração de segurança ativa\n- Token sincronizado";
            botaoAtividades.textContent = "Ocultar atividades";
        } else {
            document.getElementById("informacao-atividades").textContent = "";
            botaoAtividades.textContent = "Ver atividades";
        }
    });
}

/* ==========================================================================
   BOTÃO DE LOGOUT (SAIR)
   ========================================================================== */
const botaoSair = document.getElementById("sair");
if (botaoSair !== null) {
    botaoSair.addEventListener("click", function() {
        // Redireciona de volta para a tela de login
        window.location.href = "nexus.html"; 
    });
}

/* ==========================================================================
   BOTÕES DOS MENUS LATERAIS (DASHBOARD)
   ========================================================================== */
const botaoIdentidadeMenu = document.getElementById("identidade-menu");
if (botaoIdentidadeMenu !== null) {
    botaoIdentidadeMenu.addEventListener("click", function() {
        // Redireciona para a tela da identidade
        window.location.href = "identidade.html"; 
    });
}

const botaoVoltarDashboard = document.getElementById("voltar-dashboard");
if (botaoVoltarDashboard !== null) {
    botaoVoltarDashboard.addEventListener("click", function() {
        // Redireciona de volta para o dashboard
        window.location.href = "dashboard.html";
    });
}

const botaoSegurancaMenu = document.getElementById("seguranca-menu");
if (botaoSegurancaMenu != null) {
    botaoSegurancaMenu.addEventListener("click", function(){
        window.location.href = "seguranca.html"
    });
}


/* ==========================================================================
   BOTÕES DE ALTERAR SENHA
   ========================================================================== */
const botaogatilho = document.getElementById("senha");
const formNovaSenha = document.querySelector(".nova-senha");

if (botaogatilho !== null && formNovaSenha !== null) {
    botaogatilho.addEventListener("click", function() {
        // Se o formulário estiver escondido (ou não estiver como flex)
        if (formNovaSenha.style.display !== "flex") {
            formNovaSenha.style.display = "flex";    // Mostra o formulário
            botaogatilho.textContent = "Cancelar";   
            botaogatilho.style.backgroundColor = "#27272A"; 
        } else {
            formNovaSenha.style.display = "none";    // Esconde de volta
            botaogatilho.textContent = "Modificar Senha"; 
            botaogatilho.style.backgroundColor = "#1F2937"; 
        }
    });
}

const salvarNovaSenha = document.getElementById("salvar-nova-senha");
const novaSenha = document.getElementById("nova-senha");
const confirmado = document.getElementById("confirmado");
const mensagemSenha = document.getElementById("mensagem-senha");

if (salvarNovaSenha != null) {
    salvarNovaSenha.addEventListener("click", function() {

        const senhaDigitada = novaSenha.value;
        const senhaConfirmada = confirmado.value;

        if (senhaDigitada === ""){
            mensagemSenha.textContent = "A senha não pode ficar vazia."
            return;
        }

        if (senhaDigitada.length < 6){
            mensagemSenha.textContent = "A senha precisa ter pelo menos 6 caracteres."
            return;
        }

        if (senhaDigitada !== senhaConfirmada){
            mensagemSenha.textContent = "As senhas não coincidem."
            return;
        }
        mensagemSenha.textContent = "Senha confirmada!"

        localStorage.setItem("senha", senhaDigitada);
    });
}
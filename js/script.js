/* ==========================================================================
   1. NOME DINÂMICO NO CABEÇALHO DO DASHBOARD
   ========================================================================== */
function atualizarNomeUsuario() {
    const elementoNome = document.getElementById("nome-usuario-topo");
    
    if (elementoNome !== null) {
        // Busca na memória local se existe um nome salvo no cadastro
        const nomeSalvo = localStorage.getItem("nexus_nome");
        
        // Se houver dados salvos na memória, renderiza o nome do usuário
        if (nomeSalvo !== null && nomeSalvo.trim() !== "") {
            const primeiroNome = nomeSalvo.split(" ")[0]; 
            elementoNome.textContent = primeiroNome;
        } else {
            // Caso tenha entrado com o login estático admin@nexus.com
            elementoNome.textContent = "Admin";
        }
    }
}

// Executa imediatamente ao carregar o DOM da página
document.addEventListener("DOMContentLoaded", atualizarNomeUsuario);

// Força a execução caso a página já tenha sido carregada pelo histórico/cache
if (document.readyState === "complete" || document.readyState === "interactive") {
    atualizarNomeUsuario();
}

/* ==========================================================================
   2. ATUALIZAR DADOS NA TELA INTERNA DE IDENTIDADE
   ========================================================================== */
function atualizarIdentidade() {
    const elementoNome = document.getElementById("nome-identidade");
    const elementoEmail = document.getElementById("email-identidade");

    const nomeSalvo = localStorage.getItem("nexus_nome");
    const emailSalvo = localStorage.getItem("nexus_email");

    if (elementoNome !== null) {
        // Se não houver cadastro, exibe Luis (padrão admin)
        elementoNome.textContent = (nomeSalvo !== null && nomeSalvo !== "") ? nomeSalvo : "Luis";
    }
    
    if (elementoEmail !== null) {
        // Se não houver cadastro, exibe admin@nexus.com
        elementoEmail.textContent = (emailSalvo !== null && emailSalvo !== "") ? emailSalvo : "admin@nexus.com";
    }
}

document.addEventListener("DOMContentLoaded", atualizarIdentidade);
if (document.readyState === "complete" || document.readyState === "interactive") {
    atualizarIdentidade();
}

/* ==========================================================================
   3. LÓGICA DA TELA DE LOGIN 
   ========================================================================== */
const botaoEntrar = document.getElementById("entrar");
const campoMensagem = document.getElementById("mensagem");

if (botaoEntrar !== null) {
    botaoEntrar.addEventListener("click", function(event) {
        event.preventDefault();

        const emailDigitado = document.getElementById("email").value.trim();
        const senhaDigitada = document.getElementById("senha").value;

        // Busca se existe algum usuário salvo na memória do localStorage
        const emailCadastrado = localStorage.getItem("nexus_email");
        const senhaCadastrada = localStorage.getItem("nexus_senha");

        // Valida se bate com o admin padrão OU com o usuário recém-cadastrado
        if (
            (emailDigitado === "admin@nexus.com" && senhaDigitada === "123456") ||
            (emailDigitado === emailCadastrado && senhaDigitada === senhaCadastrada && emailCadastrado !== null)
        ) {

            registrarAtividade("Login realizado");

            campoMensagem.style.color = "#00E5FF";
            campoMensagem.textContent = "Acesso Permitido! Entrando...";
            
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 800);
        } else {
            campoMensagem.style.color = "#EF4444";
            campoMensagem.textContent = "Acesso negado. Usuário ou senha incorretos.";
        }
    });
}

/* ==========================================================================
   4. LÓGICA DOS CARDS DO DASHBOARD (EFEITOS OCULTAR/MOSTRAR TEXTO)
   ========================================================================== */

// Card: Minha Identidade
const botaoIdentidade = document.getElementById("identidade");
if (botaoIdentidade !== null) {
    botaoIdentidade.addEventListener("click", function() {
        if (botaoIdentidade.textContent.trim() === "Ver identidade") {
            let nomeSalvo = localStorage.getItem("nexus_nome");
            let emailSalvo = localStorage.getItem("nexus_email");

            // Se for o admin logado, preenche com as credenciais padrão do admin
            if (nomeSalvo === null || nomeSalvo === "") nomeSalvo = "Luis";
            if (emailSalvo === null || emailSalvo === "") emailSalvo = "admin@nexus.com";

            document.getElementById("informacao-identidade").textContent =
                "Nome: " + nomeSalvo +
                "\nEmail: " + emailSalvo +
                "\nStatus: Conta ativa :)";
            botaoIdentidade.textContent = "Ocultar identidade";
        } else {
            document.getElementById("informacao-identidade").textContent = "";
            botaoIdentidade.textContent = "Ver identidade";
        }
    });
}

// Card: Segurança ( do CARD e não do MENU)
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
   5. BOTÃO DE LOGOUT (SAIR)
   ========================================================================== */
const botaoSair = document.getElementById("sair");
if (botaoSair !== null) {
    botaoSair.addEventListener("click", function() {
        window.location.href = "nexus.html"; 
    });
}

/* ==========================================================================
   6. NAVEGAÇÃO DOS MENUS LATERAIS (SIDEBAR) & BOTÕES VOLTAR
   ========================================================================== */

// Clique no menu lateral "Minha Identidade" -> Vai para identidade.html
const botaoIdentidadeMenu = document.getElementById("identidade-menu");
if (botaoIdentidadeMenu !== null) {
    botaoIdentidadeMenu.addEventListener("click", function() {
        registrarAtividade("Identidade acessada");
        window.location.href = "identidade.html"; 
    });
}

// Clique no menu lateral "Segurança" -> Vai para seguranca.html
const botaoSegurancaMenu = document.getElementById("seguranca-menu");
if (botaoSegurancaMenu !== null) {
    botaoSegurancaMenu.addEventListener("click", function() {
        window.location.href = "seguranca.html"; 
    });
}

// Clique no menu lateral "Atividades" -> Vai para atividades.html
const botaoAtividadesMenu = document.getElementById("atividades-menu");
if (botaoAtividadesMenu !== null) {
    botaoAtividadesMenu.addEventListener("click", function() {
        registrarAtividade("Atividades acessadas")
        window.location.href = "atividades.html"; 
    });
}

// Comportamento do botão "Voltar para o Dashboard" nas subpáginas (Identidade/Segurança)
const botaoVoltarDashboard = document.getElementById("voltar-dashboard");
if (botaoVoltarDashboard !== null) {
    botaoVoltarDashboard.addEventListener("click", function() {
        window.location.href = "dashboard.html";
    });
}

// Botão "Voltar para o Dashboard" da tela de Atividades
const botaoVoltarAtividades = document.getElementById("atividade-voltar-dashboard");
if (botaoVoltarAtividades !== null) {
    botaoVoltarAtividades.addEventListener("click", function() {
        window.location.href = "dashboard.html";
    });
}

/* ==========================================================================
   7. FORMULÁRIO DE ALTERAÇÃO DE SENHA (TELA DE SEGURANÇA)
   ========================================================================== */
const botaogatilho = document.getElementById("senha");
const formNovaSenha = document.querySelector(".nova-senha");

if (botaogatilho !== null && formNovaSenha !== null) {
    botaogatilho.addEventListener("click", function() {
        // Se o formulário estiver escondido, mostra como flex. Se não, esconde de volta.
        if (formNovaSenha.style.display !== "flex") {
            formNovaSenha.style.display = "flex";    
            botaogatilho.textContent = "Cancelar";   
            botaogatilho.style.backgroundColor = "#27272A"; 
        } else {
            formNovaSenha.style.display = "none";    
            botaogatilho.textContent = "Modificar senha"; 
            botaogatilho.style.backgroundColor = "#1F2937"; 
        }
    });
}

const salvarNovaSenha = document.getElementById("salvar-nova-senha");
const novaSenha = document.getElementById("nova-senha");
const confirmado = document.getElementById("confirmado");
const mensagemSenha = document.getElementById("mensagem-senha");

if (salvarNovaSenha !== null) {
    salvarNovaSenha.addEventListener("click", function() {
        const senhaDigitada = novaSenha.value;
        const senhaConfirmada = confirmado.value;

        if (senhaDigitada === "") {
            mensagemSenha.style.color = "#EF4444";
            mensagemSenha.textContent = "A senha não pode ficar vazia.";
            return;
        }

        if (senhaDigitada.length < 6) {
            mensagemSenha.style.color = "#EF4444";
            mensagemSenha.textContent = "A senha precisa ter pelo menos 6 caracteres.";
            return;
        }

        if (senhaDigitada !== senhaConfirmada) {
            mensagemSenha.style.color = "#EF4444";
            mensagemSenha.textContent = "As senhas não coincidem.";
            return;
        }

        // 🌟 Salvando na chave correta para o login ler na próxima vez!
        localStorage.setItem("nexus_senha", senhaDigitada);
        registrarAtividade("Senha alterada")

        mensagemSenha.style.color = "#00E5FF";
        mensagemSenha.textContent = "Senha alterada com sucesso!";

        // Limpa os campos de input
        novaSenha.value = "";
        confirmado.value = "";

        // Fecha o painel automaticamente após 1.5 segundos de sucesso
        setTimeout(() => {
            if (formNovaSenha !== null && botaogatilho !== null) {
                formNovaSenha.style.display = "none";
                botaogatilho.textContent = "Modificar senha";
                botaogatilho.style.backgroundColor = "#1F2937";
            }
            mensagemSenha.textContent = "";
        }, 1500);
    });
}

/* ==========================================================================
   8. LÓGICA DA TELA DE CADASTRO
   ========================================================================== */
const btnRegistrar = document.getElementById("btn-registrar");
const msgCadastro = document.getElementById("mensagem-cadastro");

if (btnRegistrar !== null) {
    btnRegistrar.addEventListener("click", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar-senha").value;

        if (nome === "" || email === "" || senha === "") {
            msgCadastro.style.color = "#EF4444";
            msgCadastro.textContent = "Por favor, preencha todos os campos.";
            return;
        }

        if (senha !== confirmarSenha) {
            msgCadastro.style.color = "#EF4444";
            msgCadastro.textContent = "As senhas não coincidem!";
            return;
        }

        // Salva os dados na memória do navegador
        localStorage.setItem("nexus_email", email);
        localStorage.setItem("nexus_senha", senha);
        localStorage.setItem("nexus_nome", nome);

        msgCadastro.style.color = "#00E5FF";
        msgCadastro.textContent = "Cadastro realizado com sucesso! Redirecionando...";

        setTimeout(() => {
            window.location.href = "nexus.html"; // Manda de volta para o login
        }, 1500);
    });
}

/* ==========================================================================
   9. LÓGICA DE PERIGO: EXCLUIR CONTA DO USUÁRIO
   ========================================================================== */
const botaoExcluir = document.getElementById("excluir-conta");

if (botaoExcluir !== null) {
    botaoExcluir.addEventListener("click", function() {
        const confirmou = confirm("ATENÇÃO: Você tem certeza que deseja excluir sua conta do NEXUS? Todos os seus dados serão apagados permanentemente.");
        
        if (confirmou) {
            // Apaga tudo o que foi gravado
            localStorage.clear();
            
            alert("Sua conta foi removida com sucesso. Redirecionando para a tela inicial...");
            window.location.href = "nexus.html";
        }
    });
}

/* ==========================================================================
   10. LÓGICA: TELA ATIVIDADES
   ========================================================================== */

const atividadesSalvas = localStorage.getItem("atividades");

const atividades = atividadesSalvas
    ? JSON.parse(atividadesSalvas)
    : [];

const grupoAtividade = document.getElementById("grupo-atividade");
const agora = new Date();
const dia = agora.getDate();
const ano = agora.getFullYear(); 
const mesAtual = agora.getMonth() + 1;

const mesFormatado = mesAtual.toString().padStart(2, "0");
const diaFormatado = dia.toString().padStart(2, "0");
const dataFormatada = diaFormatado + "/" + mesFormatado + "/" + ano;

if (grupoAtividade !== null) {

    atividades.forEach(function(atividade) {

        const novoItem = document.createElement("div");
        const titulo = document.createElement("h3");
        const data = document.createElement("h4");

        titulo.textContent = atividade;
        data.textContent = dataFormatada;

        novoItem.appendChild(titulo);
        novoItem.appendChild(data);

        grupoAtividade.appendChild(novoItem);

    });

}

function registrarAtividade(atividade) {
    atividades.push(atividade);
    localStorage.setItem("atividades", JSON.stringify(atividades));
}
const BASE_URL = "http://localhost:3010/api";

// REGISTRO
async function registrar() {
  const login = document.getElementById('registerLogin').value;
  const senha = document.getElementById('registerSenha').value;

  // Validação simples
  if (!login || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Usuário cadastrado com sucesso!");
      // Limpar campos após sucesso
      document.getElementById('registerLogin').value = '';
      document.getElementById('registerSenha').value = '';
    } else {
      alert("Erro no cadastro: " + data.erro);
    }
  } catch (error) {
    alert("Erro de conexão com o servidor!");
  }
}

// LOGIN
async function logar() {
  const login = document.getElementById('loginLogin').value;
  const senha = document.getElementById('loginSenha').value;

  // Validação simples
  if (!login || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha })
    });

    const data = await res.json();
    if (res.ok) {
      document.getElementById('token').value = data.token;
      
      // Salvar dados do usuário para usar na página adm
      localStorage.setItem('token', data.token);
      localStorage.setItem('userData', JSON.stringify({
        login: login,
        loginTime: new Date().toLocaleString('pt-BR')
      }));
      
    //   alert("Login realizado com sucesso!");
      window.location.href = "adm.html";
    } else {
      alert("Erro ao logar: " + data.erro);
    }
  } catch (error) {
    alert("Erro de conexão com o servidor!");
  }
}
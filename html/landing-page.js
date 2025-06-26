document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
      } else {
        alert("Mensagem enviada com sucesso!");
      }
    });
  }
});



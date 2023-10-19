document.addEventListener("DOMContentLoaded", function () {
    fetch("botao_voltar.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (menuHtml) {
        document.getElementById("botao_voltar").innerHTML = menuHtml;
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltar = document.getElementById('botao_voltar');

    if (botaoVoltar) {
        botaoVoltar.addEventListener('click', function () {
            window.history.back();
        });
    }
});
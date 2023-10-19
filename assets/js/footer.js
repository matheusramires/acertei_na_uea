document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (menuHtml) {
        document.getElementById("secao-rodape").innerHTML = menuHtml;
      });
  });
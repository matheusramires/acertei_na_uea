document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (menuHtml) {
        document.getElementById("header-container").innerHTML = menuHtml;
      });
  });
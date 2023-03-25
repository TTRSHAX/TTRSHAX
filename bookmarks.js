//full

javascript: (function () {
  document.title = "TTRS HAX";

  fetch("https://ttrshax.github.io/scripts/html?" + Date.now())
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

  var script = document.createElement("script");
  script.src = "https://ttrshax.github.io/scripts/srcipt.js?" + Date.now();
  script.type = "application/javascript";
  document.body.appendChild(script);
})();

//just html
javascript: (function () {
  document.title = "TTRS HAX";

  fetch("https://ttrshax.github.io/scripts/html?" + Date.now())
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
    });})

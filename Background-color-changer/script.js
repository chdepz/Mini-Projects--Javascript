const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "lunada") {
      body.style.background = ` linear-gradient(
                to right,
                #a5fecb,
                #20bdff,
                #5433ff
              )`;
    body.style.color = "#fff"
    }
    if (e.target.id === "grade-grey") {
      body.style.background = `linear-gradient(
                to right,
                #2c3e50,
                #bdc3c7
              )`;
              body.style.color = "#fff"
    }
    if (e.target.id === "celestial") {
      body.style.background = ` linear-gradient(
                to right,
                #1d2671,
                #c33764
              )`;
              body.style.color = "#fff"
    }
    if (e.target.id === "nepal") {
      body.style.background = `linear-gradient(
                to right,
                #2657eb,
                #de6161
              )`;
              body.style.color = "#fff"
    }
    if (e.target.id === "wiretap") {
      body.style.background = `linear-gradient(
                to right,
                #f27121,
                #e94057,
                #8a2387
              )`;
              body.style.color = "#fff"
    }
    if (e.target.id === "moonlit-asteroid") {
      body.style.background = `linear-gradient(
                to right,
                #2c5364,
                #203a43,
                #0f2027
              )`;
              body.style.color = "#fff"
    }
  });
});

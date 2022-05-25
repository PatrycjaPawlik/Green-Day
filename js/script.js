{
  const hello = () => {
    console.log("Hello");
  };

  const toggleBackgroundColor = () => {
    const body = document.querySelector(".body");
    const bodyColor = document.querySelector(".js-bodyColor");

    body.classList.toggle("white");
    if (body.classList.contains("white")) {
      bodyColor.innerText = "zielone";
    } else {
      bodyColor.innerText = "białe";
    }
  }

  const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", toggleBackgroundColor);
  }

  hello ();

  init ();
}
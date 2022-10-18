window.onload = () => {
  const button = document.getElementById("button");

  button.onclick = () => {
    const main = document.getElementById("main");
    main.classList.add("mainDark");
    const section5 = document.getElementById("section5");
    section5.classList.add("containerPopUpShow");
    const x = document.getElementById("x");
    x.onclick = () => {
      section5.classList.remove("containerPopUpShow");
      main.classList.remove("mainDark");
    };
  };
};

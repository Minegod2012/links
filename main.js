const text = document.querySelector(".clipboard");
const popup = document.querySelector(".popup");

text.addEventListener("click", () => {
  popup.classList.add("active");
  copyToClipBoard();
});
popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

navigator.clipboard.writeText("Minegod2012#2859").then(() => {
    function copyToClipBoard() {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("readonly", "");
        textarea.value = text.innerText;
        textarea.style.position = "absolute";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      
  },() => {

  });
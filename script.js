const addBtn = document.getElementById("btn");
const haxCode = document.getElementById("code");

function changeText() {
  const red = Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  const color = `#${red}${green}${blue}`;
  document.body.style.background = color;
  haxCode.innerText = color;
}

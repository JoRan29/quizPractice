// Modul result_div.js

let createDiv = (cls, parent, whereChild) => {
  let divOdg = document.createElement("div");
  divOdg.classList.add(cls);
  let text = document.createElement("div");
  text.classList.add("text");
  let h2 = document.createElement("h2");
  text.appendChild(h2);
  divOdg.appendChild(text);
  document.parent.insertBefore(divOdg, whereChild);
  divOdg.style.display = "none";
  return [divOdg, h2];
};

export default createDiv;

import createDiv from "./modules/result_div.js";
import { tacniOdgovori, calculateScore } from "./modules/answers.js";
import calculateScore from "./modules/clock.js";
import generateScore from "./modules/clock.js";

let form = document.querySelector("form");
// Prebaceno u answers.js
// let tacniOdgovori = ["B", "A", "B", "B", "B", "A"];

let [divOdg, h2] = createDiv("intro", document.body, document.body.children[1]);

// prebaceno u modul result_div
// let divOdg = document.createElement("div");
// divOdg.classList.add("intro");
// let text = document.createElement("div");
// text.classList.add("text");
// let h2 = document.createElement("h2");
// text.appendChild(h2);
// divOdg.appendChild(text);

// let whereChild = document.body.children[1];
// document.body.insertBefore(divOdg, whereChild);
// divOdg.style.display = "none";

form.addEventListener("submit", event => {
  // Spreci default ponasanje (slanje informacije na server)
  event.preventDefault();
  // Odredi koji radio button je selektovan - Generalni nacin
  /* let radios = document.querySelectorAll(".q1");
        radios.forEach(r => {
          if (r.checked) {
            console.log(r.value);
          }
        }); */
  // Za formu je lakse ovako - 1. U JS kodu imati objekat form
  // 2. Svi elem. forme u HTML-u moraju da imaju name attribute
  // Uhvati form preko querySel, onda preko nje selektuj name(q1) pa onda i value
  let odg1 = form.q1.value; // value checkiranog radio button-a
  let odg2 = form.q2.value;
  let odg3 = form.q3.value;
  let odg4 = form.q4.value;
  let odg5 = form.q5.value;
  let odg6 = form.q6.value;
  let odg7 = form.nick.value;
  // console.log(odg1, odg2, odg3, odg4, odg5);
  let odgovori = [odg1, odg2, odg3, odg4, odg5, odg6];
  let score = calculateScore(odgovori, odg7);
  //   let score = 0;
  //   odgovori.forEach((odgovor, index) => {
  //     if (odgovor == tacniOdgovori[index]) {
  //       score += 14.28;
  //     }
  //   });
  //   console.log(form.nick.value);
  //   if (odg7.length > 5) {
  //     score += 12.28;
  //   }
  //   console.log(score);
  //   h2.textContent = `Vas odgovor je: ${score}%`;
  divOdg.style.display = "block";
  scrollTo(0, 0); // Za vracanje na pocetak strane
  //   let broj = 0;
  //   let clock = setInterval(() => {
  //     h2.textContent = `${odg7}, Vas odgovor je: ${broj}%`;
  //     if (broj < score) {
  //       broj++;
  //     } else {
  //       clearInterval(clock);
  //     }
  //   }, 25);
  generateScore(h2, score);
});

// Moudul answer.js

let tacniOdgovori = ["B", "A", "B", "B", "B", "A"];

let calculateScore = (odgovori, odg7) => {
  let score = 0;
  odgovori.forEach((odgovor, index) => {
    if (odgovor == tacniOdgovori[index]) {
      score += 12.28;
    }
  });
  console.log(form.nick.value);
  if (odg7.length > 5) {
    score += 12.28;
  }
  console.log(score);
  return score;
};

export { tacniOdgovori, calculateScore };

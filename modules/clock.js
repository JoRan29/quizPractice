// Modul clock.js

let generateScore = (h2, score) => {
  let broj = 0;
  let clock = setInterval(() => {
    h2.textContent = `${odg7}, Vas odgovor je: ${broj}%`;
    if (broj < score) {
      broj++;
    } else {
      clearInterval(clock);
    }
  }, 25);
};

export default generateScore;

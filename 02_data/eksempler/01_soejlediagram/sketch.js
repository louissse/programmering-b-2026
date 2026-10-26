// Opdigtede temperaturer i °C fra mandag til søndag.
let temperaturer = [12, 16, 14, 20, 18, 15, 11];

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(245);

  // Fælles bundlinje for søjlerne.
  let bund = height - 40;
  stroke(100);
  line(30, bund, width - 30, bund);
  noStroke();

  for (let i = 0; i < temperaturer.length; i++) {
    let x = 50 + i * 85;
    let soejleHoejde = temperaturer[i] * 12;

    fill(70, 110, 160);
    rect(x, bund - soejleHoejde, 50, soejleHoejde);
  }
}

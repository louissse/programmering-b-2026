// Et array med to objekter. Hvert objekt beskriver én måling.
let maalinger = [
  { navn: "Mandag", vaerdi: 30, enhed: "minutter med musik" },
  { navn: "Tirsdag", vaerdi: 65, enhed: "minutter med musik" }
];

function setup() {
  createCanvas(650, 260);
  textSize(24);
}

function draw() {
  background(245);
  fill(30);

  // Indeks 0 vælger det første objekt. Prøv at ændre 0 til 1.
  let maaling = maalinger[0];

  // Punktnotation henter et felt fra objektet.
  text("Navn: " + maaling.navn, 30, 60);
  text("Værdi: " + maaling.vaerdi, 30, 120);
  text("Enhed: " + maaling.enhed, 30, 180);
}

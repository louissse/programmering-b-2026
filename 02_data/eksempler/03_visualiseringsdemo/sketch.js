// Ét objekt pr. dag. Alle visninger bruger det samme array.
let maalinger = [
  { navn: "Man", vaerdi: 30, farve: "#ff6b59" },
  { navn: "Tir", vaerdi: 65, farve: "#f2ac3e" },
  { navn: "Ons", vaerdi: 45, farve: "#96c66b" },
  { navn: "Tor", vaerdi: 90, farve: "#48b8aa" },
  { navn: "Fre", vaerdi: 120, farve: "#5b9fdf" },
  { navn: "Lør", vaerdi: 160, farve: "#a28bde" },
  { navn: "Søn", vaerdi: 50, farve: "#dd89b5" }
];
let visning = "Søjler";
let forklaring;

function setup() {
  let laerred = createCanvas(840, 440);
  laerred.parent("diagram");
  textFont("monospace");
  textAlign(CENTER, CENTER);
  textSize(18);
  angleMode(DEGREES);
  noLoop(); // Tegn kun igen, når vi vælger en visning.

  // p5.js kan også oprette knapper og ændre tekst på HTML-siden.
  let soejleKnap = createButton("Søjler");
  soejleKnap.parent("knapper");
  soejleKnap.mousePressed(function () {
    visning = "Søjler";
    redraw();
  });

  let bobleKnap = createButton("Bobler");
  bobleKnap.parent("knapper");
  bobleKnap.mousePressed(function () {
    visning = "Bobler";
    redraw();
  });

  let hjulKnap = createButton("Ugehjul");
  hjulKnap.parent("knapper");
  hjulKnap.mousePressed(function () {
    visning = "Ugehjul";
    redraw();
  });

  forklaring = select("#forklaring");
}

function draw() {
  background("#fffdf7");

  if (visning === "Søjler") {
    tegnSoejler();
    forklaring.html("Søjler: Højden viser minutter. 1 minut fylder 2 pixels.");
  } else if (visning === "Bobler") {
    tegnBobler();
    forklaring.html("Bobler: Arealet viser minutter. Kvadratroden sikrer, at dobbelt så mange minutter giver dobbelt så stort areal.");
  } else {
    tegnUgehjul();
    forklaring.html("Ugehjul: Hver dag har sin retning. Længden af den farvede stråle viser minutter fra den indre ring og ud.");
  }
}

function tegnSoejler() {
  for (let i = 0; i < maalinger.length; i++) {
    let maaling = maalinger[i];
    let x = 35 + i * 115;
    let hoejde = maaling.vaerdi * 2;

    noStroke();
    fill(maaling.farve);
    rect(x, 370 - hoejde, 70, hoejde, 6);
    fill("#22242a");
    text(maaling.vaerdi, x + 35, 350 - hoejde);
    text(maaling.navn, x + 35, 400);
  }
}

function tegnBobler() {
  for (let i = 0; i < maalinger.length; i++) {
    let maaling = maalinger[i];
    let x = 70 + i * 115;
    // Arealet afhænger af diameteren i anden potens. Derfor bruger vi sqrt().
    let diameter = sqrt(maaling.vaerdi) * 8;

    noStroke();
    fill(maaling.farve);
    circle(x, 210, diameter);
    fill("#22242a");
    text(maaling.vaerdi, x, 310);
    text(maaling.navn, x, 345);
  }
}

function tegnUgehjul() {
  noFill();
  stroke("#dddddd");
  strokeWeight(1);
  circle(420, 220, 90);

  for (let i = 0; i < maalinger.length; i++) {
    let maaling = maalinger[i];
    let vinkel = i * 360 / maalinger.length - 90;
    let laengde = maaling.vaerdi * 0.7;

    // Flyt centrum, og drej koordinaterne til dagens retning.
    // push() og pop() sørger for, at næste dag starter med sine egne koordinater.
    push();
    translate(420, 220);
    rotate(vinkel);
    stroke(maaling.farve);
    strokeWeight(18);
    strokeCap(SQUARE);
    line(45, 0, 45 + laengde, 0);

    // Flyt teksten ud, og drej den tilbage, så den kan læses vandret.
    translate(190, 0);
    rotate(-vinkel);
    noStroke();
    fill("#22242a");
    text(maaling.navn + "\n" + maaling.vaerdi, 0, 0);
    pop();
  }
}

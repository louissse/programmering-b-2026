// Skift til et andet navn eller nummer, fx "eevee" eller "1".
let pokemonNavn = "pikachu";
let pokemon;
let billede;

async function setup() {
  createCanvas(360, 440);
  textFont("sans-serif");
  background(235, 241, 248);
  fill(35, 45, 65);
  textSize(18);
  text("Henter Pokémon ...", 30, 50);

  noLoop(); // draw() tegner kun én gang, når setup() er færdig.

  // await venter på dataene, før funktionen fortsætter.
  pokemon = await loadJSON("https://pokeapi.co/api/v2/pokemon/" + pokemonNavn);
  console.log(pokemon);

  // JSON indeholder en billedadresse. Selve billedet hentes bagefter.
  billede = await loadImage(pokemon.sprites.front_default);

}

function draw() {
  background(235, 241, 248);
  noStroke();
  fill(255);
  rect(20, 20, 320, 400, 20);
  fill(35, 45, 65);
  textSize(30);
  text(pokemon.name, 40, 70);
  textSize(16);
  text("Nr. " + pokemon.id, 40, 100);
  image(billede, 84, 115, 192, 192);

  // PokéAPI angiver vægt i hektogram. Vi viser kilogram.
  textSize(20);
  text("Vægt: " + pokemon.weight / 10 + " kg", 40, 350);
  textSize(14);
  text("Data fra PokéAPI", 40, 390);
}

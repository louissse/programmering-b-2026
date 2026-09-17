# Arbejdsgrundlag

## Formål og målgruppe

Repositoryet er undervisningssite og materialebank for Programmering B 2026.
Målgruppen er gymnasieelever med forskellige programmeringserfaringer. De skal
møde kode roligt, konkret og eksperimenterende. De første aktiviteter foregår
primært i p5.js Web Editor.

Skriv elevvendt tekst på dansk. Bevar engelske fagtermer, funktionsnavne og
API-navne, når det gør kode og dokumentation lettere at genkende.

## Repository og hjemmeside

- Det primære repository er `programmering-b-2026`.
- `../progC-19-20` og `../programmeringC-2020` må bruges som inspiration, men
  må ikke redigeres uden udtrykkelig besked. Kontrollér altid gamle links,
  biblioteker, værktøjer, sprog og fagligt niveau, før noget genbruges.
- GitHub Pages publicerer fra `main` og repositoryets rod.
- Bevar siden som enkel statisk HTML og CSS uden framework, pakkehåndtering
  eller build-trin, medmindre et konkret behov er aftalt.
- `index.html` er forsiden, og `main.css` rummer det fælles visuelle udtryk.
- Bevar designretningen: Roboto Mono, sort/grå palette, god luft, tydelige
  overskrifter og diskrete understregede links.
- Nye sider skal være responsive, semantiske og tastaturvenlige. Brug relative
  interne links, så de virker lokalt og under `/programmering-b-2026/`.

## Undervisningsmaterialer

Saml nye forløb i nummererede mapper som `01_intro/` og `02_p5js/`, når der er
behov for selvstændige filer. Hold elevmateriale, startkode, løsninger og
lærerkommentarer tydeligt adskilt. Læg ikke løsninger eller lærerkommentarer
offentligt uden at afklare det med brugeren.

Et forløb bør:

- begynde med et forståeligt læringsmål;
- bestå af små trin, der kan afprøves løbende;
- give hurtig visuel feedback og plads til personlige variationer;
- rumme en basisopgave og relevante ekstra udfordringer;
- forklare nye begreber i almindeligt sprog før formel terminologi;
- understøtte progression mod mere selvstændigt og systematisk arbejde.

Brug faggrundlaget og den lokale `plan-undervisning`-skill, når et forløb skal
planlægges eller vurderes. Kontrollér aktuelle p5.js-funktioner og eksterne links
mod primære, officielle kilder.

## Arbejdsgang og færdigkriterier

Læs eksisterende materiale og `git status` før ændringer. Bevar brugerens egne
og uvedkommende ændringer, og foretag den mindste sammenhængende ændring, der
løser opgaven. Commit, push og publicering kræver en udtrykkelig anmodning.

En ændring er færdig, når elevteksten er forståelig og korrekt, relevante
kodeeksempler er kontrolleret, interne links virker, layoutet følger det fælles
udtryk, og navigation samt rodens `README.md` er opdateret, hvis strukturen er
ændret. Ved designændringer kontrolleres både smal og bred visning, når visuel
browsertest indgår i opgaven.

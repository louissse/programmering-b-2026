# Objekter og JSON med p5.js

Hent repositoryet fra GitHub, og åbn denne mappe i VS Code.
Start `index.html` med Live Server. p5.js hentes fra et CDN, så siden kræver internet.

## Undersøg skitsen

`sketch.js` indeholder et array med to opdigtede målinger.
Et objekt samler navn, værdi og enhed for én måling.

I `draw()` vælger `maalinger[0]` det første objekt.
Punktnotation henter felterne, som `text()` viser på lærredet.

1. Skift indekset fra 0 til 1. Hvilke oplysninger ændrer sig?
2. Ret en værdi i arrayet, og se resultatet.
3. Tilføj et tredje objekt, og vælg det med det rigtige indeks.

## Sammenlign med JSON

`maalinger.json` indeholder de samme data som arrayet i `sketch.js`.
JSON er tekst med data. Feltnavne og tekst står i dobbelte anførselstegn.
JSON har hverken kommentarer eller variabeldeklarationer.

Skitsen læser objekterne i `sketch.js`. Indlæsning fra JSON-filen kommer senere.

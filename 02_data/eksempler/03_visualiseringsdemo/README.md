# En uge i musik

De samme syv opdigtede målinger vises som søjler, bobler eller et ugehjul.
Skift visning med knapperne. Farven følger dagen.

Hent repositoryet fra GitHub, og åbn denne mappe i VS Code.
Start `index.html` med Live Server. p5.js hentes fra et CDN, så siden kræver internet.

## Læs koden

- `maalinger` er et array af objekter med dag, værdi og farve. Enheden er minutter.
- `setup()` opretter lærred og knapper med p5.js.
- Knappernes `mousePressed()` ændrer `visning` og beder `redraw()` om at tegne igen.
- `draw()` vælger en tegnefunktion med `if/else` og opdaterer forklaringen med `html()`.
- Hver tegnefunktion har sit eget loop, der læser objekterne i arrayet.

Begynd med `tegnSoejler()`. Se derefter `tegnBobler()`, hvor `circle()`
bruges i stedet for `rect()`. Boblernes areal følger værdien, så diameteren
beregnes med `sqrt()`.

`tegnUgehjul()` er en ekstra udfordring. Den bruger `translate()` og `rotate()`
til at placere dagene rundt om et centrum. Strålernes længde følger værdien.
`push()` og `pop()` holder hver dags koordinater og tegnestil adskilt.

Tallene kan ændres i arrayet øverst i `sketch.js`.
Søjler og ugehjul bruger en fast skala, som er valgt til disse data.
Meget større værdier kræver, at du tilpasser skalaen.

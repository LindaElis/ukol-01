const meno = prompt("Zadaj meno bez diakritiky: ")
const priezvisko = prompt("Zadaj priezvisko bez diakritiky: ")
const upravaMena = meno.trim()
const upravaPriezviska = priezvisko.trim()
const vyberPismenMena = upravaMena.slice(0,3)
const vyberPismenPriezviska = upravaPriezviska.slice(0,5)
const finalMeno = vyberPismenPriezviska + vyberPismenMena
const malePismena = finalMeno.toLowerCase()


document.body.innerHTML += `
<p>Student, ktorý ma meno: ${meno} a priezvisko: ${priezvisko}</p>
<p>Je mu vygenerovany email: ${malePismena.padEnd(20,"@fit.cvut.cz")}</p>
`




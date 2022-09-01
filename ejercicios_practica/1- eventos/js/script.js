"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log

*/

const boton = document.querySelector("button");

/* boton.addEventListener("click", () => {
    console.log("Respuesta evento click");
    boton.className = "btnClick";
})
 */
boton.onclick = () => {
    console.log("Respuesta evento click");
    boton.className = "btnClick";
}

/* boton.addEventListener("mouseover", () => {
    console.log("Respuesta evento mouseover");
    boton.className = "btnOver";
}) */

boton.onmouseover = () => {
    console.log("Respuesta evento mouseover");
    boton.className = "btnOver";
}

/* boton.addEventListener("mouseout", () => {
    console.log("Respuesta evento mouseout");
    boton.className = "btnOut";
}) */

boton.onmouseout = () => {
    console.log("Respuesta evento mouseout");
    boton.className = "btnOut";
}

/* 2 - Enunciado

Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.
*/

const select = document.querySelector('select');
select.onchange = () => {
    let eleccion = select.value;

    if (eleccion === 'efectivo') {
        console.log("efectivo");
    } else if (eleccion === 'transferencia') {
        console.log("transferencia");
    } else {
        console.log("tarjeta")
    }
}

/* 3 - Enunciado

Cree un evento que capture cuando haya finalizado de ingresas
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.

*/
const articulo = document.querySelector('article');
const text = document.querySelector('input');
text.onchange = () => {
    alert('El texto es:' + text.value)
}

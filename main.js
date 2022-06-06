const nombres = [];
const dineros = [];


function agregarPersona() {
    let nombre = document.getElementById(`nombre`).value;
    nombres.push(nombre);

    let dinero = document.getElementById(`dinero`).value;
    dineros.push(dinero);

    document.getElementById("tabla").insertRow(-1).innerHTML = `<td>${nombre}</td><td>${dinero}</td>`;

    let total = 0;

    for (let i = 0; i < dineros.length; i++) {
        total += Number(dineros[i]);
    }

    let parcial = Math.round(total/dineros.length);


    document.getElementById("total").innerHTML = `Total: ${total}`;
    document.getElementById("parcial").innerHTML = `A cada uno le toca aportar: ${parcial}`;
    document.getElementById("nombre").value = "";
    document.getElementById("dinero").value = "";
}

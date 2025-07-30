// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = [];
let cntador = 0;

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, ingresa un nombre el campo es obligatorio!");
    }
    else if (amigosLista.includes(amigo)) {
        alert("El amigo ya está en la lista.");
    }
    else{
        amigosLista.push(amigo);

        var lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos
        for (let i = 0; i < amigosLista.length; i++) {
        
            lista.innerHTML += "<li>" + amigosLista[i] + "</li>";
        }
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    }
}

function sortearAmigo() {
    if (amigosLista.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    cntador = amigosLista.length;
    var ganador = amigosLista[Math.floor(Math.random() * amigosLista.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + ganador;
    amigosLista = amigosLista.filter(amigo => amigo !== ganador); // Eliminar el ganador de la lista
}
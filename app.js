//lista para almacenar nombre amigos;
listaAmigos =[];
//console.log(listaAmigos);

function agregarAmigo() {
    document.querySelector("#amigo").value.trim() ===""? alert("ingrese un nombre valido") : listaAmigos.push(document.querySelector("#amigo").value), limpiarCaja();
    mostrarListaAmigos();
    document.querySelector("#resultado").innerHTML = "";    
}

function sortearAmigo() { 
    if (listaAmigos!="") {
        let indiceGenerado =  Math.floor(Math.random()*listaAmigos.length);    
        document.querySelector("#resultado").innerHTML = `El amigo Sorteado es: ${listaAmigos[indiceGenerado]}`;
        document.querySelector("#listaAmigos").innerHTML = "";
        listaAmigos =[];
        document.querySelector(".button-draw").innerHTML = "Empezar Nuevamente";        
        document.querySelector(".button-draw").onclick = empezarDeNuevo;
        
    } else {
        alert("No se puede Realizar sorteo, no hay amigos");    
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}
function mostrarListaAmigos() {
    
    if (listaAmigos.length === 0) {
        
    } else {
        let ul = document.querySelector("#listaAmigos");
        document.querySelector("#listaAmigos").innerHTML = "";
        for (let index= 0; index < listaAmigos.length; index++) {
            const li = document.createElement("li");
            li.innerHTML = listaAmigos[index];
            ul.appendChild(li);
        }
    }
}
function empezarDeNuevo() {
    
    let estado= document.querySelector(".button-draw").textContent;
    if (estado==="Empezar Nuevamente") {
        document.querySelector(".button-draw").innerHTML = "Sortear amigo";
        document.querySelector(".button-draw").onclick = sortearAmigo;
        document.querySelector("#resultado").innerHTML = "";    

    } else {

    }
}
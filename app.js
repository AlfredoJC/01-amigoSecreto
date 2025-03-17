let listaAmigos =[];
//let nombreAmigo= "";
function agregarAmigo() {
    let nombreAmigo=document.querySelector("#amigo").value.trim();
    if (nombreAmigo != "") {
        //listaAmigos.push(nombreAmigo);
        limpiar();
        listaDeAmigos(nombreAmigo);
        //console.log(listaAmigos);

    } else {
        alert("Por favor, inserte un nombre.");

    }
}
function listaDeAmigos(nombreAmigo) {
    listaAmigos.push(nombreAmigo);
    //generando la lista <UL><li>
    let ul = document.querySelector("#listaAmigos");
    //esto para refrescar o limpiar <li>
    document.querySelector("#listaAmigos").innerHTML = "";
    for (let index= 0; index < listaAmigos.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = listaAmigos[index];
        ul.append(li);
    }
    /* let li = document.createElement("li");
    li.innerHTML = listaAmigos[listaAmigos.length-1];
    ul.appendChild(li);  */
}
function sortearAmigo() {
    limpiar();
    if (listaAmigos.length>0) {
        let indiceGenerado =  Math.floor(Math.random()*listaAmigos.length);
        document.getElementById("resultado").innerHTML = `El amigo Sorteado es: ${listaAmigos[indiceGenerado]}`;
        const textoBoton = document.querySelector(".button-draw");
        console.log("no hay nada" + textoBoton.textContent);
        if (textoBoton.textContent.trim() =="Sortear amigo") {
            textoBoton.textContent = "Reiniciar Sorteo";
        } else {
            textoBoton.textContent = "Sortear amigo";
            document.getElementById("resultado").innerHTML = "";
            listaAmigos=[];
        }
    } else {
        alert("No has agregado amigos");
    }
}
function limpiar() {
    document.querySelector("#amigo").value = "";
    document.querySelector("#listaAmigos").innerHTML = "";
}

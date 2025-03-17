# 01- amigoSecreto
Practica de lógica de programación en Alura: Challenge ONE -  juego del amigo secreto.
Este es un sencillo juego de Amigo Secreto, donde los usuarios pueden agregar nombres a una lista, que se muestra en la vista luego realizar un sorteo aleatorio para seleccionar un amigo y empezar nuevamente el proceso si lo desean.

## Descripción
El juego de **Amigo Secreto** permite a los usuarios agregar nombres a una lista, realizar un sorteo aleatorio de amigos secretos y ver los resultados en pantalla. Si es necesario, te permite reiniciar el juego para realizar nuevos sorteos, eso si se repite el proceso de agregar amigos.

## Funcionalidades

- **Agregar amigos**: Los usuarios pueden agregar nombres a la lista de amigos.
- **Sortear un amigo secreto**: El sistema elige un amigo secreto de forma aleatoria y lo muestra en pantalla.
- **Reiniciar el juego**: Permite limpiar la lista de amigos y comenzar un nuevo sorteo después de que se haya mostrado el resultado.
- 
## ¿Cómo funciona?

### 1. **Agregar un Amigo**
Cuando el usuario ingresa un nombre y hace clic en **"Adicionar"**, este se agrega a una lista interna que se mostrará en pantalla debajo del formulario.
Si el formulario(campo de texto) está vacío o hay solamente espacios, el sistema te mostrará una alerta **"Por favor, inserte un nombre."**.

### 2. **Sortear un Amigo Secreto**
Una vez que se hayan agregado amigos a la lista, el usuario puede hacer clic en **"Sortear Amigo"** para elegir aleatoriamente un amigo secreto de la lista. El resultado se mostrará en la pantalla **"El amigo Sorteado es: Nombre de amigo"**

### 3. **Reiniciar el Juego**
Después de que se haya realizado el sorteo el botón **"Sortear Amigo"** cambiara a **"reiniciar Sorteo"**, al hacer clic en reiniciar sorteo,  se limpiará la lista de amigos y el ganador, el botón cambiará de nombre a **"Sortear Amigo"**   y tendrá que agregar nuevamente nuevos amigos para realizar un nuevo sorteo. 

## Estructura del Proyecto

Este proyecto consta de tres archivos principales:

- **`index.html`**: Contiene la estructura HTML de la página (proporcionado por Alura).
- **`style.css`**: Proporciona los estilos para la presentación visual del juego (proporcionado por alura).
- **`app.js`**: Contiene la lógica del juego(yo).

### 1. `agregarAmigo()`

Esta función agrega un nombre a la lista de amigos al hacer clic en **"adicionar"**. Si el campo de entrada está vacío o solo hay espacios, se muestra una alerta indicando **"Por favor, inserte un nombre."**
De ingresar correctamente el nombre en el formulario, guardará en una variable el contenido del formulario y luego se enviará como parámetro a la función listaDeAmigos(); claro no sin antes limpiar el formulario para agregar nuevos amigos.

```javascript
let listaAmigos =[];
function agregarAmigo() {
    let nombreAmigo=document.querySelector("#amigo").value.trim();
    if (nombreAmigo != "") {
        limpiar();
        listaDeAmigos(nombreAmigo);
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
```

### 2. `listaDeAmigos(nombreAmigo)`

Esta función es llamada dentro de la función `agregaramigo()`, recibe un parámetro o valor, ese valor es agregado a la lista de amigos.
Mediante el uso del for realizamos y el uso del indice del Array `listaAmigos`
mostraremos la lista en la pantalla de manera ordenada, esta lista se actualizará cada vez que se agrega un amigo.
```javascript
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
}
```
### 3. `sortearAmigo()`
Esta función es llamada al hacer clic en el botón **"sortear amigo"**, lo primero que hace es limpiar la vista de la lista de amigos de la pantalla, luego verifica internamente si el array `listaAmigos` contiene al menos 1 amigo, luego genera un número pseudoaleatorio, para usarlo como indice y mostrar como resultado en la pantalla **"El amigo Sorteado es : El amigo Ganador"**. De no haber ingresado ningún amigo mostrara una alerta **"No has agregado amigos"**
Esta funcion una vez ejecutada realizará un cambio de nombre al botón que lo ejecutó **"Reiniciar Sorteo"** esto para limpiar el array `listaAmigos` y usted podrá empezar desde el principio agregando amigos para un nuevo sorteo con nuevos amigos.
```javascript
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
```
### 4. `limpiar()`
una vez llamada solamente limpia los campos de texto(formulario) y también limpia la lista de amigos que se muestra en la pantalla
```javascript
function limpiar() {
    document.querySelector("#amigo").value = "";
    document.querySelector("#listaAmigos").innerHTML = "";
}
```

## Instrucciones de Uso.
1. Abre la página en tu navegador.
2. Ingresa un nombre en el campo de texto y haz clic en **"Adicionar"** para añadirlo a la lista.
3. Una vez que hayas agregado todos los amigos, haz clic en **"Sortear Amigo"** para elegir un amigo secreto de manera aleatoria.
4. El nombre del amigo secreto sorteado aparecerá en la pantalla. Puedes hacer clic en "Reiniciar Sorteo" para reiniciar el juego y realizar otro sorteo con nuevos amigos.

## Tecnologías Usadas
### HTML:
Para la estructura de la página.
### CSS:
Para los estilos visuales.
### JavaScript:
Para la lógica del juego y la interacción con el usuario.

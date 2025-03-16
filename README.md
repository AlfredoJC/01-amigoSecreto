# 01-amigoSecreto
Practica de lógica de programación en Alura: Challenge ONE -  juego del amigo secreto.
Este es un sencillo juego de Amigo Secreto, donde los usuarios pueden agregar nombres a una lista, realizar un sorteo aleatorio para asignar un amigo secreto y reiniciar el proceso si lo desean.

## Descripción
El juego de **Amigo Secreto** permite a los usuarios agregar nombres a una lista, realizar un sorteo aleatorio de amigos secretos y ver los resultados en pantalla. Además, permite reiniciar el juego para realizar nuevos sorteos.

## Funcionalidades

- **Agregar amigos**: Los usuarios pueden agregar nombres a la lista de amigos.
- **Sortear un amigo secreto**: El sistema elige un amigo secreto de forma aleatoria y lo muestra en pantalla.
- **Reiniciar el juego**: Permite comenzar un nuevo sorteo después de que se haya mostrado el resultado.
- 
## ¿Cómo funciona?

### 1. **Agregar un Amigo**
Cuando el usuario ingresa un nombre y hace clic en **"Agregar Amigo"**, este se agrega a una lista interna que se mostrará en pantalla. Si el campo de texto está vacío o hay solamente espacios, el sistema pedirá que se ingrese un nombre válido.

### 2. **Sortear un Amigo Secreto**
Una vez que se hayan agregado amigos a la lista, el usuario puede hacer clic en **"Sortear Amigo"** para elegir aleatoriamente un amigo secreto de la lista. El resultado se mostrará en la pantalla.

### 3. **Reiniciar el Juego**
Después de que se haya realizado el sorteo, el juego muestra un botón para reiniciar el proceso y realizar un nuevo sorteo de amigos secretos.

## Estructura del Proyecto

Este proyecto consta de tres archivos principales:

- **`index.html`**: Contiene la estructura HTML de la página (proporcionado por Alura).
- **`style.css`**: Proporciona los estilos para la presentación visual del juego (proporcionado por alura).
- **`app.js`**: Contiene la lógica del juego (interacción con el usuario y el sorteo aleatorio).

### 1. `agregarAmigo()`

Esta función agrega un nombre a la lista de amigos. Si el campo de entrada está vacío o solo hay espacios, se muestra una alerta indicando que el nombre es inválido.
Tambien llama a la funcion mostrarlistaAmigos(), para actualizar la lista y limpia el texto de resultado del sorteo.

```javascript
function agregarAmigo() {
    document.querySelector("#amigo").value.trim() === "" 
        ? alert("Por favor, ingresa un nombre válido.") 
        : listaAmigos.push(document.querySelector("#amigo").value), limpiarCaja();
    mostrarListaAmigos();
    document.querySelector("#resultado").innerHTML = "";
}
```

### 2. `agregarAmigo()`

Realiza el sorteo aleatorio de un amigo secreto. Si no hay amigos en la lista, muestra una alerta. En caso contrario, selecciona un amigo al azar, lo muestra en pantalla, y cambia el texto a empezar neuvamente para reiniciar el juego.
```javascript
function sortearAmigo() { 
    if (listaAmigos.length > 0) {
        let indiceGenerado = Math.floor(Math.random() * listaAmigos.length);    
        document.querySelector("#resultado").innerHTML = `El amigo sorteado es: ${listaAmigos[indiceGenerado]}`;
        document.querySelector("#listaAmigos").innerHTML = "";
        listaAmigos = [];
        document.querySelector(".button-draw").innerHTML = "Empezar Nuevamente";        
        document.querySelector(".button-draw").onclick = empezarDeNuevo;
    } else {
        alert("No se puede realizar el sorteo, no hay amigos en la lista.");
    }
}
```
### 3. `limpiarCaja()`
Limpiar el campo de entrada de texto para permitir que el usuario agregue un nuevo nombre sin interferencias.
```javascript
function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}
```
### 4. `mostrarListaAmigos()`
Muestra la lista de amigos en la interfaz. Si la lista está vacía, no se muestra nada.
```javascript
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
```
### 5. `empezarDeNuevo()`
Limpiar el campo de entrada de texto, tambien limpia los nombres (amigos) de la lista para permitir que el usuario empieze con nuevos amigos.
```javascript
function empezarDeNuevo() {
    let estado= document.querySelector(".button-draw").textContent;
    if (estado==="Empezar Nuevamente") {
        document.querySelector(".button-draw").innerHTML = "Sortear amigo";
        document.querySelector(".button-draw").onclick = sortearAmigo;
        document.querySelector("#resultado").innerHTML = "";    
    }
}
```
## Instrucciones de Uso.
1. Abre la página en tu navegador.
2. Ingresa un nombre en el campo de texto y haz clic en "Agregar Amigo" para añadirlo a la lista.
3. Una vez que hayas agregado todos los amigos, haz clic en "Sortear Amigo" para elegir un amigo secreto de manera aleatoria.
4. El nombre del amigo secreto sorteado aparecerá en la pantalla. Puedes hacer clic en "Empezar Nuevamente" para reiniciar el juego y realizar otro sorteo.

## Tecnologías Usadas
### HTML:
Para la estructura de la página.
### CSS:
Para los estilos visuales.
### JavaScript:
Para la lógica del juego y la interacción con el usuario.

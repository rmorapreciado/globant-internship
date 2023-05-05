const URLListaDePokemones = "https://pokeapi.co/api/v2/pokemon"; // La línea de código en JavaScript define una constante llamada "URLListaDePokemones" que almacena la dirección URL de una API web que proporciona datos de Pokemones.  La URL se utiliza más tarde en la aplicación para hacer una solicitud HTTP a la API web y obtener los datos de Pokemones que se utilizarán en la aplicación.

function mostrarPokemones(listaDePokemones); {
    let listaPokemon = document.getElementById("lista-pokemon"); // obtnemos el nodo de la lista que es ol y que tiene de indentificador lista-pokemon
    for (let i = 0; i < listaDePokemones.length; i++); { // La línea de código es una estructura de control de bucle "for" en JavaScript que se utiliza para recorrer una matriz o una lista de elementos, ejecutando una acción para cada uno de ellos.
        let pokemon = listaDePokemones[i].name; // Sirve para extraer el nombre de cada objeto "pokemon" de una lista o matriz de objetos "listaDePokemones".
        let li = document.createElement("li"); // Esta línea de código es una creación de elemento en JavaScript que se utiliza para crear un nuevo elemento HTML "li" (elemento de lista) en el árbol de DOM.
        let nombre = document.createTextNode(pokemon); // Esta línea de código sirve para una creación de nodo de texto en JavaScript que se utiliza para crear un nuevo nodo de texto en el árbol de DOM y asignarle un valor. En resumen, esta línea de código se utiliza para crear un nuevo nodo de texto en el árbol de DOM en JavaScript y asignarle un valor. 
        li.appendChild(nombre);
        listaPokemon.appendChild(li);
    }
}

function obtenerListaDePokemones() {
    fetch(URLListaDePokemones).then(function(response) {
        return response.json();
    }).then(function(data) {
        mostrarPokemones(data.results);
    });
}
obtenerListaDePokemones(pokemones);
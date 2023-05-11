const URLListaDePokemones = "https://pokeapi.co/api/v2/pokemon"; // La línea de código en JavaScript define una constante llamada "URLListaDePokemones" que almacena la dirección URL de una API web que proporciona datos de Pokemones.  La URL se utiliza más tarde en la aplicación para hacer una solicitud HTTP a la API web y obtener los datos de Pokemones que se utilizarán en la aplicación.
const nodePokemonList = "lista-pokemon"

function mostrarPokemon(event) {
    event.preventDefault();
    let URLDePokemon = event.target.href
    console.log(URLDePokemon);
}

function mostrarPokemones(listaDePokemones) {
    let listaPokemon = document.getElementById(nodePokemonList); // obtnemos el nodo de la lista que es ol y que tiene de indentificador lista-pokemon
    for (let i = 0; i < listaDePokemones.length; i++) { // La línea de código es una estructura de control de bucle "for" en JavaScript que se utiliza para recorrer una matriz o una lista de elementos, ejecutando una acción para cada uno de ellos.
        let pokemon = listaDePokemones[i].name; // Sirve para extraer el nombre de cada objeto "pokemon" de una lista o matriz de objetos "listaDePokemones".
        let URLPokemon = listaDePokemones[i].url;
        let nombre = document.createTextNode(pokemon); // Esta línea de código sirve para una creación de nodo de texto en JavaScript que se utiliza para crear un nuevo nodo de texto en el árbol de DOM y asignarle un valor. En resumen, esta línea de código se utiliza para crear un nuevo nodo de texto en el árbol de DOM en JavaScript y asignarle un valor. 

        let a = document.createElement("a");
        let li = document.createElement("li"); // Esta línea de código es una creación de elemento en JavaScript que se utiliza para crear un nuevo elemento HTML "li" (elemento de lista) en el árbol de DOM.
        a.appendChild(nombre);
        a.setAttribute("href", URLPokemon);
        a.addEventListener("click", mostrarPokemon);
        li.appendChild(a);
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

obtenerListaDePokemones();
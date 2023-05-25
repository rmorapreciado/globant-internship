const URLListDePokemones = "https://pokeapi.co/api/v2/pokemon"; // La línea de código en JavaScript define una constante llamada "URLListaDePokemones" que almacena la dirección URL de una API web que proporciona datos de Pokemones.  La URL se utiliza más tarde en la aplicación para hacer una solicitud HTTP a la API web y obtener los datos de Pokemones que se utilizarán en la aplicación.
// @todo constants should be in UPERCASE
const nodePokemonList = "list-pokemon";
const nodePokemonName = "name-pokemon";
const nodePokemonImg = "img-pokemon";
const NODE_POKEMON_MOVES = "moves-pokemon";

function showPokemonMoves(moves) {
  let movesPokemon = document.getElementById(NODE_POKEMON_MOVES);
  movesPokemon.innerHTML = pokemon.moves[0].move.name; // @TODO: remove
  // @todo complete list rendering
  // @see showPokemones
  // pokemon.moves.forEach(({ move: { name } }, i) => {
  //   console.log(name);
  // });
}

function showPokemon(pokemon) {
    let namePokemon = document.getElementById(nodePokemonName);
    let imgPokemon = document.getElementById(nodePokemonImg);

    namePokemon.innerHTML = pokemon.name;
    imgPokemon.src = pokemon.sprites.front_default;
    showPokemonMoves(pokemon.moves);
}

function obtainPokemon(event) {
    event.preventDefault();
    let URLDePokemon = event.target.href;
    console.log(URLDePokemon); // @todo at end remove consoles
    fetch(URLDePokemon).then(function(response) {
        return response.json();
    }).then(function(data) {
        showPokemon(data);
        console.log(data);
    });
}

function showPokemones(listDePokemones) {
    let listPokemon = document.getElementById(nodePokemonList); // obtnemos el nodo de la lista que es ol y que tiene de indentificador lista-pokemon
    for (let i = 0; i < listDePokemones.length; i++) { // La línea de código es una estructura de control de bucle "for" en JavaScript que se utiliza para recorrer una matriz o una lista de elementos, ejecutando una acción para cada uno de ellos.
        let pokemon = listDePokemones[i].name; // Sirve para extraer el nombre de cada objeto "pokemon" de una lista o matriz de objetos "listaDePokemones".
        let URLPokemon = listDePokemones[i].url;
        let name = document.createTextNode(pokemon); // Esta línea de código sirve para una creación de nodo de texto en JavaScript que se utiliza para crear un nuevo nodo de texto en el árbol de DOM y asignarle un valor. En resumen, esta línea de código se utiliza para crear un nuevo nodo de texto en el árbol de DOM en JavaScript y asignarle un valor.

        let a = document.createElement("a");
        let li = document.createElement("li"); // Esta línea de código es una creación de elemento en JavaScript que se utiliza para crear un nuevo elemento HTML "li" (elemento de lista) en el árbol de DOM.
        a.appendChild(name);
        a.setAttribute("href", URLPokemon);
        a.addEventListener("click", obtainPokemon);
        li.appendChild(a);
        listPokemon.appendChild(li);
    }
}

// Espanglish obtainListDePokemones
// Español obtenerListaDePokemones
// @TODO all in English => obtainPokemonsList
function obtainListDePokemones() {
    fetch(URLListDePokemones).then(function(response) {
        return response.json();
    }).then(function(data) {
        showPokemones(data.results);
    });
}

obtainListDePokemones();

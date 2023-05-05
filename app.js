const URLListaDePokemones = "https://pokeapi.co/api/v2/pokemon";

function mostrarPokemones(listaDePokemones) {
    let listaPokemon = document.getElementById("lista-pokemon"); // obtnemos el nodo de la lista que es ol y que tiene de indentificador lista-pokemon
    for (let i = 0; i < listaDePokemones.length; i++) {
        let pokemon = listaDePokemones[i].name;
        let li = document.createElement("li");
        let nombre = document.createTextNode(pokemon);
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
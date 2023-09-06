const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const status = document.getElementById('status')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

           <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            <button type='button' id="moreInfoButton" class="moreInfoButton" onclick="showPage('status${pokemon.number}')">More Info</button>
            <div class="status" id="status${pokemon.number}" style="display:none">
            <section>
                <span class="weight">Weight: ${pokemon.weight/10} kg</span></br>
                <span class="height">Height: ${pokemon.height/10} m</span></br>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th class="valor">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="poke_stats">
                            <td>${pokemon.stats.map((stats) => `<li class="stats_name">${stats}</li>`).join('')}</td>
                            <td>${pokemon.pokestat.map((pokestat) => `<li class="stats">${pokestat}</li>`).join('')}</td>
                        </tr>
                    </tbody>
                </table>  
                <span class="moves">Moves</span></br>
                <ol class="move">
                    ${pokemon.moves[0]}</br>
                    ${pokemon.moves[1]}
                </ol>
            </section>
        </div>

        </li>
        
    `

}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
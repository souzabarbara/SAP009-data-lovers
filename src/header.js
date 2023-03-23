import data from './data/rickandmorty/rickandmorty.js';
import { renderCards } from './main.js'

document.querySelector("#search-input").addEventListener("keyup", filterCardsByName)


function filterCardsByName(event) {
    const inputValue = event.target.value.toLowerCase()
    const dataFiltered = data.results.filter(character => {
        const characterName = character.name.toLowerCase()
        return characterName.includes(inputValue)
    })
    renderCards(dataFiltered)
}
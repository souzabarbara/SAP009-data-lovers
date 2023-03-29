import data from './data/rickandmorty/rickandmorty.js';
import { renderCards } from './main.js'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search-input").addEventListener("keyup", renderCardsFiltered)
})

export function filterCardsByName(event, data) {
  const inputValue = event.target.value.toLowerCase()
  const dataFiltered = data.filter(character => {
    const characterName = character.name.toLowerCase()
    return characterName.includes(inputValue)
  })
  return dataFiltered
}

function renderCardsFiltered(event) {
  renderCards(filterCardsByName(event, data.results))
}
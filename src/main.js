import data from './data/rickandmorty/rickandmorty.js';

function getStatusIcon(character) {
  let statusIcon = "●"

  if (character.status === "Alive") {
    statusIcon = `<span style='color: green'>${statusIcon}</span>` // atributo style  adiciona css a qualquer elemento 
  } else if (character.status === "Dead") {
    statusIcon = `<span style='color: red'>${statusIcon}</span>`
  } else {
    statusIcon = `<span style='color: gray'>${statusIcon}</span>`
  }

  return statusIcon
}

function translateStatus(character) {

  if (character.status === 'Alive' && character.gender === "Male") { return "Vivo"; }
  else if (character.status === 'Alive' && character.gender === "Female") { return "Viva"; }

  if (character.status === 'Dead' && character.gender === "Male") { return "Morto"; }
  else if (character.status === 'Dead' && character.gender === "Female") { return "Morta"; }

  if (character.status === 'Alive' && character.gender === "Unknown") { return "Vivo"; }
  else if (character.status === 'Dead' && character.gender === "Unknown") { return "Morto"; }

  if (character.status === 'Alive' && character.gender === "Genderless") { return "Vivo"; }
  else if (character.status === 'Dead' && character.gender === "Genderless") { return "Morto"; }

  else { return "Desconhecido"; }
}

function translateSpecies(character) {
  const current_species = character.species.toLowerCase()

  const speciesTranslation = {
    'human': "Humana",
    'alien': "Alienígena",
    'humanoid': "Humanoide",
    'unknown': "Desconhecida",
    'poopybutthole': "Poopybutthole",
    'mytholog': "Mytholog",
    'vampire': "Vampiro",
    'animal': "Animal",
    'robot': "Robô",
    'parasite': "Parasita",
    'cronenberg': "Cronenberg",
    'disease': "Doença"
  }

  return speciesTranslation[current_species]
}

function translateGender(character) {
  const current_gender = character.gender.toLowerCase()

  const genderTranslation = {
    'male': "Masculino",
    'female': "Feminino",
    'unknown': "Desconhecido",
    'genderless': "Indefinido"
  }

  return genderTranslation[current_gender]
}

function translateOrigin(character) {
  const origin = character.origin.name
  if (origin.includes('Earth')) return origin.replace('Earth', 'Terra')
  if (origin === "unknown") return "Desconhecida"

  return origin
}

function translateLocation(character) {

  const location = character.location.name
  if (location.includes('Earth')) return location.replace('Earth', 'Terra')
  if (location === "unknown") return "Local desconhecido"

  return location
}

export function renderCards(arrayWithCharacterData) {
  document.querySelector("#cards").innerHTML = ""
  document.querySelector("#cards").innerHTML += arrayWithCharacterData
    .map(character => {
      return `
            <div class="card">
            <img src="${character.image}"
            class="character-image" />
            <div class="character-name">${character.name}</div>
            <div class="character-description">
            <div>${getStatusIcon(character)} ${translateStatus(character)} - ${translateSpecies(character)} - ${translateGender(character)}</div>
            <div>Origem: ${translateOrigin(character)}</div>
            <div>Vive em: ${translateLocation(character)}</div>
            <div class="show-episodes" data-character-id="${character.id}"> Episódios em que aparece</div>
            </div>
        </div>
        </div>
        `
    }).join('')
}

renderCards(data.results)

const modal = document.querySelector("#modal");
const showEpisodesDivs = document.querySelectorAll(".show-episodes");

showEpisodesDivs.forEach(el => {
  el.addEventListener('click', (event) => {
    modal.style.display = "block";

    const cardCharacterId = event.target.getAttribute("data-character-id")

    const modalText = data
      .results
      .find(character => character.id == cardCharacterId)
      .episode
      .join('<br>')

    modal.innerHTML =
      `<div class="modal-content">
        <span id="modal-close">&times;</span>
        <p>${modalText}</p>
      </div>`

    const closeButton = document.querySelector("#modal-close");

    closeButton.addEventListener('click', () => {
      modal.style.display = "none";
    })
  })
})

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
import data from './data/rickandmorty/rickandmorty.js';
import { renderCards } from './main.js'


function toggleMenu() {
  const menuDisplay = document.querySelector(".menu").style.display
  if (menuDisplay === "none" || !menuDisplay) {
    document.querySelector(".menu").style.display = 'flex'
    document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>"
  } else {
    document.querySelector(".menu").style.display = 'none'
    document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>"
  }
}

export function translateStatus(status) {
  const current_status = status.toLowerCase()

  const statusTranslation = {
    'alive': "Vivo",
    'unknown': "Desconhecido",
    'dead': "Morto"
  }
  return statusTranslation[current_status]
}

export function translateSpecies(species) {
  const current_species = species.toLowerCase()

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

export function translateGender(gender) {
  const current_gender = gender.toLowerCase()

  const genderTranslation = {
    'male': "Masculino",
    'female': "Feminino",
    'unknown': "Desconhecido",
    'genderless': "Indefinido"
  }

  return genderTranslation[current_gender]
}

export function orderByAZ(character1, character2) {
  if (character1.name > character2.name) return 1;
  if (character1.name < character2.name) return -1;
  return 0;
}


export function orderByZA(character1, character2) {
  if (character1.name < character2.name) return 1;
  if (character1.name > character2.name) return -1;
  return 0;
}

const allOrigin = new Set()
data.results.forEach(character => allOrigin.add(character.origin.name))
export const originOptions = Array.from(allOrigin)

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon")
  menuIcon.addEventListener("click", toggleMenu);

  const allStatus = new Set()
  data.results.forEach(character => allStatus.add(character.status))
  const statusOptions = Array.from(allStatus)
  document.querySelector("#filter-by-status").innerHTML +=
    statusOptions.map(status => `<option value="${status}">${translateStatus(status)}</option>`).join('')

  const allSpecies = new Set()
  data.results.forEach(character => allSpecies.add(character.species))
  const speciesOptions = Array.from(allSpecies)
  document.querySelector("#filter-by-species").innerHTML +=
    speciesOptions.map(species => `<option value="${species}">${translateSpecies(species)}</option>`).join('')

  const allGender = new Set()
  data.results.forEach(character => allGender.add(character.gender))
  const genderOptions = Array.from(allGender)
  document.querySelector("#filter-by-gender").innerHTML +=
    genderOptions.map(gender => `<option value="${gender}">${translateGender(gender)}</option>`).join('')


  document.querySelector("#filter-by-origin").innerHTML +=
    originOptions.map(origin => `<option value="${origin}">${origin}</option>`).join('')

  const allLocation = new Set()
  data.results.forEach(character => allLocation.add(character.location.name))
  const locationOptions = Array.from(allLocation)
  document.querySelector("#filter-by-location").innerHTML +=
    locationOptions.map(location => `<option value="${location}">${location}</option>`).join('')

  const filterStatusSelect = document.querySelector("#filter-by-status")

  filterStatusSelect.addEventListener("change", (event) => {
    renderCards(data.results.filter(character => character.status === event.target.value))
  })

  const filterSpeciesSelect = document.querySelector("#filter-by-species")

  filterSpeciesSelect.addEventListener("change", (event) => {
    renderCards(data.results.filter(character => character.species === event.target.value))
  })

  const filterGenderSelect = document.querySelector("#filter-by-gender")

  filterGenderSelect.addEventListener("change", (event) => {
    renderCards(data.results.filter(character => character.gender === event.target.value))
  })

  const filterOriginSelect = document.querySelector("#filter-by-origin")

  filterOriginSelect.addEventListener("change", (event) => {
    renderCards(data.results.filter(character => character.origin.name === event.target.value))
  })

  const filterLocationSelect = document.querySelector("#filter-by-location")

  filterLocationSelect.addEventListener("change", (event) => {
    renderCards(data.results.filter(character => character.location.name === event.target.value))
  })
  /* 
  1. pegar elemento de select de ordenacao 
  2. adiciona um evento de change 
  3. ordenar data.results usando Array.sort() usando o character.name, veficando se é pra ordenar de a-z ou z-a (usar if else para ordernar "certo" de acordo com o value)
  4. colocar o data.results.sort(...) dentro de renderCards()
  */

  const orderByName = document.querySelector("#order-by-name")

  orderByName.addEventListener("change", (event) => {
    const sortedArray = data.results.sort((character1, character2) => {
      if (event.target.value === "a-z")
        return orderByAZ(character1, character2)
      else
        return orderByZA(character1, character2)
    });
    renderCards(sortedArray)
  })
})
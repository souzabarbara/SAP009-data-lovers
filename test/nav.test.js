import {
  translateStatus,
  translateSpecies,
  translateGender,
  orderByAZ,
  orderByZA,
} from '../src/nav.js'

describe('translateStatus', () => {
  test('should return "Vivo" when status is "alive"', () => {
    const status = 'alive'
    const translatedStatus = translateStatus(status)
    expect(translatedStatus).toBe('Vivo')
  })

  test('should return "Desconhecido" when status is "unknown"', () => {
    const status = 'unknown'
    const translatedStatus = translateStatus(status)
    expect(translatedStatus).toBe('Desconhecido')
  })

  test('should return "Morto" when status is "dead"', () => {
    const status = 'dead'
    const translatedStatus = translateStatus(status)
    expect(translatedStatus).toBe('Morto')
  })

  test('should return undefined when status is not in statusTranslation object', () => {
    const status = 'undead'
    const translatedStatus = translateStatus(status)
    expect(translatedStatus).toBeUndefined()
  })
})

describe('translateSpecies', () => {
  test('should return "Humana" when species is "human"', () => {
    const species = 'human'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBe('Humana')
  })

  test('should return "Alienígena" when species is "alien"', () => {
    const species = 'alien'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBe('Alienígena')
  })

  test('should return "Desconhecida" when species is "unknown"', () => {
    const species = 'unknown'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBe('Desconhecida')
  })

  test('should return "Poopybutthole" when species is "poopybutthole"', () => {
    const species = 'poopybutthole'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBe('Poopybutthole')
  })

  test('should return "Doença" when species is "disease"', () => {
    const species = 'disease'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBe('Doença')
  })

  test('should return undefined when species is not in speciesTranslation object', () => {
    const species = 'zombie'
    const translatedSpecies = translateSpecies(species)
    expect(translatedSpecies).toBeUndefined()
  })
})

describe('translateGender', () => {
  test('should return "Masculino" when gender is "male"', () => {
    expect(translateGender('male')).toBe('Masculino')
  })

  test('should return "Feminino" when gender is "female"', () => {
    expect(translateGender('female')).toBe('Feminino')
  })

  test('should return "Desconhecido" when gender is "unknown"', () => {
    expect(translateGender('unknown')).toBe('Desconhecido')
  })

  test('should return "Indefinido" when gender is "genderless"', () => {
    expect(translateGender('genderless')).toBe('Indefinido')
  })

  test('should return undefined when gender is not recognized', () => {
    expect(translateGender('robot')).toBeUndefined()
  })
})

// orderByAZ
describe('orderByAZ', () => {
  test('should return -1 when character1 name comes before character2 name in alphabetical order', () => {
    expect(orderByAZ({ name: 'Morty' }, { name: 'Rick' })).toBe(-1)
  })

  test('should return 1 when character1 name comes after character2 name in alphabetical order', () => {
    expect(orderByAZ({ name: 'Summer' }, { name: 'Jerry' })).toBe(1)
  })

  test('should return 0 when character1 name is equal to character2 name', () => {
    expect(orderByAZ({ name: 'Rick' }, { name: 'Rick' })).toBe(0)
  })
})

// orderByZA
describe('orderByZA', () => {
  test('should return 1 when character1 name comes before character2 name in reverse alphabetical order', () => {
    expect(orderByZA({ name: 'Morty' }, { name: 'Rick' })).toBe(1)
  })

  test('should return -1 when character1 name comes after character2 name in reverse alphabetical order', () => {
    expect(orderByZA({ name: 'Summer' }, { name: 'Jerry' })).toBe(-1)
  })

  test('should return 0 when character1 name is equal to character2 name', () => {
    expect(orderByZA({ name: 'Rick' }, { name: 'Rick' })).toBe(0)
  })
})
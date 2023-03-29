import {
  getStatusIcon,
  translateStatus,
  translateSpecies,
  translateOrigin,
  translateLocation,
  translateGender,
  calculatePercentage
} from '../src/main.js';

describe('getStatusIcon', () => {
  test('should return green icon when status is alive', () => {
    const character = { status: 'Alive' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: green\'>●</span>');
  });

  test('should return red icon when status is dead', () => {
    const character = { status: 'Dead' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: red\'>●</span>');
  });

  test('should return gray icon when status is unknown', () => {
    const character = { status: 'unknown' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: gray\'>●</span>');
  });
});

describe('translateStatus', () => {
  test('should return "Vivo" for a male character who is alive', () => {
    const character = {
      status: 'Alive',
      gender: 'Male'
    };
    const result = translateStatus(character);
    expect(result).toBe('Vivo');
  });

  test('should return "Viva" for a female character who is alive', () => {
    const character = {
      status: 'Alive',
      gender: 'Female'
    };
    const result = translateStatus(character);
    expect(result).toBe('Viva');
  });

  test('should return "Morto" for a male character who is dead', () => {
    const character = {
      status: 'Dead',
      gender: 'Male'
    };
    const result = translateStatus(character);
    expect(result).toBe('Morto');
  });

  test('should return "Morta" for a female character who is dead', () => {
    const character = {
      status: 'Dead',
      gender: 'Female'
    };
    const result = translateStatus(character);
    expect(result).toBe('Morta');
  });

  test('should return "Vivo" for a character whose gender is "Unknown" and is alive', () => {
    const character = {
      status: 'Alive',
      gender: 'Unknown'
    };
    const result = translateStatus(character);
    expect(result).toBe('Vivo');
  });

  test('should return "Morto" for a character whose gender is "Unknown" and is dead', () => {
    const character = {
      status: 'Dead',
      gender: 'Unknown'
    };
    const result = translateStatus(character);
    expect(result).toBe('Morto');
  });

  test('should return "Vivo" for a genderless character who is alive', () => {
    const character = {
      status: 'Alive',
      gender: 'Genderless'
    };
    const result = translateStatus(character);
    expect(result).toBe('Vivo');
  });

  test('should return "Morto" for a genderless character who is dead', () => {
    const character = {
      status: 'Dead',
      gender: 'Genderless'
    };
    const result = translateStatus(character);
    expect(result).toBe('Morto');
  });

  test('should return "Desconhecido" for a character with an unknown gender and status', () => {
    const character = {
      status: 'Unknown',
      gender: 'Unknown'
    };
    const result = translateStatus(character);
    expect(result).toBe('Desconhecido');
  });
});

describe('translateSpecies', () => {
  test('should translate human', () => {
    const character = { species: 'human' }
    expect(translateSpecies(character)).toEqual('Humana')
  })

  test('should translate alien', () => {
    const character = { species: 'alien' }
    expect(translateSpecies(character)).toEqual('Alienígena')
  })

  test('should translate humanoid', () => {
    const character = { species: 'humanoid' }
    expect(translateSpecies(character)).toEqual('Humanoide')
  })

  test('should translate unknown', () => {
    const character = { species: 'unknown' }
    expect(translateSpecies(character)).toEqual('Desconhecida')
  })

  test('should translate poopybutthole', () => {
    const character = { species: 'poopybutthole' }
    expect(translateSpecies(character)).toEqual('Poopybutthole')
  })

  test('should translate mytholog', () => {
    const character = { species: 'mytholog' }
    expect(translateSpecies(character)).toEqual('Mytholog')
  })

  test('should translate vampire', () => {
    const character = { species: 'vampire' }
    expect(translateSpecies(character)).toEqual('Vampiro')
  })

  test('should translate animal', () => {
    const character = { species: 'animal' }
    expect(translateSpecies(character)).toEqual('Animal')
  })

  test('should translate robot', () => {
    const character = { species: 'robot' }
    expect(translateSpecies(character)).toEqual('Robô')
  })

  test('should translate parasite', () => {
    const character = { species: 'parasite' }
    expect(translateSpecies(character)).toEqual('Parasita')
  })

  test('should translate cronenberg', () => {
    const character = { species: 'cronenberg' }
    expect(translateSpecies(character)).toEqual('Cronenberg')
  })

  test('should translate disease', () => {
    const character = { species: 'disease' }
    expect(translateSpecies(character)).toEqual('Doença')
  })

  test('should return undefined if species not found', () => {
    const character = { species: 'invalid' }
    expect(translateSpecies(character)).toBeUndefined()
  })
})

describe("translateOrigin", () => {
  test("should replace 'Earth' with 'Terra' in the origin name", () => {
    const character = { origin: { name: "Earth (C-137)" } }
    expect(translateOrigin(character)).toEqual("Terra (C-137)")
  })

  test("should return 'Desconhecida' if the origin is 'unknown'", () => {
    const character = { origin: { name: "unknown" } }
    expect(translateOrigin(character)).toEqual("Desconhecida")
  })

  test("should return the original origin name if it does not contain 'Earth'", () => {
    const character = { origin: { name: "Abadango" } }
    expect(translateOrigin(character)).toEqual("Abadango")
  })
})

describe('translateLocation', () => {
  test('should return translated location when location includes "Earth"', () => {
    const character = { location: { name: 'Earth C-137' } }
    const translatedLocation = translateLocation(character)
    expect(translatedLocation).toBe('Terra C-137')
  })

  test('should return "Local desconhecido" when location is "unknown"', () => {
    const character = { location: { name: 'unknown' } }
    const translatedLocation = translateLocation(character)
    expect(translatedLocation).toBe('Local desconhecido')
  })

  test('should return location as is when it does not include "Earth" and is not "unknown"', () => {
    const character = { location: { name: 'Abadango' } }
    const translatedLocation = translateLocation(character)
    expect(translatedLocation).toBe('Abadango')
  })
})


describe('translateGender', () => {
  test('should return "Masculino" when gender is "male"', () => {
    const character = { gender: 'male' }
    const translatedGender = translateGender(character)
    expect(translatedGender).toBe('Masculino')
  })

  test('should return "Feminino" when gender is "female"', () => {
    const character = { gender: 'female' }
    const translatedGender = translateGender(character)
    expect(translatedGender).toBe('Feminino')
  })

  test('should return "Desconhecido" when gender is "unknown"', () => {
    const character = { gender: 'unknown' }
    const translatedGender = translateGender(character)
    expect(translatedGender).toBe('Desconhecido')
  })

  test('should return "Indefinido" when gender is "genderless"', () => {
    const character = { gender: 'genderless' }
    const translatedGender = translateGender(character)
    expect(translatedGender).toBe('Indefinido')
  })

  test('should return undefined when gender is not in genderTranslation object', () => {
    const character = { gender: 'nonbinary' }
    const translatedGender = translateGender(character)
    expect(translatedGender).toBeUndefined()
  })
})

describe("calculatePercentage", () => {
  test('should return the correct percentage', () => {
    expect(calculatePercentage(25, 100)).toEqual(25);
    expect(calculatePercentage(60, 120)).toEqual(50);
    expect(calculatePercentage(2, 7)).toEqual(29);
    expect(calculatePercentage(0, 10)).toEqual(0);
    expect(calculatePercentage(10, 0)).toEqual(Infinity);
  })
})
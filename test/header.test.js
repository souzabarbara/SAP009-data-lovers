import { filterCardsByName } from '../src/header.js'

describe("filterCardsByName", () => {
  const data = [{ name: "Harry Potter" }, { name: "Hermione Granger" }, { name: "Ron Weasley" }, { name: "Draco Malfoy" },]

  test("should filter data correctly", () => {
    const event = { target: { value: "harry" } }
    const expectedDataFiltered = [{ name: "Harry Potter" }]

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual(expectedDataFiltered)
  })

  test("should return all data when input value is empty", () => {
    const event = { target: { value: "" } }

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual(data)
  })

  test("should return empty array when input value does not match any name", () => {
    const event = { target: { value: "ginny" } }

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual([])
  })
})
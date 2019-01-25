import { cArrayPur, cArray } from '../src/index'

const handleThrow = (assertion, fn) => {
  test(assertion, () => {
      expect(fn).toThrow()
  });
}

const array = ['a', 'b']
describe('covertAliasPur data must be array throw Error', () => {
  handleThrow('Data is a string error', () => cArrayPur('string', array))
  handleThrow('Data is a boolean error', () => cArrayPur(true, array))
  handleThrow('Data is a number error', () => cArrayPur(1, array))
  handleThrow('Data is a object error', () => cArrayPur({a: 1}, array))
})

describe('covertAliasPur name must be array throw Error', () => {
  handleThrow('Data is a string error', () => cArrayPur(array, 'string'))
  handleThrow('Data is a boolean error', () => cArrayPur(array, true))
  handleThrow('Data is a number error', () => cArrayPur(array, 1))
  handleThrow('Data is a object error', () => cArrayPur(array, {a: 1}))
})

describe('covertAlias name must be object throw Error', () => {
  handleThrow('Data is a string error', () => cArray(array, 'string'))
  handleThrow('Data is a boolean error', () => cArray(array, true))
  handleThrow('Data is a number error', () => cArray(array, 1))
  handleThrow('Data is a array error', () => cArray(array, []))
})

describe('covertAliasPur name must be empty array throw Error', () => {
  handleThrow('Data is a string error', () => cArrayPur(array, []))
})

describe('covertAliasPur name must be array of string throw Error', () => {
  handleThrow('Data is a string error', () => cArrayPur(array, [true, 'string']))
})
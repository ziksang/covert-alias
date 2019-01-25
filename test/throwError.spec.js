import { covertAliasPur, covertAlias } from '../src/index'

const handleThrow = (assertion, fn) => {
  test(assertion, () => {
      expect(fn).toThrow()
  });
}

const array = ['a', 'b']
describe('covertAliasPur data must be array throw Error', () => {
  handleThrow('Data is a string error', () => covertAliasPur('string', array))
  handleThrow('Data is a boolean error', () => covertAliasPur(true, array))
  handleThrow('Data is a number error', () => covertAliasPur(1, array))
  handleThrow('Data is a object error', () => covertAliasPur({a: 1}, array))
})

describe('covertAliasPur name must be array throw Error', () => {
  handleThrow('Data is a string error', () => covertAliasPur(array, 'string'))
  handleThrow('Data is a boolean error', () => covertAliasPur(array, true))
  handleThrow('Data is a number error', () => covertAliasPur(array, 1))
  handleThrow('Data is a object error', () => covertAliasPur(array, {a: 1}))
})

describe('covertAlias name must be object throw Error', () => {
  handleThrow('Data is a string error', () => covertAlias(array, 'string'))
  handleThrow('Data is a boolean error', () => covertAlias(array, true))
  handleThrow('Data is a number error', () => covertAlias(array, 1))
  handleThrow('Data is a array error', () => covertAlias(array, []))
})

describe('covertAliasPur name must be empty array throw Error', () => {
  handleThrow('Data is a string error', () => covertAliasPur(array, []))
})

describe('covertAliasPur name must be array of string throw Error', () => {
  handleThrow('Data is a string error', () => covertAliasPur(array, [true, 'string']))
})
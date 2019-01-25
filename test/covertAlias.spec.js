import { covertAlias } from '../src/index'

const toEqual = (assertion, expection, result) => {
  it(assertion, () => {
      expect(expection).toEqual(result)
  });
}

const array = [
  { name: 'peter', age: 11, id: 1 },
  { name: 'kitty', age: 12, id: 2 },
  { name: 'ben', age: 13, id: 3 },
]

const arrayValue = [
  { label: 'peter', value: 1 },
  { label: 'kitty', value: 2 },
  { label: 'ben', value: 3 },
]

const arrayValueAll = [
  { name: 'peter', age: 11, id: 1, label: 'peter', value: 1 },
  { name: 'kitty', age: 12, id: 2, label: 'kitty', value: 2 },
  { name: 'ben', age: 13, id: 3, label: 'ben', value: 3 },
]

toEqual('covertAlias and return all', covertAlias(array, { label: 'name', value: 'id' }, 'all'), arrayValueAll)


toEqual('covertAlias and return all', covertAlias(array, { label: 'name', value: 'id' }), arrayValue)
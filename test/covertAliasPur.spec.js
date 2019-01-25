import { covertAliasPur } from '../src/index'

const toEqual = (assertion, expection, result) => {
  it(assertion, () => {
      expect(expection).toEqual(result)
  });
}

const array = ['peter', 'kitty', 'samin']

const arrayValue = [
  { label: 'peter', value: 'peter' },
  { label: 'kitty', value: 'kitty' },
  { label: 'samin', value: 'samin' }
]

toEqual('Successful transformation', covertAliasPur(array, ['label', 'value']), arrayValue)
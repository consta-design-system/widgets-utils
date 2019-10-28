import { pluralize } from '../pluralization'

const plural = pluralize('%d день', '%d дня', '%d дней')

describe('pluralization', () => {
  it('without arguments', () => {
    expect(plural()).toEqual('0 дней')
  })

  it('only', () => {
    expect(plural(1)).toEqual('1 день')
  })

  it('some', () => {
    expect(plural(4)).toEqual('4 дня')
  })

  it('many', () => {
    expect(plural(5)).toEqual('5 дней')
  })
})

const format = (phrase: string, count: string | number) => phrase.replace(/%d/g, String(count))

export const pluralize = (one: string, two: string, more: string) => (count?: string | number) => {
  if (!count || typeof count === 'string') {
    return format(more, count ? count : '0')
  }

  if (count % 10 === 1 && count % 100 !== 11) {
    return format(one, count)
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return format(two, count)
  }

  return format(more, count)
}

export const getDayPlural = pluralize('%d день', '%d дня', '%d дней')

export const getHourPlural = pluralize('%d час', '%d часа', '%d часов')

export const getFbPlural = pluralize('%d ствол', '%d ствола', '%d стволов')

export const getStagePlural = pluralize('%d стадия', '%d стадии', '%d стадий')

export const partialObject = <T extends Record<string, unknown>>(obj?: T): Partial<T> => obj || {}

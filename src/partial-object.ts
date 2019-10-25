export const partialObject = <T extends object>(obj?: T): Partial<T> => obj || {}

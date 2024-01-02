export const makeArray = (length: number) => new Array(length).fill(null)
export const range = (start: number, end: number) =>
  makeArray(end - start).map((_, i) => start + i)
export const random = (min: number, max: number):number => Math.floor(Math.random() * (max - min)) + min

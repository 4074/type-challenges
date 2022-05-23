type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K
}

const map = {
  a: 'b',
  c: 'd',
}

type A<T extends Record<string, string>> = {
  [K in T[string]]: K
}

type B = Record<string, 'a' | 'b'>[string]

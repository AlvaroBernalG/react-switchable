// eslint-disable-next-line import/prefer-default-export
export const proxy = fn => fn2 => (...args) => {
  fn()
  fn2.apply(fn2, args)
}

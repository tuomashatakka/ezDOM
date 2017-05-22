'use babel'

export const toObject = (keys, arr=null) =>
  keys.reduce((x, o) => ({ ...x, [o]: (arr || keys)[o] }), {})

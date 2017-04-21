export const seed = (n) => ({
  type: 'SEED',
  data: n
});

export const next = () => ({
  type: 'NEXT'
});

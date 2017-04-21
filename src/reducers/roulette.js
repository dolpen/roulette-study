const xorshift = (y) =>{
  y = y ^ (y << 13);
  y = y ^ (y >> 17);
  y = y ^ (y << 5);
  return y;
};

const initState = {
  seed: 1,
  value: 0
};

const rouletteReducer = (state = initState, action) =>{
  switch (action.type){
    case 'SEED':
      return Object.assign({}, state, { seed: action.data, value: action.data });
    case 'NEXT':
      return Object.assign({}, state, { value: xorshift(state.value) });
    default:
      return state;
  }
};

export default rouletteReducer;

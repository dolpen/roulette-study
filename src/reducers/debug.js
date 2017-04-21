const initState = {};

const debugReducer = (state = initState, action) =>{
  console.log(state);
  return state;
};

export default debugReducer;

const reducerFunction = (state, action) => {
  console.log(state, action);
  if (action.type === 'INCREMENT') {
    if (state >= 10) {
      alert('You can not increase more than 10');
      return state;
    }
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    if (state <= 0) {
      alert('You can not decrease more than 0');
      return state;
    }
    return state - 1;
  }
  if (action.type === 'RESET') {
    return 0;
  }
  return state;
};
export default reducerFunction;

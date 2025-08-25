const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count >= 10) {
        alert('You can not increase more than 10');
        return { ...state, count: state.count };
      }
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      if (state.count <= 0) {
        alert('You can not decrease more than 0');
        return { ...state, count: state.count };
      }
      return { ...state, count: state.count - 1 };

    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }

  //   if (action.type === 'INCREMENT') {
  //     if (state >= 10) {
  //       alert('You can not increase more than 10');
  //       return state;
  //     }
  //     return state + 1;
  //   }
  //   if (action.type === 'DECREMENT') {
  //     if (state <= 0) {
  //       alert('You can not decrease more than 0');
  //       return state;
  //     }
  //     return state - 1;
  //   }
  //   if (action.type === 'RESET') {
  //     return 0;
  //   }
  //   return state;
};
export default reducerFunction;

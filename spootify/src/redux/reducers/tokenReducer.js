const reducer = (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_TOKEN':
      return payload;

    default:
      return state;
  }
};

export default reducer;

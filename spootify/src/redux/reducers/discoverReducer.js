const initialState = {
  newReleases: [],
  playlists: [],
  categories: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_NEW_RELEASES':
      return {
        ...state,
        newReleases: payload,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: payload,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default reducer;

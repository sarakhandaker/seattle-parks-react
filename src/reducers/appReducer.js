function appReducer(state = { parks: [], requesting: false, user: "" }, action) {
  switch (action.type) {

    case 'START_ADDING_PARKS_REQUEST':
      return {
        ...state,
        parks: [...state.parks],
        requesting: true
      }

    case 'ADD_PARKS':
      return {
        ...state,
        parks: action.parks,
        requesting: false
      }

    case 'ADD_USER':
      return {
        ...state,
        user: action.user
      }

    case 'REMOVE_USER':
      return {
        ...state,
        user: ""
      }

    default:
      return state;
  }
};

export default appReducer
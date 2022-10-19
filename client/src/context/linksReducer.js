export const linksReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LINKS':
      return {
        links: action.payload,
      };
    case 'ADD_LINK':
      return {
        ...state,
        links: [...state.links, action.payload],
      };
    default:
      return state;
  }
};

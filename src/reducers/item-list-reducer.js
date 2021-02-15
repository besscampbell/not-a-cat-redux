export default (state = {}, action) => {
  const { type, name, description, quantity, id } = action;
  switch(type) {
    case 'ADD_OR_UPDATE_ITEM':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          id: id
        },
      });
    case 'DELETE_ITEM':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
    }
  };
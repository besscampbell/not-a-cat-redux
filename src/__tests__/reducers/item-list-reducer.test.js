import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    name: 'Cat filter',
    description: 'Changes face into cat face',
    quantity: 10,
    id: 1
  };

  const currentState = {
    1: {name:'Cat filter',
    description: 'Changes face into cat face',
    quantity: 10,
    id: 1},
    2: {name: 'Cat filter off',
    description: 'Turns off cat filter',
    quantity: 17,
    id: 2}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to the masterItemList', () => {
    const { name, description, quantity, id } = itemData;
    action = {
      type: 'ADD_OR_UPDATE_ITEM',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should correctly update an item', () => {
    const { name, description, quantity, id } = itemData;
    action = {
      type: 'ADD_OR_UPDATE_ITEM',
      name: "New Cat Filter",
      description: "Different Description",
      quantity: 100,
      id: id
    }
    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: "New Cat Filter",
        description: "Different Description",
        quantity: 100,
        id: id
      }
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {name: 'Cat filter off',
      description: 'Turns off cat filter',
      quantity: 17,
      id: 2}
    });
  });
});
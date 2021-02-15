import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    name: 'Cat filter',
    description: 'Changes face into cat face',
    quantity: '10',
    id: 1
  };

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
});
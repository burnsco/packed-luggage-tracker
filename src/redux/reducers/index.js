const INITIAL_STATE = {
  items: [
    { id: 1, title: 'Phone', packed: false },
    { id: 2, title: 'Computer', packed: false },
    { id: 3, title: 'Jeans', packed: true },
    { id: 4, title: 'Toothbrush', packed: false },
    { id: 5, title: 'Socks', packed: true },
    { id: 6, title: 'Underwear', packed: false }
  ]
}

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state,
          { id: state.items.length + 1, title: action.payload, packed: false }
        ]
      }

    default:
      return state
  }
}

export default itemReducer

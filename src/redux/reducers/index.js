import ItemActionTypes from '../constants'

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
    case ItemActionTypes.ADD_ITEM:
      return {
        items: [
          ...state.items,
          { id: state.items.length + 1, title: action.title, packed: false }
        ]
      }

    case ItemActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }

    case ItemActionTypes.TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, packed: !item.packed } : item
        )
      }

    case ItemActionTypes.TOGGLE_ITEMS:
      return {
        ...state,
        items: state.items.map(item =>
          item.packed === true ? { ...item, packed: false } : item
        )
      }

    default:
      return state
  }
}

export default itemReducer

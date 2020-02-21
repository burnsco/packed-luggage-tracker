import ItemActionTypes from '../constants'
import { uniqueId } from 'lodash'

const INITIAL_STATE = {
  items: [
    { id: uniqueId(), title: 'Phone', packed: false },
    { id: uniqueId(), title: 'Computer', packed: false },
    { id: uniqueId(), title: 'Jeans', packed: true },
    { id: uniqueId(), title: 'Toothbrush', packed: false },
    { id: uniqueId(), title: 'Socks', packed: true },
    { id: uniqueId(), title: 'Underwear', packed: false }
  ]
}

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return {
        items: [
          ...state.items,
          { id: uniqueId(), title: action.title, packed: false }
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

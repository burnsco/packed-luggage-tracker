import ItemActionTypes from './types'
import INITIAL_STATE from '../data'

export const toggleItem = (items, id) => {
  let index = items.findIndex(item => item.id === id)
  items[index].packed = !items[index].packed
  return items
}

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...action.payload }]
      }
    case ItemActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload)]
      }
    case ItemActionTypes.TOGGLE_ITEM:
      return {
        ...state,
        items: toggleItem(state.items, action.payload)
      }
    case ItemActionTypes.TOGGLE_ALL_ITEMS:
      return {
        ...state,
        items: [...state.items.map(items => (items.packed = false))]
      }

    default:
      return state
  }
}

export default itemsReducer

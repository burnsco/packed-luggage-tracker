import ItemActionTypes from './types'

export const addItemToList = item => ({
  type: ItemActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemFromList = id => ({
  type: ItemActionTypes.REMOVE_ITEM,
  payload: id
})

export const toggleItem = id => ({
  type: ItemActionTypes.TOGGLE_ITEM,
  payload: id
})

export const toggleAllItems = () => ({
  type: ItemActionTypes.TOGGLE_ALL_ITEMS
})

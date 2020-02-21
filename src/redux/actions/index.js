import ItemActionTypes from '../constants'

export const addItemToList = title => ({
  type: ItemActionTypes.ADD_ITEM,
  title
})

export const removeItemFromList = id => ({
  type: ItemActionTypes.REMOVE_ITEM,
  id
})

export const toggleItem = id => ({ type: ItemActionTypes.TOGGLE_ITEM, id })

export const toggleAll = () => ({ type: ItemActionTypes.TOGGLE_ITEMS })

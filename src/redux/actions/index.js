export const addItemToList = item => ({
  type: 'ADD_ITEM_TO_LIST',
  payload: item
})

export const removeItemFromList = item => ({
  type: 'REMOVE_ITEM_FROM_LIST',
  payload: item
})

export const toggleItem = item => ({
  type: 'TOGGLE_ITEM',
  payload: item
})

export const toggleAll = () => ({
  type: 'TOGGLE_ALL'
})

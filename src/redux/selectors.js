import { createSelector } from 'reselect'

const selectItems = state => state.items

export const selectPackedItems = createSelector([selectItems], packedItems =>
  packedItems.filter(item => item.packed === true)
)

export const selectUnpackedItems = createSelector(
  [selectItems],
  unpackedItems => unpackedItems.filter(item => item.packed === false)
)

export const selectUnpackedItemsCount = createSelector(
  [selectUnpackedItems],
  unpackedItems => unpackedItems.length
)

export const selectPackedItemsCount = createSelector(
  [selectPackedItems],
  packedItems => packedItems.length
)

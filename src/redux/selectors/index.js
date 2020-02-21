import { createSelector } from 'reselect'

const selectItems = state => state.items

export const selectPackedItems = createSelector([selectItems], items =>
  items.filter(i => i.packed)
)
export const selectPackedItemsCount = createSelector(
  [selectPackedItems],
  items => items.length
)

export const selectUnpackedItems = createSelector([selectItems], items =>
  items.filter(i => !i.packed)
)
export const selectUnpackedItemsCount = createSelector(
  [selectUnpackedItems],
  items => items.length
)

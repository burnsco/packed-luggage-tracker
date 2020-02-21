import React, { createContext } from 'react'
import { uniqueId } from 'lodash'

export const ItemsContext = createContext({
  items: [
    { id: uniqueId(), title: 'Phone', packed: false },
    { id: uniqueId(), title: 'Computer', packed: false },
    { id: uniqueId(), title: 'Jeans', packed: true },
    { id: uniqueId(), title: 'Toothbrush', packed: false },
    { id: uniqueId(), title: 'Socks', packed: true },
    { id: uniqueId(), title: 'Underwear', packed: false }
  ]
})

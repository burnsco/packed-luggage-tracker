import uuidv1 from 'uuid/v1'

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL'
    case 'SHOW_COMPLETE':
      return 'COMPLETE'
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE'
    default:
      throw new Error()
  }
}

export const INITIAL_STATE = [
  { id: uuidv1(), title: 'Phone', complete: false },
  { id: uuidv1(), title: 'Computer', complete: false },
  { id: uuidv1(), title: 'Jeans', complete: true },
  { id: uuidv1(), title: 'Toothbrush', complete: false },
  { id: uuidv1(), title: 'Socks', complete: true },
  { id: uuidv1(), title: 'Underwear', complete: false },
  { id: uuidv1(), title: 'Forks', complete: true },
  { id: uuidv1(), title: 'Gun', complete: true }
]

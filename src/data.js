import uuidv1 from 'uuid/v1'
export const INITIAL_STATE = [
  { id: uuidv1(), title: 'Phone', packed: false },
  { id: uuidv1(), title: 'Computer', packed: false },
  { id: uuidv1(), title: 'Jeans', packed: true },
  { id: uuidv1(), title: 'Toothbrush', packed: false },
  { id: uuidv1(), title: 'Socks', packed: true },
  { id: uuidv1(), title: 'Underwear', packed: false },
  { id: uuidv1(), title: 'Forks', packed: true },
  { id: uuidv1(), title: 'Gun', packed: true }
]

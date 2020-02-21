import React from 'react'
import ListItem from '../../components/ListItem'
import ListHeader from '../../components/ListHeader'
import AddItem from '../../components/AddItem'
import { Container, ButtonContainer, MarkButton } from './styles'

const LuggageTracker = ({
  removeItem,
  items,
  toggleComplete,
  input,
  handleSubmit,
  handleChange,
  toggleAll
}) => {
  return (
    <Container>
      <AddItem
        input={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ListHeader title="Todos" items={items.length} />
      {items.map(item => (
        <ListItem
          title={item.title}
          key={item.id}
          packed={item.packed}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
          id={item.id}
        />
      ))}
      <ButtonContainer>
        <MarkButton onClick={() => toggleAll()}>Incomplete</MarkButton>
        <MarkButton
          style={{ marginLeft: 20 + 'px' }}
          onClick={() => toggleAll()}
        >
          Complete
        </MarkButton>
        <MarkButton
          style={{ marginLeft: 20 + 'px' }}
          onClick={() => toggleAll()}
        >
          All
        </MarkButton>
      </ButtonContainer>
    </Container>
  )
}

export default LuggageTracker

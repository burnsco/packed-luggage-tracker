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
  handleShowAll,
  handleShowComplete,
  handleShowIncomplete,
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
          complete={item.complete}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
          id={item.id}
        />
      ))}
      <ButtonContainer>
        <MarkButton onClick={() => handleShowAll()}>All</MarkButton>
        <MarkButton
          style={{ marginLeft: 20 + 'px' }}
          onClick={() => handleShowComplete()}
        >
          Complete
        </MarkButton>
        <MarkButton
          style={{ marginLeft: 20 + 'px' }}
          onClick={() => handleShowIncomplete()}
        >
          Incomplete
        </MarkButton>
      </ButtonContainer>
    </Container>
  )
}

export default LuggageTracker

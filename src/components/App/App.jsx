import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Todo } from '../Todo/Todo';
import { Container } from './App.styles'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Todo />
      </Container>
    </DndProvider>
  );
}

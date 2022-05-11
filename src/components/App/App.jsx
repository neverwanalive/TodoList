import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Todo } from '../Todo/Todo';
import { Container } from './App.styles'
import { GlobalStyle } from '../../global-styles';
import { BackgroundContext } from '../../context/background.context'
import backgroundImg from '../../assets/background.jpg'

export const App = () => {
  const _background = localStorage.getItem("background")
  const [background, changeBackground] = useState(_background || backgroundImg)

  useEffect(() => {
    if(background) localStorage.setItem("background", background)
  }, [background]) 

  return (
    <DndProvider backend={HTML5Backend}>
      <BackgroundContext.Provider value={{ background, changeBackground }}>
        <GlobalStyle/>
        <Container background={background}>
          <Todo />
        </Container>
      </BackgroundContext.Provider>
    </DndProvider>
  );
}

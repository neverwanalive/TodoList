import React from "react";
import { nanoid } from "nanoid";

import { Container, TitleContainer, Title, TaskBlock, TitleButton } from "./Column.styles";
import { Input} from '../Input/Input'
import { Task } from '../Task/Task'


export const Column = ({ name, changeList, list, columns, handleDeleteColumn, columnId }) => {
    const handleAdd = (inputValue) => {
        if(inputValue) {
            changeList((currList) => {
                return [...currList, {
                    name: inputValue,
                    columnId,
                    id: nanoid(),
                }]
            })
        }
    }
    return (
        <Container>
            <TitleContainer>
                <Title>{name}</Title>
                <TitleButton onClick={handleDeleteColumn.bind(this, columnId)}>-</TitleButton>
            </TitleContainer>
            <Input handleAdd={handleAdd} />
            <TaskBlock>
                {list.map((task) =>
                    <Task 
                        task={task}
                        key={task.id}
                        changeList={changeList}
                        columns={columns}
                        columnId={columnId}
                    />
                )}
            </TaskBlock>      
        </Container>
    )
}
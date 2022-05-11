import React from "react";
import { nanoid } from "nanoid";
import { useDrag, useDrop } from "react-dnd";

import { Container, TitleContainer, Title, TaskBlock, TitleButton } from "./Column.styles";
import { Input} from '../Input/Input'
import { Task } from '../Task/Task'


export const Column = ({ 
    name, 
    changeList, 
    list, 
    columns, 
    handleDeleteColumn, 
    columnId, 
    changeTaskColumnId,
    moveColumn
}) => {
    const [collectedDragColumn, dragRefColumn] = useDrag(() => ({
        type: 'column',
        item: { id: columnId }
    }))
    const [collectedDropColumn, dropRefColumn] = useDrop(() => ({
        accept: 'column',
        drop: ({ id }) => moveColumn(id, columnId)
    }))
    const [collectedDropTask, dropRefTask] = useDrop(() => ({
        accept: 'task',
        drop: (task) => changeTaskColumnId(task, columnId)
    }))
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
        <div ref={dropRefColumn}>
            <div ref={dropRefTask}>
                <Container ref={dragRefColumn}>
                    <TitleContainer>
                        <Title>{name}</Title>
                        <TitleButton onClick={handleDeleteColumn.bind(this, columnId)}>-</TitleButton>
                    </TitleContainer>
                    <Input handleAdd={handleAdd} />
                    <TaskBlock >
                        {list.map((task) =>
                            <Task 
                                changeTaskColumnId={changeTaskColumnId}
                                task={task}
                                key={task.id}
                                changeList={changeList}
                                columns={columns}
                                columnId={columnId}
                            />
                        )}
                    </TaskBlock>      
                </Container>
            </div>
        </div>  
    )
}
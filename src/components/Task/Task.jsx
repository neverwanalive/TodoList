import React from "react";

import { Container, TaskInput, ActionButton, DoneButton } from './Task.styles'
import { Button } from "../Todo/Todo.styles";

export const Task = ({ item, handleTaskChange, handleDelete, handleOnEdit, handleOnDone }) => {
    return (
        <Container>
            <TaskInput  type="text" onChange={handleTaskChange.bind(this, item)} value={item.name} disabled={!item.isEditing}/>
            <Button onClick={handleDelete.bind(this, item)}>-</Button>
            <ActionButton onClick={handleOnEdit.bind(this, item)}>{!item.isEditing ? "Edit" : "Save"}</ActionButton>
            <DoneButton  onClick={handleOnDone.bind(this, item)}>{!item.done ? "DONE" : "UNDO"}</DoneButton>
        </Container>
    )
}
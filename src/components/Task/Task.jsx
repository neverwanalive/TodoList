import React from "react";
import { useDrag } from "react-dnd";

import { Container, TaskInput, ActionButton} from './Task.styles'
import { Button } from "../Input/Input.styles";
import { Dropdown } from "../Dropdown";

export const Task = ({ task, changeList, columns, changeTaskColumnId }) => {
    const [collectedDrag, dragRef] = useDrag(() => ({
        type: 'task',
        item: task
    }))
    const handleDelete = () => {
        changeList((currList) => {
            return currList.filter((_task) => _task.id !== task.id)
            
        })
    }
    const handleOnEdit = () => {
        changeList((currList) => {
            return currList.map((_task) => {
                if(_task.id === task.id) {
                    return {..._task, isEditing: !_task.isEditing }
                } 
                return _task
            })
        })
    }
    const handleTaskChange = (e) => {
        changeList((currList) => {
            return currList.map((_task) => {
                if(_task.id === task.id) {
                    return {..._task, name: e.target.value }
                } 
                return _task
            })
        })
    }
    const handleOnDropdownChange = (columnId) => {
        changeTaskColumnId(task, columnId)
    }
    return (
        <Container ref={dragRef}>
            <TaskInput  type="text" onChange={handleTaskChange} value={task.name} disabled={!task.isEditing}/>
            <Button onClick={handleDelete}>-</Button>
            <ActionButton onClick={handleOnEdit}>{!task.isEditing ? "Edit" : "Save"}</ActionButton>
            <Dropdown columns={columns} onChange={handleOnDropdownChange} task={task}/>
        </Container>
    )
}
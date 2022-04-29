import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Task, Container, Main, Input, Button, ActionButton, TaskBlock, TaskInput } from "./Todo.styles";

export const Todo = () => {
    const [list, changeList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const handleAdd = () => {
        if(inputValue) {
            changeList((currList) => {
                return [...currList, {
                    name: inputValue, 
                    id: nanoid()
                }]
            })
            setInputValue('')
        }
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleDelete = (item) => {
        changeList((currList) => {
            return currList.filter((_item) => _item.id !== item.id)
            
        })
    }
    const handleChange = (item) => {
        changeList((currList) => {
            return currList.map((_item) => {
                if(_item.id === item.id) {
                    return {..._item, isEditing: !_item.isEditing }
                } 
                return _item
            })
        })
    }
    const handleTaskChange = (item, e) => {
        changeList((currList) => {
            return currList.map((_item) => {
                if(_item.id === item.id) {
                    return {..._item, name: e.target.value }
                } 
                return _item
            })
        })
    }
    return (
        <Main>
            <Container>
                <Input type="text" onChange={handleInputChange} value={inputValue}/>
                <Button onClick={handleAdd}>+</Button>
            </Container>
            <TaskBlock>
                {list.map(item =>
                    <Task>
                        <TaskInput type="text" onChange={handleTaskChange.bind(this, item)} value={item.name} disabled={!item.isEditing}/>
                        <Button onClick={handleDelete.bind(this, item)}>-</Button>
                        <ActionButton onClick={handleChange.bind(this, item)}>{!item.isEditing ? "Edit" : "Save"}</ActionButton>
                    </Task>
                )}
            </TaskBlock>    
        </Main>
    )
}
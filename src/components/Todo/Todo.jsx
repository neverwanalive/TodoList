import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Dropdown } from "../Dropdown"
import { Main, Head, Container, Input, Button, TaskBlock } from "./Todo.styles";
import { Task } from "../Task/Task";

export const Todo = () => {
    const [list, changeList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [activeItem, changeActiveItem] = useState('All')
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
    const handleOnEdit = (item) => {
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
    const handleOnDone = (item) => {
        changeList((currList) => {
            return currList.map((_item) => {
                if(_item.id === item.id) {
                    return {..._item, done: !_item.done}
                }
                return _item
            })
        })
    }
    
    const onChangeActiveItem = (activeItem) => {
        changeActiveItem (activeItem)
    }

    const getFilteredList = () => {
        switch (activeItem) {
            case 'All':
                return list
            case 'Done':
                return list.filter((item) => item.done)
            case 'In progress':
                return list.filter((item) => !item.done)
            default:
                return list
        }
    }

    return (
        <Main>
            <Head>
                <Container>
                    <Input type="text" onChange={handleInputChange} value={inputValue}/>
                    <Button onClick={handleAdd}>+</Button>
                </Container>
                <Dropdown cb={onChangeActiveItem}/>
            </Head>
            <TaskBlock>
                {getFilteredList().map((item) =>
                    <Task 
                        item={item}
                        handleTaskChange={handleTaskChange}
                        handleDelete={handleDelete}
                        handleOnEdit={handleOnEdit}
                        handleOnDone={handleOnDone}
                    />
                )}
            </TaskBlock>    
        </Main>
    )
}
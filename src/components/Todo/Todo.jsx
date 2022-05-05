import React, { useState } from "react";

import { Main, InputColumn, Columns, Title } from "./Todo.styles";
import { Column } from "../Column/Column";
import { Input } from "../Input/Input";
import { nanoid } from "nanoid";

export const Todo = () => {
    const [columns, updateColumns] = useState([])
    const [list, changeList] = useState([])
    const getFilteredList = (column) => {
        return list.filter((task) => task.columnId === column.id)
    }
    const handleAddColumn = (inputValue) => {
        updateColumns((currColumns) => {
            return [...currColumns, {
                name: inputValue,
                id: nanoid(),
            }]
        })
    }
    const handleDeleteColumn = (id) => {
        updateColumns((currColumns) => currColumns.filter((_column) => _column.id !== id))
        changeList((currList) => currList.filter((task) => task.columnId !== id))
    }
    return (
        
        <Main>
            <InputColumn>
                <Title>Add Column</Title>
                <Input handleAdd={handleAddColumn}/>
            </InputColumn>
            <Columns>
                {columns.map((column) => 
                    <Column 
                        name={column.name} 
                        changeList={changeList} 
                        list={getFilteredList(column)}
                        columns={columns}
                        handleDeleteColumn={handleDeleteColumn}
                        key={column.id}
                        columnId={column.id}
                    />
                )}
            </Columns>
        </Main>
    )
}
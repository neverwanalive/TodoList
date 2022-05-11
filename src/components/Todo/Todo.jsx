import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Main, InputColumn, Columns, Title, Container } from "./Todo.styles";
import { Column } from "../Column/Column";
import { Input } from "../Input/Input";
import { Sidebar } from "../Sidebar/Sidebar";

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
                order: columns.length
            }]
        })
    }
    const handleDeleteColumn = (id) => {
        updateColumns((currColumns) => currColumns.filter((_column) => _column.id !== id))
        changeList((currList) => currList.filter((task) => task.columnId !== id))
    }
    const changeTaskColumnId = (task, columnId) => {
        changeList((currList) => {
            return currList.map((_task) => {
                if(_task.id === task.id) {
                    return {..._task, columnId}
                }
                return _task
            })
        })
    }
    const sortColumnsByOrder = (columns) => {
        return [...columns].sort((a, b) => Number(a.order) -  Number(b.order))
    }
    const columnSwap = (currColumns, col, id) => {
        const columnSwap = currColumns.find(_col => _col.id === id)
        return {
            ...col,
            order: columnSwap.order
        }
    }
    const moveColumn = (columnIdDragging, columnIdSwap) => {
        if(columnIdDragging === columnIdSwap) return
        updateColumns(currColumns => {
            return sortColumnsByOrder(currColumns.map(col => {
                if(col.id === columnIdSwap){
                    return columnSwap(currColumns, col, columnIdDragging)
                }
                if(col.id === columnIdDragging) {
                    return columnSwap(currColumns, col, columnIdSwap)
                }
                return col
            }))
        })
    }
    return ( 
        <Main>
            <Container>
            <InputColumn>
                <Title>Add Column</Title>
                <Input handleAdd={handleAddColumn}/>
            </InputColumn>
            <Sidebar/>
            </Container>
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
                        changeTaskColumnId={changeTaskColumnId}
                        moveColumn={moveColumn}
                    />
                )}
            </Columns>
        </Main>
    )
}
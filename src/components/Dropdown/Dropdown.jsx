import React, { useState, useEffect } from "react";

import { Container, Block, ItemBlock } from "./Dropdown.styles"

export const Dropdown = ({ onChange, columns, task}) => {
    const [isVisible, changeVisability] = useState(false)
    const Items = () => {
        return columns.filter((column) => column.id !== task.columnId).map((column) => <ItemBlock onClick={handleActiveItem.bind(this, column.id)} key={column.id}>{column.name}</ItemBlock>)    
    }

    const handleVisability = (e) => {
        e.stopPropagation()
        changeVisability((currVisability) => !currVisability)
    }
    const handleActiveItem = (columnId) => {
        changeVisability(false)
        onChange(columnId)
    }
    const offVisability = () => {
        changeVisability(false)
    }
    useEffect(() => {
        window.addEventListener('click', offVisability)
        return () => {
            window.removeEventListener('click', offVisability)
        }
    }, [])
    return (
        <Container  onClick={handleVisability} c={isVisible}>
            Move
            <Block onClick={(e) => e.stopPropagation()}>{isVisible && <Items/>}</Block>
        </Container>
    )
}
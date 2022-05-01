import React, { useState, useEffect } from "react";

import { Container, Block, ItemBlock } from "./Dropdown.styles"

export const Dropdown = ({ cb }) => {
    const [isVisible, changeVisability] = useState(false)
    const list = ['All', "In progress", "Done"]
    const [activeItem, setActiveItem] = useState(list[0])
    const Items = () => {
        return list.map((item) => <ItemBlock onClick={handleActiveItem.bind(this, item)} b={item === activeItem} key={item}>{item}</ItemBlock>)    
    }

    const handleVisability = (e) => {
        e.stopPropagation()
        changeVisability((currVisability) => !currVisability)
    }
    const handleActiveItem = (item) => {
        setActiveItem(item)
        changeVisability(false)
        cb(item)
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
            {activeItem}
            <Block onClick={(e) => e.stopPropagation()}>{isVisible && <Items/>}</Block>
        </Container>
    )
}
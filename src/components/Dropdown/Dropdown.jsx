import React, { useState } from "react";

import { Container, Block, ItemBlock } from "./Dropdown.styles"

export const Dropdown = ({ cb }) => {
    const [isVisible, changeVisability] = useState(false)
    const list = ['All', "In progress", "Done"]
    const [activeItem, setActiveItem] = useState(list[0])
    const Items = () => {
        return list.map((item) => <ItemBlock onClick={handleActiveItem.bind(this, item)} a={true} b={item === activeItem} >{item}</ItemBlock>)    
    }
    const handleVisability = () => {
        changeVisability((currVisability) => !currVisability)
    }
    const handleActiveItem = (item) => {
        setActiveItem(item)
        changeVisability(false)
        cb(item)
    }
    return (
        <Container onClick={handleVisability}>
            {activeItem}
            <Block onClick={(e) => e.stopPropagation()}>{isVisible && <Items/>}</Block>
        </Container>
    )
}
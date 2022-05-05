import React, { useState } from "react";

import { Container, InputBlock, Button } from "../Input/Input.styles"

export const Input = ({ handleAdd }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if(inputValue) handleAdd(inputValue)
        setInputValue('')
    }
    
    return (
        <Container>
            <InputBlock type="text" onChange={handleInputChange} value={inputValue}/>
            <Button onClick={handleClick}>+</Button>
        </Container>
    )
}
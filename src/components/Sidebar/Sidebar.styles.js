import styled from "styled-components"

export const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #4B4B4B;
    cursor: pointer;
    position: absolute;
    &:hover {
        opacity: 70%;
    }
    margin-top: 50px;
`

export const ChangeBackgroundButton = styled.label`
    padding: 5px 15px;
    color: white;
    background-color: #4b4b4b;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        opacity: 70%;
    }
`

export const Input = styled.input`
    display: none;
`
import styled from "styled-components"

import { InputBlock, Button } from '../Input/Input.styles'

export const Container = styled.div` 
    font-weight: 100;
    font-size: 20px;
    width: 250px;
    height: 40px;
    margin-top: 10px;
    padding: 7px 7px;
    border-radius: 3px;
    border: 1px solid #4b4b4b;
    background-color: #FAFAFB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-break: break-all;
`

export const TaskInput = styled(InputBlock)`
width:50%;
word-break: break-all;
    background-color: #FAFAFB;
    color: #4B4B4B;
    &:focus {
        color:black;
    }
`

export const ActionButton = styled(Button)`
    width: 40px;
`

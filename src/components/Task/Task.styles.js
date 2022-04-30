import styled from "styled-components"

import { Input, Button } from '../Todo/Todo.styles'

export const Container = styled.div` 
    font-weight: 100;
    font-size: 40px;
    width: 390px;
    margin-top: 10px;
    padding: 15px 30px;
    background-color: #FAFAFB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-break: break-all;
`

export const TaskInput = styled(Input)`
    background-color: #FAFAFB;
`

export const ActionButton = styled(Button)`
    font-size: 15px;
    width: 50px;
`

export const DoneButton = styled(Button)`
    font-size: 15px;
    width: 90px;
`
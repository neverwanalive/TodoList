import styled from 'styled-components'

import { Button } from "../Input/Input.styles";

export const Container = styled.div`
    margin-right: 100px;
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: black; 
    text-align: center;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TitleButton = styled(Button)`
    width: 30px;
    height: 30px;
    font-size: 15px;
`

export const TaskBlock = styled.div`
`
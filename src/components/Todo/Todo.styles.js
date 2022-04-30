import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Head = styled.div`
    display: flex;
`

export const Container = styled.div`
    border: 1px solid gray;
    border-radius: 7px;
    padding: 12px 12px;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    display: flex;
    font-size: 30px;
    font-weight: 100;
    width: 70%;
    border: none;
    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    font-size: 30px;
    width: 40px;
    height: 40px;
    margin-left: 15px;
    border: none;
    color: white;
    background-color: #8BC34A;
    text-align: center;
    cursor: pointer;
    &:hover {
        border: 1px solid gray;
    }
`

export const TaskBlock = styled.div`
    margin-top: 70px;
`
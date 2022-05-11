import styled from "styled-components"

export const Container = styled.div`
    border-radius: 3px;
    padding: 7px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    width: 250px;
    height: 40px;
    background-color: white;
`

export const InputBlock = styled.input`
    display: flex;
    font-size: 20px;
    font-weight: 700;
    background: none;
    color: #4b4b4b;
    width: 80%;
    border: 0px;
    box-shadow: none;
    border-radius: 7px;
    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #4B4B4B;
    cursor: pointer;
    &:hover {
        opacity: 90%;
    }
`
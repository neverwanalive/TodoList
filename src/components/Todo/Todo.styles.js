import styled from 'styled-components'


export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.div`
    font-size: 70px;
    color: #fff;
    margin-left: 215px;
`

export const Head = styled.div`
    display: flex;
    margin-top: 50px;
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
    border: 0px;
    box-shadow: none;
    border-radius: 7px;
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
    border-radius: 7px;
    color: white;
    background-color: #4B4B4B;
    text-align: center;
    cursor: pointer;
`

export const TaskBlock = styled.div`
    margin-top: 160px;
`
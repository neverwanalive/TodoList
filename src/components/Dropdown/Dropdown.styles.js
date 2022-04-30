import styled from 'styled-components'

export const Container = styled.div`
    margin-left: 50px;
    width: 200px;
    background-color: #8BC34A;
    border-radius: 7px;
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`

export const Block = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: -100px;
    width: 200px;
    font-size: 30px;
    color: white;
    border-radius: 7px;
`

export const ItemBlock = styled.div`
    color: ${({ b }) => b ? '#000' : '#FFF'};
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
`
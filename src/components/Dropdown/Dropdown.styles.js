import styled from 'styled-components'

export const Container = styled.div`
    margin-left: 50px;
    width: 200px;
    background-color: #4B4B4B;
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: ${({ c }) => c ? '7px 7px 0px 0px' : '7px'};
    cursor: pointer;
`

export const Block = styled.div`
    background-color: #4B4B4B;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: -160px;
    width: 200px;
    font-size: 30px;
    border-radius: 0px 0px 7px 7px;
`

export const ItemBlock = styled.div`
    width: 100%;
    background-color: ${({ b }) => b ? '#5A5A5A' : '#4B4B4B'};
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
    :last-child {border-radius: 0px 0px 7px 7px};
    padding: 10px 0px;
`


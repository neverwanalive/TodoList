import styled from 'styled-components'

export const Container = styled.div`
    height: 20px;
    width: 40px;
    background-color: #4B4B4B;
    color: white;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: ${({ c }) => c ? '3px 3px 0px 0px' : '3px'};
    cursor: pointer;
`

export const Block = styled.div`
    background-color: #4B4B4B;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 20px;
    width: 40px;
    font-size: 10px;
    border-radius: 0px 0px 3px 3px;
    z-index: 1;
`

export const ItemBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
    :last-child {border-radius: 0px 0px 3px 3px};
    padding: 5px 0px;
`


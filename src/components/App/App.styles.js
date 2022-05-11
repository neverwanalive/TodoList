import styled from 'styled-components'

export const Container = styled.div`
    background-size: cover;
    background-position: center;
    background-image: url(${({ background }) => background});
    padding: 0 50px;
`
import React from 'react'
import styled from 'styled-components'
const MailSendSuccess = () => {
    return (
        <Container>
            The mail has been sent to graduate successfully
        </Container>
    )
}

export default MailSendSuccess


const Container = styled.div`
    width:150px;
    height:100px;
    position:absolute;
    top:20%;
    left:30%;
    z-index:2;
    background-color:#E5E7E9;
`
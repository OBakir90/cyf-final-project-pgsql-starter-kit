import React from 'react'
import axios from 'axios'
import { Formik, Form } from 'formik';
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import styled from 'styled-components'

const MailBox = () => {

    const handleSubmit = (values)=>{
        const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
        axios.post('http://localhost:3100/api/send', values, config)
        console.log('submitted', values)
    }
    const initialValue ={sender:'', receiver:'', message:''}

    return (
        <Container>
            <Formik
				initialValues={initialValue}
				onSubmit={(values) => handleSubmit(values)}
				// validationSchema={ValidationSchema}
			>
				{(props) => (
					<>
						<StyledForm id='formLogin' noValidate>
							<FormField
								name='sender'
								// placeholder='First Name'
								label='Your Email'
							/>
                            <FormField
								name='receiver'
								// placeholder='First Name'
								label='Graduate`s Email'
							/>
                             <FormField
								name='message'
								// placeholder='First Name'
								label='Message'
							/>
                        </StyledForm>
						<StyledButton name='Send email' className='sm' type='submit' handleClick={ props.handleSubmit}  />
					</>
				)}
			</Formik>
        </Container>
    )
}

export default MailBox


const Container = styled.div`
    position:absolute;
    top:25%;
    left:35%;
    background-color:gray;
    z-index:1;
`

const StyledForm=styled(Form)`
`
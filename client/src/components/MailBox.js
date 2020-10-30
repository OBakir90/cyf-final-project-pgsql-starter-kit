import React from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import styled from 'styled-components'

const MailBox = (props) => {

    const handleSubmit = async (values)=>{
        const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		await axios.post('http://localhost:3100/api/send', values, config)
		props.setMailBox(false)
		props.setSuccess(true)
    }
    const initialValue ={sender:'cyf.graduate.platform@gmail.com', receiver:props.email, subject:'', message:''}

    return (
        <Container>
            <Formik
				initialValues={initialValue}
				onSubmit={(values) => handleSubmit(values)}
				validationSchema={ValidationSchema}
			>
				{(props) => (
					<>
						<StyledForm id='formLogin' noValidate>
							<FormField
								disabled
								name='sender'
								label='CYF graduate platform'
							/>
                            <FormField
								name='receiver'
								label='Graduate`s email'
							/>
							<FormField
								name='subject'
								label='Subject'
								height='80px'
								as='textarea'
							/>
                            <FormField
								name='message'
								label='Message'
								height='120px'
								as='textarea'
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


const ValidationSchema = Yup.object().shape({
	receiver: Yup.string()
		.email()
		.required("Required"),
	subject: Yup.string()
		.required("Required")
		.max(150, 'Subject must be less than 150'),
	message: Yup.string()
		.required("Required")
		.max(600, 'Subject must be less than 200'),
});

const Container = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	width:600px;
	height:700px;
    position:absolute;
    top:25%;
    left:35%;
    background-color:#E5E7E9;
    z-index:1;
`

const StyledForm=styled(Form)`
`
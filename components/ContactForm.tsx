"use client"

import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import {sendContactForm} from "../lib/api"

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
}
const initState = {values:initValues}

export default function ContactForm() {

    const [state, setState] = useState(initState)

    const [touched, setTouched] = useState({})

    const {values, isLoading} = state

    const onBlur = ({ target }:any) => setTouched((prev) => ({
        ...prev,
        [target.name]:true
        
    }))

    const handleChange = ({target}: any) => setState((prev) => 
    ({
        ...prev, 
        values: {
            ...prev.values,
            [target.name]: target.value
        },
    }))
    
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }))
        await sendContactForm(values)
    }
    
    return (
        <Container className="bg-white/30 p-6">
            <Heading className="bold-32 flexCenter">Contact Us</Heading>            
            
            <FormControl isRequired isInvalid={touched.name && !values.name} className="m-3" >
                <FormLabel className="mr-1 w-10">Name</FormLabel>
                <Input
                    type="text"
                    name="name"
                    errorBorderColor="red.300"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="p-1 ml-1 outline-none rounded-sm bg-white/90 w-60"
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.name && !values.email} className="m-3"> 
                <FormLabel className="mr-1 w-10">Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    errorBorderColor="red.300"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="p-1 ml-1 outline-none rounded-sm bg-white/90 w-60"
                />
                
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.name && !values.subject} className="m-3"> 
                <FormLabel className="mr-1 w-10">Subject</FormLabel>
                <Input
                    type='text'
                    name="subject"
                    errorBorderColor="red.300"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="p-1 ml-1 outline-none rounded-sm bg-white/90 w-60"
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.name && !values.message} className="m-3"> 
                <FormLabel className="mr-1 w-10">Message</FormLabel>
                <Input
                    type='text'
                    name="message"
                    errorBorderColor="red.300"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="p-1 ml-1 outline-none rounded-sm bg-white/90 w-60"
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>   

            <Button
                variant="outline"
                colorScheme='blue'
                isLoading={isLoading}
                disabled={!values.name || !values.email || !values.subject || !values.message}
                onClick={onSubmit}
                className="bg-blue-70 p-1 mt-4 mx-8 text-white rounde-sm hover:bg-black/80 flexCenter mb-4"
            >Submit</Button>             

        
        </Container>
    )
}
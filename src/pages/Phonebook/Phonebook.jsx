import Box from "components/Box/Box"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"

import { Title } from "components/Title/Title"
import { PhonebookWrapper } from "./Phonebook.styled"

export const Phonebook = () => {
    return (<PhonebookWrapper>
        <Box>
            <Title children={'Phonebook'}></Title>
            <ContactForm />
        </Box>
        <Box>
            <Title children={'Contacts'}></Title>
            <ContactList />
        </Box>
    </PhonebookWrapper>)



}
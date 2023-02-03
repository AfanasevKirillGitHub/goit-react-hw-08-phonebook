import Box from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      bg="black"
      textAlign="center"
    >
      <Box width={500}>
        <Title children={'Phonebook'}></Title>
        <ContactForm />
      </Box>
      <Box width={500}>
        <Title children={'Contacts'}></Title>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};

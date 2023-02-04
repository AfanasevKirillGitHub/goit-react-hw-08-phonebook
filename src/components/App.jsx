import Box from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm';

import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Box>
        <Title children={'Phonebook'}></Title>
        <ContactForm />
      </Box>
      <Box>
        <Title children={'Contacts'}></Title>
        <ContactList />
      </Box>
    </Layout>
  );
};

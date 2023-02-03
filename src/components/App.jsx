import Box from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export const App = () => {

  // Local storage //

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? basicContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Box mx="auto" maxWidth={500}>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        Phonebook
      </h2>
      <ContactForm />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Box
        p={32}
        mx="auto"
        maxWidth={500}
        background="#292929"
        borderRadius={30}
      >
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};

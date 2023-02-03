import { List, Item, Text, Button } from './ContactList.styled';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactList = () => {

  const filter = useSelector(({ filter }) => filter)
  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const dispatch = useDispatch();

  const onClcickDeleteContact = contactId => dispatch(deleteContact(contactId));


  const toLowerCaseFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const normalizeContact = toLowerCaseFilter();




  return (
    <List>
      {normalizeContact.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => dispatch(onClcickDeleteContact(id))}>
              Delete
              <MdDeleteForever size={30} />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

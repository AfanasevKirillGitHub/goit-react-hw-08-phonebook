import {
  List,
  Item,
  Text,
  Button,
  ContactListWrapper,
} from './ContactList.styled';
import { MdDeleteForever } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';


export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const toLowerCaseFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const normalizeContact = toLowerCaseFilter();

  return (
    <ContactListWrapper>
      <Filter />
      <List>
        {normalizeContact?.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Button
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
              >
                <MdDeleteForever color="black" size={30} />
              </Button>
            </Item>
          );
        })}
      </List>
    </ContactListWrapper>
  );
};

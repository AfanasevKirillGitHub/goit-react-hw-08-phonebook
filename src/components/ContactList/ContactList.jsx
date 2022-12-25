import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './ContactList.styled';
import { MdDeleteForever } from 'react-icons/md';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>

            <Button type="button" onClick={() => onDelete(id)}>
              Delete
              <MdDeleteForever size={30} />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

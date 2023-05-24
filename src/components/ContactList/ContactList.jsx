import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Container, Button } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <Container>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {`${name}: ${number}`}
          <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </Container>
  );
}

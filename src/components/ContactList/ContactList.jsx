import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { Container, Button } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

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

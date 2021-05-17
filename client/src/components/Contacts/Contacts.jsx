import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../../contexts/Contacts/ContactsProvider.js';
import { ListGroupItems } from './styles.js';

const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <ListGroupItems variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroupItems>
  );
};

export default Contacts;

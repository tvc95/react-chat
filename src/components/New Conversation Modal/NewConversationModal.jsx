/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useContacts } from '../../contexts/Contacts/ContactsProvider.js';
import { useConversations } from '../../contexts/Conversations/ConversationsProvider.js';

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleCheckboxChange = contactId => {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => contactId !== prevId);
      }
      return [...prevSelectedContactIds, contactId];
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>
        <h1>Create Contact</h1>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
        </Form>

        <Button type="submit">Create</Button>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;

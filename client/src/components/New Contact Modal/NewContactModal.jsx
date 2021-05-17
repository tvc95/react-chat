/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useContacts } from '../../contexts/Contacts/ContactsProvider.js';
import { NewContactModalDiv } from './styles.js';

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();

  const { createContact } = useContacts();

  const handleSubmit = event => {
    event.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <NewContactModalDiv>
      <Modal.Header closeButton>
        <h1>Create Contact</h1>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </NewContactModalDiv>
  );
};

export default NewContactModal;

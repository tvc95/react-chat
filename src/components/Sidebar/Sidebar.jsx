/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Tab, Nav, Modal } from 'react-bootstrap';
import Contacts from '../Contacts/Contacts.jsx';
import Conversations from '../ConversationComp/Conversations.jsx';
import NewConversationModal from '../New Conversation Modal/NewConversationModal.jsx';
import NewContactModal from '../New Contact Modal/NewContactModal.jsx';
import { SideBarContainer, SideBarFooter } from './styles.js';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);

  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SideBarContainer className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="flex-grow-1 border-end overflow-auto">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>

          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>

        <SideBarFooter className="p-2 border-top border-end small">
          <p>
            Your ID: <span className="text-muted">{id}</span>
          </p>
        </SideBarFooter>

        <Button
          onClick={() => setModalOpen(true)}
          variant="success"
          className="rounded-0 border-end"
        >
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </SideBarContainer>
  );
};

export default Sidebar;

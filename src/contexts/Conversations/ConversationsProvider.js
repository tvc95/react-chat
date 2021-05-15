/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { useContacts } from '../Contacts/ContactsProvider.js';

const ConversationsContext = React.createContext();

export const useConversations = () => {
  return useContext(ConversationsContext);
};

export const ConversationsProvider = ({ children }) => {
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const [conversations, setConversations] = useLocalStorage(
    'conversations',
    [],
  );

  const { contacts } = useContacts();

  const createConversation = recipients => {
    setConversations(prevConversations => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(cont => {
        return cont.id === recipient;
      });

      const name = (contact && contact.name) || recipient;

      return {
        id: recipient,
        name,
      };
    });

    const selected = index === selectedConversationIndex;

    return { ...conversation, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
};

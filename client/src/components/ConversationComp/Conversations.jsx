/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../contexts/Conversations/ConversationsProvider.js';
import { ListGroupItems } from './styles.js';

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroupItems variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients.map(recipient => recipient.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroupItems>
  );
};

export default Conversations;

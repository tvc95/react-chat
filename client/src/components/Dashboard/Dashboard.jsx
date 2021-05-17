/* eslint-disable react/prop-types */
import React from 'react';
import { useConversations } from '../../contexts/Conversations/ConversationsProvider.js';
import OpenConversation from '../Open Conversation/OpenConversation.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { DashboardContainer } from './styles.js';

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <DashboardContainer className="d-flex">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </DashboardContainer>
  );
};

export default Dashboard;

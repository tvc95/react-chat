/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import GlobalStyle from './styles/global.js';
import { ContactsProvider } from './contexts/Contacts/ContactsProvider.js';
import { ConversationsProvider } from './contexts/Conversations/ConversationsProvider.js';
import { SocketProvider } from './contexts/Socket/SocketProvider.js';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return (
    <div>
      {id ? dashboard : <Login onIdSubmit={setId} />}
      <GlobalStyle />
    </div>
  );
}

export default App;

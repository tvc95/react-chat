/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import GlobalStyle from './styles/global.js';
import { ContactsProvider } from './contexts/Contacts/ContactsProvider.js';
import { ConversationsProvider } from './contexts/Conversations/ConversationsProvider.js';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return (
    <div>
      {id ? dashboard : <Login onIdSubmit={setId} />}
      <GlobalStyle />
    </div>
  );
}

export default App;

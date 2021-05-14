/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

import { LoginBtn, LoginContainer } from './styles.js';

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <LoginContainer className="align-items-center d-flex">
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>

        <div id="buttons">
          <LoginBtn type="submit" variant="success">
            Login
          </LoginBtn>
          <Button onClick={createNewId} variant="secondary">
            Create a new ID
          </Button>
        </div>
      </Form>
    </LoginContainer>
  );
};

export default Login;

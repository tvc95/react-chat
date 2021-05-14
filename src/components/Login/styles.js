/* eslint-disable import/prefer-default-export */
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

export const LoginContainer = styled(Container)`
  height: 100vh;

  #buttons {
    margin-top: 1rem;
  }
`;

export const LoginBtn = styled(Button)`
  margin-right: 0.5rem;
`;

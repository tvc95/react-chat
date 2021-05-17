/* eslint-disable import/prefer-default-export */
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

export const ListGroupItems = styled(ListGroup)`
  .list-group-item {
    background-color: #2c434c;
    border-color: #2c434c;
    color: white;
  }

  .list-group-item.active {
    background-color: #6e797f;
    border-color: #6e797f;
  }
`;

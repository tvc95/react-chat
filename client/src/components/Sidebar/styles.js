/* eslint-disable import/prefer-default-export */
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 250px;
`;

export const SideBarFooter = styled.div`
  background: #00bfa5;

  p {
    margin: 0px;
  }
`;

export const NavComponent = styled(Nav)`
  .nav-item .nav-link {
    color: #cccccc;
    font-weight: 600;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
    background-color: #033f3f;
    border-color: #033f3f #033f3f #033f3f;
  }

  .nav-item.show .nav-link,
  .nav-link.active {
    color: white;
    font-weight: 600;
    background-color: #088c8c;
    border-color: #088c8c #088c8c #088c8c;
  }
`;

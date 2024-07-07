import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Toolbar= () => {
  return (
    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
         Tracker
        </NavLink>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to={`/`}>Main</NavLink>
          <NavLink className="nav-link" to={'/meal/add'}>Add new Meal</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
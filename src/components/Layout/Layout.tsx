import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import {Container, Row} from 'react-bootstrap';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Container>
          <Row>
            {children}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Layout;
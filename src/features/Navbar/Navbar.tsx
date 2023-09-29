import React, { useState } from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import { Icon } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';

import './Navbar.scss';
import { SignedOutMenu } from './SignedOutMenu';
import { SignedInMenu } from './SignedInMenu';

export const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const { push } = useHistory();

  const handleSignOut = () => {
    setAuth(false);
    push('/');
  };

  return (
    <Container fluid className="navbar">
      <Menu inverted stackable className="navbar_item">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <Icon name="coffee" style={{ marginRight: '12px' }} />
            Events
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {auth && (
            <Menu.Item as={NavLink} to="/create-event">
              <Button positive inverted content="Create Event" />
            </Menu.Item>
          )}
          {auth ? (
            <SignedInMenu signOut={handleSignOut} />
          ) : (
            <SignedOutMenu setAuth={setAuth} />
          )}
        </Container>
      </Menu>
    </Container>
  );
};

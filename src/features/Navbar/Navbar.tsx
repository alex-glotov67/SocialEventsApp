import React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import { Icon } from 'semantic-ui-react';

import './Navbar.scss';

export const Navbar: React.FC = () => (
  <Menu inverted stackable className="navbar">
    <Container>
      <Menu.Item header>
        <Icon name="coffee" style={{ marginRight: '12px' }} />
        Events
      </Menu.Item>
      <Menu.Item name="Events" />
      <Menu.Item>
        <Button positive inverted content="Create Event" />
      </Menu.Item>
      <Menu.Item position="right">
        <Button basic inverted content="Log In" />
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: '12px' }}
        />
      </Menu.Item>
    </Container>
  </Menu>
);

import React from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';

interface Props {
  signOut: () => void;
}

export const SignedInMenu: React.FC<Props> = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={user} />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-event"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            text="Sign Out"
            icon="power"
            onClick={() => signOut()}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

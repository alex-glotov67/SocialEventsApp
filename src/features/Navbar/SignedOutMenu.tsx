import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

interface Props {
  setAuth: (auth: boolean) => void;
}

export const SignedOutMenu: React.FC<Props> = ({ setAuth }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={() => setAuth(true)} />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

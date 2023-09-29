import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const { push } = useHistory();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Icon name="coffee" style={{ marginRight: '12px' }} />
          Re-vents
        </Header>
        <Button size="huge" inverted onClick={() => push('/events')}>
          Get started
          <Icon name="arrow right" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

import React from 'react';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import food from '../../../../assets/food.jpg';

import './EventDetailHeader.scss';

export const EventDetailHeader = () => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image className="EventImage" src={food} fluid />

        <Segment basic className="EventImageTextStyle">
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content="Event Title"
                  style={{ color: 'white' }}
                />
                <p>Event Date</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

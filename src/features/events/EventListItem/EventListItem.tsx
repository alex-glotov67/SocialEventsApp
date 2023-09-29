import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EventListAttendee } from '../EventListAttendee/EventListAttendee';
import { Event } from '../event.types';

interface Props {
  event: Event;
  setCurrentEvent?: (event: Event) => void;
  deleteCurrentEvent?: (eventId: string) => void;
}

export const EventListItem: React.FC<Props> = ({
  event,
  setCurrentEvent,
  deleteCurrentEvent,
}) => {
  const { title, date, hostPhotoURL, description, venue, hostedBy, attendees } =
    event;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <Item.Description>Hosted by {hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {date}
          <Icon name="marker" /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button
          color="teal"
          floated="right"
          content="View"
          // onClick={() => setCurrentEvent && setCurrentEvent(event)}
          as={Link}
          to={`/events/${event.id}`}
        />
        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => deleteCurrentEvent && deleteCurrentEvent(event.id)}
        />
      </Segment>
    </Segment.Group>
  );
};

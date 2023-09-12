import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { EventAttendee } from '../event.types';

interface Props {
  attendee: EventAttendee;
}

export const EventListAttendee: React.FC<Props> = ({ attendee }) => {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};

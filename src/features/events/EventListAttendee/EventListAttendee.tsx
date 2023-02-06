import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { IAttendee } from '@/types/event.types';

interface EventListAttendeeProps {
  attendee: IAttendee;
}

export const EventListAttendee: React.FC<EventListAttendeeProps> = ({
  attendee,
}) => {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};

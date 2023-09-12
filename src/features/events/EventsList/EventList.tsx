import React from 'react';

import { EventListItem } from '../EventListItem/EventListItem';
import { Event } from '../event.types';

interface Props {
  events: Event[];
}

export const EventList: React.FC<Props> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};

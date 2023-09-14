import React from 'react';

import { EventListItem } from '../EventListItem/EventListItem';
import { Event } from '../event.types';

interface Props {
  events: Event[];
  setCurrentEvent?: (event: Event) => void;
  deleteCurrentEvent?: (eventId: string) => void;
}

export const EventList: React.FC<Props> = ({
  events,
  setCurrentEvent,
  deleteCurrentEvent,
}) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          setCurrentEvent={setCurrentEvent}
          deleteCurrentEvent={deleteCurrentEvent}
        />
      ))}
    </>
  );
};

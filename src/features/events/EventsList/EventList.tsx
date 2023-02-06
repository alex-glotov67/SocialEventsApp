import React from 'react';
import { IEvent } from '@/types/event.types';
import { EventListItem } from '../EventListItem/EventListItem';

interface EventListProps {
  events: IEvent[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
};

import React, { useCallback, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../EventsList/EventList';
import { EventForm } from '../EventForm/EventForm';
import { sampleData } from '../../../api/sampleData';
import { Event } from '../event.types';

interface Props {
  isFormOpen: boolean;
  setFormOpen: (formOpen: boolean) => void;
  selectedEvent?: Event;
  setSelectedEvent?: (event: Event) => void;
}

export const EventDashboard: React.FC<Props> = ({
  isFormOpen,
  setFormOpen,
  selectedEvent,
  setSelectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  const handleSetEvent = useCallback((event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  }, []);

  const handleEditEvent = useCallback((event: Event) => {
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) =>
        prevEvent.id === event.id ? event : prevEvent
      )
    );
  }, []);

  const handleDeleteEvent = useCallback((eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.filter((prevEvent) => prevEvent.id !== eventId)
    );
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          setCurrentEvent={setSelectedEvent}
          deleteCurrentEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvent={handleSetEvent}
            updateEvent={handleEditEvent}
            currentEvent={selectedEvent}
            key={selectedEvent ? selectedEvent?.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

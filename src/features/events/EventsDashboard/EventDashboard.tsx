import React, { useCallback, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../EventsList/EventList';
import { sampleData } from '../../../api/sampleData';

export const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // const handleSetEvent = useCallback((event: Event) => {
  //   setEvents((prevEvents) => [...prevEvents, event]);
  // }, []);

  // const handleEditEvent = useCallback((event: Event) => {
  //   setEvents((prevEvents) =>
  //     prevEvents.map((prevEvent) =>
  //       prevEvent.id === event.id ? event : prevEvent
  //     )
  //   );
  // }, []);

  const handleDeleteEvent = useCallback((eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.filter((prevEvent) => prevEvent.id !== eventId)
    );
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteCurrentEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

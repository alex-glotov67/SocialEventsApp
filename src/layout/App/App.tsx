import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { EventDashboard } from '../../features/events/EventsDashboard/EventDashboard';
import { Navbar } from '../../features/Navbar/Navbar';
import { Event } from '../../features/events/event.types';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const handleSetCurrentEvent = (event: Event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleSetFormOpen = (isFormOpen: boolean) => {
    setFormOpen(isFormOpen);
    setSelectedEvent(undefined);
  };

  return (
    <>
      <Navbar setFormOpen={handleSetFormOpen} />
      <Container className="main">
        <EventDashboard
          isFormOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          setSelectedEvent={handleSetCurrentEvent}
        />
      </Container>
    </>
  );
}

export default App;

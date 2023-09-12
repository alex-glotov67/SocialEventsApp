import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { EventDashboard } from '../../features/events/EventsDashboard/EventDashboard';
import { Navbar } from '../../features/Navbar/Navbar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard isFormOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;

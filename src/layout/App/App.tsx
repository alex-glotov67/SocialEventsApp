import React from 'react';
import { Container } from 'semantic-ui-react';
import { EventDashboard } from '../../features/events/EventsDashboard/EventDashboard';
import { Navbar } from '../../features/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;

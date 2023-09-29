import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { EventDashboard } from '../../features/events/EventsDashboard/EventDashboard';
import { Navbar } from '../../features/Navbar/Navbar';
import { HomePage } from '../../features/home/HomePage';
import { EventDetailPage } from '../../features/events/EventDetail/EventDetailPage';
import { EventForm } from '../../features/events/EventForm/EventForm';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:eventId" component={EventDetailPage} />
              <Route
                path={['/create-event', '/manage/:id']}
                component={EventForm}
              />
              {/* <EventDashboard
      isFormOpen={formOpen}
      setFormOpen={setFormOpen}
      selectedEvent={selectedEvent}
      setSelectedEvent={handleSetCurrentEvent}
    /> */}
            </Container>
          </>
        )}
      />
    </Switch>
  );
}

export default App;

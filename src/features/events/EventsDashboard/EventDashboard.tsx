import React from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../EventsList/EventList';

export const EventDashboard: React.FC = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>Right</Grid.Column>
    </Grid>
  );
};

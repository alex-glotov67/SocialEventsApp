import React from 'react';
import { Grid } from 'semantic-ui-react';
import { EventForm } from '../EventForm/EventForm';
import { EventList } from '../EventsList/EventList';
import { sampleData } from '@/api/sampleData';

export const EventDashboard: React.FC = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
};

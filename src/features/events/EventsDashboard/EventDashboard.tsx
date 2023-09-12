import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../EventsList/EventList';
import { EventForm } from '../EventForm/EventForm';
import { sampleData } from '../../../api/sampleData';

interface Props {
  isFormOpen: boolean;
  setFormOpen: (formOpen: boolean) => void;
}

export const EventDashboard: React.FC<Props> = ({
  isFormOpen,
  setFormOpen,
}) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

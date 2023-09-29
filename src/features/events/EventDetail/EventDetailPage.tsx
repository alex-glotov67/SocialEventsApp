import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { EventDetailChat } from './EventDetailChat';
import { EventDetailHeader } from './EventDetailHeader/EventDetailHeader';
import { EventDetailInfo } from './EventDetailInfo';
import { EventDetailSidebar } from './EventDetailSidebar';

export const EventDetailPage = () => {
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailHeader />
        <EventDetailInfo />
        <EventDetailChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailSidebar />
      </GridColumn>
    </Grid>
  );
};

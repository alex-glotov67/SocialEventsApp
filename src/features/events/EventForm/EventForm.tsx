import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../event.types';
import user from '../../../assets/user.png';

import './EventForm.scss';

interface Props {
  setFormOpen: (formOpen: boolean) => void;
  setEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  currentEvent?: Event;
}

const initialValues: Partial<Event> = {
  title: '',
  category: '',
  description: '',
  city: '',
  venue: '',
  date: '',
};

export const EventForm: React.FC<Props> = ({
  setFormOpen,
  setEvent,
  currentEvent,
  updateEvent,
}) => {
  const [values, setValues] = useState(currentEvent || initialValues);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = () => {
    if (currentEvent) {
      updateEvent({ ...currentEvent, ...values });
    } else {
      setEvent({
        ...values,
        id: uuidv4().toString(),
        hostedBy: 'Bob',
        attendees: [],
        hostPhotoURL: user,
      } as Event);
    }
    setFormOpen(false);
  };

  return (
    <Segment clearing className="eventForm_item">
      <Header content={currentEvent ? 'Edit Event' : 'Create a new Event'} />
      <Form>
        <Form.Field>
          <input
            name="title"
            type="text"
            placeholder="Event title"
            value={values.title}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={values.category}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={values.description}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={values.city}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="venue"
            type="text"
            placeholder="Venue"
            value={values.venue}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="date"
            type="date"
            placeholder="Date"
            value={values.date}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          positive
          content="Submit"
          onClick={handleOnSubmit}
        />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export interface EventAttendee {
  id: string;
  name: string;
  photoURL: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  city: string;
  venue: string;
  hostedBy: string;
  hostPhotoURL: string;
  attendees: EventAttendee[];
}

import React from 'react';
import EventList from '../../components/events/EventList';
import { getFeaturedEvents } from '../../dummy-data';
export default function Events() {
  const feauturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={feauturedEvents} />
    </div>
  );
}

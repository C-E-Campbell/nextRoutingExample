import React from 'react';
import Event from './Event';
export default function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <Event
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

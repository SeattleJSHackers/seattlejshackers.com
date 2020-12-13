import React from 'react';
import events from '../constants/events';
import { ScreenFrame, TextFrame } from '../styles';

const Events = () => {
  return (
    <ScreenFrame>
      {events.map((event, idx) => {
        return (
          <TextFrame key={`event-${idx}`}>
            <img src={event.img} alt='' />
            <h3>{event.title}</h3>
            {event.description}
            {event.reoccurrence && (<p> Join us {event.reoccurrence}.</p>)}
          </TextFrame>
        );
      })}
      <TextFrame>
        <p>Find out more about our upcoming events on <a href='https://www.meetup.com/seattlejshackers/events/' target='_blank' rel='noreferrer'>Meetup.com</a>.</p>
      </TextFrame>
    </ScreenFrame >
  );
};

export default Events
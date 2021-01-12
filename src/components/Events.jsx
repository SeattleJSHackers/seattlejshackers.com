import React from 'react';
import events from '../constants/events';
import pastEvents from '../constants/pastEvents';
import { ScreenFrame, TextFrame } from '../styles';
import ReactPlayer from 'react-player'
const Events = () => {
  return (
    <ScreenFrame>
      <TextFrame>
        <h3>Monthly Events</h3>
      </TextFrame>
      {events.map((event, idx) => {
        return (
          <TextFrame key={`event-${idx}`}>
            <img src={event.img} alt='' />
            <h4>{event.title}</h4>
            {event.description}
            {event.reoccurrence && (<p> Join us {event.reoccurrence}.</p>)}
          </TextFrame>
        );
      })}
      <TextFrame>
        <p>Find out more about our upcoming events on <a href='https://www.meetup.com/seattlejshackers/events/' target='_blank' rel='noreferrer'>Meetup.com</a>.</p>
      </TextFrame>
      <TextFrame>
        <h3>Past Events</h3>
      </TextFrame>
      {pastEvents.map((pastEvent, idx) => {
        return (
          <TextFrame key={`past-event-${idx}`}>
            <ReactPlayer
              className='video-player'
              width='800px'
              height='450px'
              url={pastEvent.video}
              controls={true}
            />
            <h4>{pastEvent.title}</h4>
            <h4>by {pastEvent.presenterLink ? (
              <a href={pastEvent.presenterLink} target='_blank' rel='noreferrer'>{pastEvent.presenter}</a>
            ) : pastEvent.presenter}
            </h4>

            {pastEvent.description}
          </TextFrame>
        );
      })}

    </ScreenFrame >
  );
};

export default Events
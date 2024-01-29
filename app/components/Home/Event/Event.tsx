import React from 'react';
import './event.css';
import { Image } from 'react-bootstrap';

const Event = () => {
  return (
    <div className='event_outer_container'>
      <div className='event_inner_container'>
        <div className='event_content'>
          <Image src='/eat.jpg' alt='Event Image' className='event_image' />
          <div className='event_text'>
            <h1>example</h1>
            <p>example,example<br />
            example</p>
            <button>example</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;


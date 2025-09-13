import React from 'react';

const Calendly = () => {
  return (
    <div className='calendly' style={{ height: "500px" }}>
      <iframe
        src="https://calendly.com/jensipatel19-gnu/30min"
        width="90%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;
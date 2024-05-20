import React, { useState,useEffect } from 'react';


function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
    // Increment count on any click within the document
    console.log("clicked once")
    setClickCount(clickCount + 1);
  };

  // Attach the event listener in the component's useEffect hook
  useEffect(() => {
    document.addEventListener('click', handleClick);

    // Clean up the event listener when the component unmounts to prevent memory leaks
    return () => document.removeEventListener('click', handleClick);
  }, [clickCount]); // Empty dependency array ensures the effect runs only once

  return (
    <div className= "container">
    <h1>Check how many click you clicked !!</h1>
    <button onClick={() => console.log('Button clicked ')}>
      {clickCount}
    </button>
    </div>
  );
}

export default ClickCounter;

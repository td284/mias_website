import React from 'react';
import Mia from "./mia.jpg"


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="home">
        <img className="art" src={Mia} alt="It's me!" />
      </div>
    </div>

  )
}



export default Home;

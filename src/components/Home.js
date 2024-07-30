import React from "react";
import user from '../data/user'

function Home() {
  return (
    <div id="home">
      <h1>
        {user.username} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home

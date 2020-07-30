import React from "react";

import "../styles/app.css";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className='songs-display'>
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;

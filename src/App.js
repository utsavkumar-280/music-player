import React, { useState } from "react";
import "./styles/app.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[9]);
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;

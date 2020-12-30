import React, { useRef, useState } from "react";
import "./styles/app.css";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //Event Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

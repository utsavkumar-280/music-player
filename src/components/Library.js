import React from "react";
import { v4 as uuidv4 } from "uuid";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setisPlaying,
  libraryStatus,
}) => {
  return (
    <div
      className={`library ${
        libraryStatus ? "non-active-library" : "active-library"
      }`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              audioRef={audioRef}
              songs={songs}
              setSongs={setSongs}
              key={uuidv4()}
              song={song}
              id={song.id}
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
              setisPlaying={setisPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;

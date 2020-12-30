import React from "react";
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
        libraryStatus ? "active-library" : "non-active-library"
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
              song={song}
              id={song.id}
              key={song.id}
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

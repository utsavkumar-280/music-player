import React from "react";
import { v4 as uuidv4 } from "uuid";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              key={uuidv4()}
              song={song}
              setCurrentSong={setCurrentSong}
              id={song.id}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;

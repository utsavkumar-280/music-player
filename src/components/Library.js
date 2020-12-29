import React from "react";
import { v4 as uuidv4 } from "uuid";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong key={uuidv4()} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Library;

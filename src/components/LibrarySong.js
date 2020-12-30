import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setisPlaying,
  id,
}) => {
  //Event Handlers
  const songSelectHandler = () => {
    const selectedSong = songs.filter((thisOne) => thisOne.id === id);
    setCurrentSong(selectedSong[0]);
    //check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => console.log(error));
      }
    }
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

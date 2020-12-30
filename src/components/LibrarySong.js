import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setisPlaying,
  id,
}) => {
  //Event Handlers
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((thisOne) => thisOne.id === id);
    await setCurrentSong(selectedSong[0]);
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if song is playing
    if (isPlaying) audioRef.current.play(); //new way
    // //old way
    // if (isPlaying) {
    //   const playPromise = audioRef.current.play();
    //   if (playPromise !== undefined) {
    //     playPromise
    //       .then((audio) => {
    //         audioRef.current.play();
    //       })
    //       .catch((error) => console.log(error));
    //   }
    // }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

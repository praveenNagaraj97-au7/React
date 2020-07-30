import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "toxic",
      singer: "Britney",
    },
    {
      title: "Belly Ache",
      singer: "Billie Eiliesh",
    },
    {
      title: "Lucid Dreams",
      singer: "Juice Wrld",
    },
    {
      title: "City Slums",
      singer: "RajaKumari",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

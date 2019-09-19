import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Main Title", duration: "1:51" },
    { title: "Blood of My Blood", duration: "3:35" },
    { title: "Light of the Seven", duration: "9:49" },
    { title: "The Tower (Bonus Track)", duration: "2:33" },
    { title: "Onbowed, Unbent, Unbroken (Bonus Track)", duration: "1:44" },
    { title: "I Choose Violence (Bonus Track)", duration: "1:48" },
    { title: "Hodor (Bonus Track)", duration: "2:24" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

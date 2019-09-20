import { combineReducers } from 'redux';

const songsReducer = () =>  {
    return [
        {
            title: 'Smells like Teen Spirit',
            duration: '4:05'
        },
        {
            title: 'The Pot',
            duration: '8:15'
        }
        ,
        {
            title: 'No  One Knows ',
            duration: '5:30'
        }
        ,
        {
            title: 'Insane in the Brain',
            duration: '3:40'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

});
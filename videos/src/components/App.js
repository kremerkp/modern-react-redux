import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideosList';


/*
API-KEY: Google - Youtube
AIzaSyCeh2K4kUBzHYWBGGSUVr44IhR00smG3y4

*/
class App extends React.Component{

    state = {videos: []};

    onTermSubmit = async term =>{
        const response = await youtube.get('/search', {
                params:{
                    q: term
                }
            }
        );
        this.setState({videos: response.data.items});
    };

    render(){
        return (
            <div className="ui container" >
                <div><SearchBar onFormSubmit={this.onTermSubmit}  /></div>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;
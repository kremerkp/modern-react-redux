import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

/*
  Fake - Name unsplash
  https://unsplash.com/oauth/applications/new
  c1573330@urhen.com
  kik123***

  9e6e08e6275fe9d96d5a4141abf859f6683352bc0889ad53fd8aae5ef4f78dae
  3ebbdec0a4dd1326abed62790a65b7d8207da0fa4d6212b5adca6b1cbcaebedb
*/

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    // console.log("app:", term);
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

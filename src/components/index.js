import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from './api';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export default class Application extends Component {
  state = {
    videos: [],
    video: null,
  };
  componentDidMount() {
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items ,video: res.data.items[0]});

  };

  onVideoSelect = (video) => {
    this.setState({ video });
  };

  render() {
    console.log(this.state.videos);
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
         <div className="ui row">
          <div className="eleven wide column"><VideoDetails video={this.state.video} /></div>
          <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} data={this.state.videos} /></div>
         </div>
        </div>
      </div>
    );
  }
}


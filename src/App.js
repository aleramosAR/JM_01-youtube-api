import React from 'react';
import { Grid } from '@mui/material';
import { SearchBar, VideoList, VideoDetail } from './components';
import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('javascript');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', { params: {
      part: 'snippet',
      maxResults: 5,
      key: 'YoutubeAPI',
      q: searchTerm
    }});
    
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return(
      <Grid justify="center" container spacing={16}>
         <Grid item xs={12}>
           <Grid container spacing={2}>
             <Grid item xs={12}>
               <SearchBar onFormSubmit={this.handleSubmit} />
             </Grid>
             <Grid item xs={8}>
               <VideoDetail video={selectedVideo} />
             </Grid>
             <Grid item xs={4}>
               <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
             </Grid>
           </Grid>
         </Grid>
      </Grid>
      
    )
  }
}

export default App;

import React from 'react';
import { Grid } from '@mui/material';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />);

  return (
    <Grid container spacing={3}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;
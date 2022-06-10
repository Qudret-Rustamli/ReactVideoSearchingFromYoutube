import React from 'react';
import Video from './Video';

const VideoList = ({ data,onVideoSelect }) => {
  return (
    <div className="">
      {data.map((video) => (
        <div key={video.id.videoID} className="ui relaxed divided list">
          <Video onVideoSelect={onVideoSelect} video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;

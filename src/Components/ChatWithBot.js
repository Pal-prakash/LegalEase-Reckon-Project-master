import React from 'react';
import Iframe from 'react-iframe';

const StreamlitEmbed = () => {
  return (
    <Iframe
      url="https://legal-ease-pro.streamlit.app/?embed=true"
      width="100%"
      height="700px"
      display="initial"
      position="relative"
      allowFullScreen
      onLoad={() => console.log('Iframe loaded successfully')}
      onError={(e) => console.error('Error loading iframe:', e)}
    />
  );
};

export default StreamlitEmbed;

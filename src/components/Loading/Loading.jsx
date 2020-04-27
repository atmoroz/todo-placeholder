import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ css }) => {
  return <ClipLoader css={{ ...css }} />;
};
export default Loading;

import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = (props) => {
  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 9999,
  };
  return (
    <div style={style}>
      <HashLoader color="004CA9" loading={props} size={100} />
    </div>
  );
};

export default Loader;

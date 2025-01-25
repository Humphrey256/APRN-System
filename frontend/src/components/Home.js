import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Automated Number Plate Recognition System</h1>
      <p>Upload an image to detect vehicle license plates and check for offenses.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default Home;

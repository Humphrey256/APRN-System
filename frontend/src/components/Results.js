import React from 'react';

const Results = () => {
  return (
    <div style={styles.container}>
      <h2>Results</h2>
      <p>The results of the processed image will appear here.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default Results;

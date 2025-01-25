import React from 'react';

const Results = ({ processedImage, plateNumber, offenses }) => {
  return (
    <div style={styles.container}>
      <h2>Results</h2>
      <p>The results of the processed image will appear here.</p>
      {processedImage && (
        <div>
          <h3>Processed Image:</h3>
          <img src={processedImage} alt="Processed" style={styles.image} />
        </div>
      )}
      {plateNumber && (
        <div>
          <h3>Detected License Plate:</h3>
          <p>{plateNumber}</p>
        </div>
      )}
      {offenses && offenses.length > 0 && (
        <div>
          <h3>Offenses:</h3>
          <ul>
            {offenses.map((offense, index) => (
              <li key={index}>{offense}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
  },
};

export default Results;

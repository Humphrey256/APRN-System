import React, { useState } from 'react';
import UploadImage from './UploadImage';
import Results from './Results';

const Dashboard = () => {
  const [processedImage, setProcessedImage] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);
  const [offenses, setOffenses] = useState([]);

  const handleResults = (data) => {
    setProcessedImage(data.processedImage);
    setPlateNumber(data.plateNumber);
    setOffenses(data.offenses);
  };

  return (
    <div style={styles.container}>
      <h1>ANPR System Dashboard</h1>
      <UploadImage onResults={handleResults} />
      {processedImage && (
        <Results
          processedImage={processedImage}
          plateNumber={plateNumber}
          offenses={offenses}
        />
      )}
      <div style={styles.statistics}>
        <h2>Statistics</h2>
        <p>Total Images Processed: {/* Add logic to display total images processed */}</p>
        <p>Total Offenses Detected: {/* Add logic to display total offenses detected */}</p>
        {/* Add more statistics as needed */}
      </div>
      <div style={styles.analysis}>
        <h2>Analysis</h2>
        <p>Offense Trends: {/* Add logic to display offense trends */}</p>
        <p>License Plate Detection Accuracy: {/* Add logic to display detection accuracy */}</p>
        {/* Add more analysis as needed */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  statistics: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  analysis: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

export default Dashboard;
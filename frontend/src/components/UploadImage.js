import React, { useRef, useState } from 'react';
import axios from 'axios';
import Results from './Results';

const UploadImage = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);
  const [offenses, setOffenses] = useState([]);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    setCapturedImage(imageData);
    // Stop the camera after capturing the image
    video.srcObject.getTracks().forEach(track => track.stop());
  };

  const handleSubmit = async () => {
    if (!capturedImage) return;

    const formData = new FormData();
    formData.append('image', capturedImage);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      console.log(response.data);
      setProcessedImage(response.data.processedImage);
      setPlateNumber(response.data.plateNumber);
      setOffenses(response.data.offenses);
      alert('Image uploaded and processed successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload and process image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Upload Image</h2>
      <div>
        <button onClick={startCamera}>Start Camera</button>
        <video ref={videoRef} autoPlay style={styles.video}></video>
        <button onClick={captureImage}>Capture Image</button>
      </div>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" style={styles.capturedImage} />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}
      {processedImage && (
        <Results
          processedImage={processedImage}
          plateNumber={plateNumber}
          offenses={offenses}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  video: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
  },
  capturedImage: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
  },
};

export default UploadImage;

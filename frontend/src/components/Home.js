import React, { useRef, useState, useEffect } from 'react';

const Home = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    // Load OpenCV.js
    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.x/opencv.js';
    script.async = true;
    script.onload = () => {
      console.log('OpenCV.js loaded');
    };
    document.body.appendChild(script);
  }, []);

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

  const handleProcessImage = () => {
    if (capturedImage) {
      const img = new Image();
      img.src = capturedImage;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width, img.height);
        const src = cv.imread(canvas);
        const gray = new cv.Mat();
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
        // Perform further processing with OpenCV.js here
        cv.imshow('outputCanvas', gray);
        src.delete();
        gray.delete();
      };
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Automated Number Plate Recognition System</h1>
      <p>Upload an image to detect vehicle license plates and check for offenses.</p>
      <div>
        <button onClick={startCamera}>Start Camera</button>
        <video ref={videoRef} autoPlay style={styles.video}></video>
        <button onClick={captureImage}>Capture Image</button>
      </div>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" style={styles.capturedImage} />
          <button onClick={handleProcessImage}>Process Image</button>
          <canvas id="outputCanvas" style={styles.outputCanvas}></canvas>
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
  outputCanvas: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
  },
};

export default Home;

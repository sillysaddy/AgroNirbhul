import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Link } from 'react-router-dom'; // For a back button if needed

// Define the class names based on your model's training output
// IMPORTANT: Verify this order against the training notebook from the GitHub repo.
// This order assumes alphabetical sorting of the PlantVillage dataset directories.
const CLASS_NAMES = [
  'Apple___Apple_scab',
  'Apple___Black_rot',
  'Apple___Cedar_apple_rust',
  'Apple___healthy',
  'Blueberry___healthy',
  'Cherry_(including_sour)___Powdery_mildew',
  'Cherry_(including_sour)___healthy',
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
  'Corn_(maize)___Common_rust_',
  'Corn_(maize)___Northern_Leaf_Blight',
  'Corn_(maize)___healthy',
  'Grape___Black_rot',
  'Grape___Esca_(Black_Measles)',
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
  'Grape___healthy',
  'Orange___Haunglongbing_(Citrus_greening)',
  'Peach___Bacterial_spot',
  'Peach___healthy',
  'Pepper,_bell___Bacterial_spot',
  'Pepper,_bell___healthy',
  'Potato___Early_blight',
  'Potato___Late_blight',
  'Potato___healthy',
  'Raspberry___healthy',
  'Soybean___healthy',
  'Squash___Powdery_mildew',
  'Strawberry___Leaf_scorch',
  'Strawberry___healthy',
  'Tomato___Bacterial_spot',
  'Tomato___Early_blight',
  'Tomato___Late_blight',
  'Tomato___Leaf_Mold',
  'Tomato___Septoria_leaf_spot',
  'Tomato___Spider_mites Two-spotted_spider_mite',
  'Tomato___Target_Spot',
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
  'Tomato___Tomato_mosaic_virus',
  'Tomato___healthy'
]; // Total 38 classes - VERIFY ORDER!

const DiseaseDetection: React.FC = () => {
  const [model, setModel] = useState<tf.LayersModel | tf.GraphModel | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // For model loading and prediction
  const [modelLoading, setModelLoading] = useState<boolean>(true); // Specifically for initial model load
  const [error, setError] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const initializeTfAndLoadModel = async () => {
      setModelLoading(true);
      setError(null);
      try {
        console.log('Setting TF.js backend to CPU...');
        await tf.setBackend('cpu'); // Or 'wasm' for WebAssembly
        console.log(`TF.js backend set to: ${tf.getBackend()}`);
        
        console.log('Loading model...');
        // Ensure the path to model.json is correct relative to the public folder
        const loadedModel = await tf.loadGraphModel('/tfjs_model/model.json');
        setModel(loadedModel);
        console.log('Model loaded successfully');
      } catch (err) {
        console.error('Error initializing TF.js or loading model:', err);
        setError('Failed to load the prediction model. Please ensure it is correctly placed in the public folder and the path is correct. You might need to refresh or try a different browser.');
      } finally {
        setModelLoading(false);
      }
    };

    initializeTfAndLoadModel();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPrediction(null);
      setError(null);
    }
  };

  const handlePredict = async () => {
    if (!model || !selectedImage || !imageRef.current) {
      setError('Please select an image and ensure the model is loaded.');
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const imageElement = imageRef.current;
      // Ensure the image is loaded before processing
      await new Promise(resolve => {
        if (imageElement.complete) {
          resolve(true);
        } else {
          imageElement.onload = () => resolve(true);
        }
      });

      let tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224]) // Standard MobileNetV2 input size
        .toFloat()
        .div(tf.scalar(255.0)) // Normalize to [0, 1]
        .expandDims(); // Add batch dimension

      const predictions = model.predict(tensor) as tf.Tensor;
      const predictedIndex = (await predictions.argMax(1).data())[0];
      
      if (predictedIndex >= 0 && predictedIndex < CLASS_NAMES.length) {
        const predictedClass = CLASS_NAMES[predictedIndex].replace(/___/g, ' - ').replace(/_/g, ' ');
        setPrediction(`${predictedClass}`);
      } else {
        setError('Prediction index out of bounds. Please check CLASS_NAMES.');
      }

      tf.dispose([tensor, predictions]);

    } catch (err) {
      console.error('Prediction error:', err);
      setError('Failed to predict the disease. The image might be corrupted or an unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          <div className="text-center mb-4">
            <Link to="/dashboard" className="btn btn-sm btn-outline-secondary rounded-pill mb-3">
                <i className="bi bi-arrow-left me-1"></i> Back to Dashboard
            </Link>
            <h1 className="display-5 fw-bold text-success-emphasis mb-2">
              <i className="bi bi-shield-shaded me-2"></i>Plant Disease Detection
            </h1>
            <p className="lead text-muted">
              Upload an image of a plant leaf to detect potential diseases using our AI model.
            </p>
          </div>

          {modelLoading && (
            <div className="alert alert-info d-flex align-items-center shadow-sm rounded-3" role="alert">
              <div className="spinner-border spinner-border-sm text-info me-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              Initializing AI Model... Please wait. This might take a moment.
            </div>
          )}

          {error && (
            <div className="alert alert-danger shadow-sm rounded-3" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>{error}
            </div>
          )}

          {!modelLoading && !error && !model && (
             <div className="alert alert-warning shadow-sm rounded-3" role="alert">
              <i className="bi bi-cone-striped me-2"></i>Model not available. Cannot perform predictions.
            </div>
          )}

          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-body p-4 p-lg-5">
              <div className="mb-4">
                <label htmlFor="imageUpload" className="form-label fs-5 fw-semibold text-success">
                  1. Upload Crop Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control form-control-lg rounded-3"
                  disabled={modelLoading || !model}
                />
                <div className="form-text">
                  Choose a clear image of the affected plant leaf (e.g., .jpg, .png).
                </div>
              </div>

              {previewUrl && (
                <div className="mb-4 text-center">
                  <h3 className="fs-5 fw-semibold text-success mb-2">2. Image Preview</h3>
                  <img
                    ref={imageRef}
                    src={previewUrl}
                    alt="Selected crop leaf"
                    className="img-fluid rounded-3 border shadow-sm"
                    style={{ maxHeight: '300px', border: '3px solid var(--bs-success-border-subtle)' }}
                    crossOrigin="anonymous" // Important for tf.browser.fromPixels
                  />
                </div>
              )}

              <div className="d-grid">
                <button
                  onClick={handlePredict}
                  disabled={!model || !selectedImage || loading || modelLoading}
                  className="btn btn-success btn-lg rounded-pill py-3"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Analyzing Image...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-magic me-2"></i>Detect Disease
                    </>
                  )}
                </button>
              </div>

              {prediction && !error && (
                <div className="mt-4 p-4 bg-success-subtle border border-success-subtle rounded-4 shadow-sm">
                  <h3 className="fs-4 fw-bold text-success-emphasis mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i>Prediction Result:
                  </h3>
                  <p className="fs-5 mb-0">{prediction}</p>
                  <p className="small text-muted mt-2">
                    Note: This is an AI-generated prediction. For critical decisions, please consult with an agricultural expert.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;
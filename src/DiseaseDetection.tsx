import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Link } from 'react-router-dom';
import { remediesData, type RemedyContent, type RemediesCollection } from './remedies'; // <-- Import from remedies.ts

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
  const [prediction, setPrediction] = useState<string | null>(null); // Stores formatted prediction string
  const [predictedDiseaseKey, setPredictedDiseaseKey] = useState<string | null>(null); // Stores the key for remediesData
  const [currentRemedy, setCurrentRemedy] = useState<RemedyContent | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'bn'>('en');
  const [loading, setLoading] = useState<boolean>(false);
  const [modelLoading, setModelLoading] = useState<boolean>(true);
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
      setPredictedDiseaseKey(null);
      setCurrentRemedy(null);
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
    setPredictedDiseaseKey(null);
    setCurrentRemedy(null);

    try {
      const imageElement = imageRef.current;
      // Ensure the image is loaded before processing
      await new Promise<void>(resolve => { // Changed to Promise<void>
        if (imageElement.complete && imageElement.naturalHeight !== 0) { // Added check for naturalHeight
          resolve();
        } else {
          imageElement.onload = () => resolve();
          imageElement.onerror = () => { // Handle image loading errors
            setError('Failed to load image for prediction.');
            setLoading(false);
            resolve(); // Resolve to stop further processing in this path
          };
        }
      });

      // Check if an error occurred during image loading
      if (error && !loading) return;


      let tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      const predictionsTensor = model.predict(tensor) as tf.Tensor;
      const predictedIndex = (await predictionsTensor.argMax(1).data())[0];
      
      if (predictedIndex >= 0 && predictedIndex < CLASS_NAMES.length) {
        const diseaseKey = CLASS_NAMES[predictedIndex];
        setPredictedDiseaseKey(diseaseKey);
        const formattedPrediction = diseaseKey.replace(/___/g, ' - ').replace(/_/g, ' ');
        setPrediction(formattedPrediction);

        if (remediesData[diseaseKey]) {
          setCurrentRemedy(remediesData[diseaseKey][selectedLanguage]);
        } else {
          setCurrentRemedy(null); 
          // Keep existing error if it's a model load error, otherwise set remedy not found
          if (!error?.startsWith('Failed to load the prediction model')) {
             setError(`Remedy information not yet available for ${formattedPrediction}.`);
          }
        }
      } else {
        setError('Prediction index out of bounds. Please check CLASS_NAMES.');
      }
      tf.dispose([tensor, predictionsTensor]);
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Failed to predict the disease. The image might be corrupted or an unexpected error occurred.');
    } finally {
      // Only set loading to false if it wasn't already set by image error handler
      if (loading) setLoading(false);
    }
  };

  useEffect(() => {
    // Update remedy display if language changes and a remedy is available
    if (predictedDiseaseKey && remediesData[predictedDiseaseKey]) {
      setCurrentRemedy(remediesData[predictedDiseaseKey][selectedLanguage]);
    }
  }, [selectedLanguage, predictedDiseaseKey]);

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

          {/* Display general errors if no prediction is made yet, or if it's a model loading error */}
          {error && !prediction && (
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
                    crossOrigin="anonymous"
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

              {prediction && ( // Show prediction and remedy-specific error if any
                <div className="mt-4 p-4 bg-success-subtle border border-success-subtle rounded-4 shadow-sm">
                  <h3 className="fs-4 fw-bold text-success-emphasis mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>Prediction Result:
                  </h3>
                  <p className="fs-5 mb-0">{prediction}</p>
                  {/* Display error related to remedy not found, only if there isn't a more general prediction error */}
                  {error && error.startsWith('Remedy information not yet available') && (
                     <p className="text-danger mt-2 small"><i className="bi bi-exclamation-triangle-fill me-1"></i>{error}</p>
                  )}
                   <p className="small text-muted mt-2">
                    Note: This is an AI-generated prediction. For critical decisions, please consult with an agricultural expert.
                  </p>
                </div>
              )}

              {currentRemedy && (
                <div className="mt-4 p-4 bg-light border rounded-4 shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fs-4 fw-bold text-success-emphasis mb-0">
                      <i className="bi bi-journal-medical me-2"></i>Remedy Information for {currentRemedy.diseaseName}
                    </h3>
                    <div>
                      <button
                        className={`btn btn-sm ${selectedLanguage === 'en' ? 'btn-success' : 'btn-outline-success'} me-2 rounded-pill`}
                        onClick={() => setSelectedLanguage('en')}
                      >
                        English
                      </button>
                      <button
                        className={`btn btn-sm ${selectedLanguage === 'bn' ? 'btn-success' : 'btn-outline-success'} rounded-pill`}
                        onClick={() => setSelectedLanguage('bn')}
                      >
                        বাংলা
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h5 className="fw-semibold text-success">Description:</h5>
                    <p className="text-muted">{currentRemedy.description}</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="fw-semibold text-success">Why it Happens:</h5>
                    <p className="text-muted">{currentRemedy.whyItHappens}</p>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <h5 className="fw-semibold text-success">Do's:</h5>
                      <ul className="list-unstyled text-muted">
                        {currentRemedy.dos.map((item, index) => (
                          <li key={index}><i className="bi bi-check-lg text-success me-2"></i>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-semibold text-danger">Don'ts:</h5>
                      <ul className="list-unstyled text-muted">
                        {currentRemedy.donts.map((item, index) => (
                          <li key={index}><i className="bi bi-x-lg text-danger me-2"></i>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h5 className="fw-semibold text-success">What to do from now:</h5>
                    <p className="text-muted">{currentRemedy.whatToDoNow}</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="fw-semibold text-success">Suggested Medicine / Treatment:</h5>
                    <h6 className="fw-semibold mt-2">Cultural Practice:</h6>
                    <p className="text-muted">{currentRemedy.culturalPractice}</p>
                    <h6 className="fw-semibold mt-2">Chemical Control:</h6>
                    <p className="text-muted">{currentRemedy.chemicalControl}</p>
                  </div>
                  <div className="alert alert-warning small p-3 rounded-3">
                    <i className="bi bi-info-circle-fill me-2"></i>
                    <strong>Important:</strong> {currentRemedy.importantNote}
                  </div>
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
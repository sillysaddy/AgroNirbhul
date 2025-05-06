import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

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
  const [model, setModel] = useState<tf.LayersModel | tf.GraphModel | null>(null); // Allow GraphModel type
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const initializeTf = async () => {
      try {
        console.log('Setting TF.js backend to CPU...');
        await tf.setBackend('cpu'); // Or 'wasm' for WebAssembly
        console.log(`TF.js backend set to: ${tf.getBackend()}`);
        await loadModel();
      } catch (err) {
        console.error('Error initializing TF.js or loading model:', err);
        setError('Failed to initialize TF.js or load model.');
      }
    };

    const loadModel = async () => {
      try {
        console.log('Loading model...');
        const loadedModel = await tf.loadGraphModel('/tfjs_model/model.json');
        setModel(loadedModel); // No need to cast if state allows GraphModel
        console.log('Model loaded successfully');
      } catch (err) {
        console.error('Error loading model:', err);
        setError('Failed to load the prediction model.');
      }
    };

    initializeTf(); // Call the new initialization function
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPrediction(null); // Reset prediction when new image is selected
      setError(null);
    }
  };

  const handlePredict = async () => {
    if (!model || !selectedImage || !imageRef.current) {
      setError('Please select an image and wait for the model to load.');
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const imageElement = imageRef.current;
      let tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      // For GraphModel, executeAsync is often preferred, or ensure input/output names are correct if using predict
      // The direct predict might still work if the model has a default signature.
      const predictions = model.predict(tensor) as tf.Tensor;
      const predictedIndex = (await predictions.argMax(1).data())[0];
      const predictedClass = CLASS_NAMES[predictedIndex];

      setPrediction(`Predicted Disease: ${predictedClass}`);
      tf.dispose([tensor, predictions]);

    } catch (err) {
      console.error('Prediction error:', err);
      setError('Failed to predict the disease. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Plant Disease Detection</h2>
      {!model && !error && <p>Loading prediction model...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <label htmlFor="imageUpload" className="block mb-2 text-sm font-medium text-gray-900">
          Upload Crop Image:
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>

      {previewUrl && (
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Image Preview:</h3>
          <img
            ref={imageRef}
            src={previewUrl}
            alt="Selected crop"
            className="max-w-xs h-auto rounded border"
            crossOrigin="anonymous" // Important for tf.browser.fromPixels
          />
        </div>
      )}

      <button
        onClick={handlePredict}
        disabled={!model || !selectedImage || loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Predicting...' : 'Detect Disease'}
      </button>

      {prediction && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded">
          <h3 className="text-lg font-semibold">Prediction Result:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;
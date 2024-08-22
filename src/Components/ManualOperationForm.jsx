import React, { useState } from 'react';
import Slider from 'react-slider';
import { useNavigate } from 'react-router-dom';
import './ManualOperationForm.css';

const ManualOperationForm = () => {
  const [temperature, setTemperature] = useState(35);
  const [humidity, setHumidity] = useState(60);
  const [soilMoisture, setSoilMoisture] = useState(45);
  const [co2Level, setCo2Level] = useState('');
  const [lux, setLux] = useState('');
  const [electricalConductivity, setElectricalConductivity] = useState('');
  const [npkLevel_N, setNpkLevel_N] = useState('');
  const [npkLevel_P, setNpkLevel_P] = useState('');
  const [npkLevel_K, setNpkLevel_K] = useState('');
  const [o2Level, setO2Level] = useState(16);

  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Saving data:', {
      temperature,
      humidity,
      soilMoisture,
      co2Level,
      lux,
      electricalConductivity,
      npkLevel_N,
      npkLevel_P,
      npkLevel_K,
      o2Level,
    });
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  return (
    <div className="manual-operation-form">
      <h2>Manual Operation</h2>

      <div className="form-group">
        <label>Temperature</label>        
        <Slider
          className="slider"
          value={temperature}
          min={0}
          max={100}
          onChange={(value) => setTemperature(value)}
        />
        <span>{temperature}%</span>
      </div>

      <div className="form-group">
        <label>Humidity</label>
        <Slider
          className="slider"
          value={humidity}
          min={0}
          max={100}
          onChange={(value) => setHumidity(value)}
        />
        <span>{humidity}%</span>
      </div>

      <div className="form-group">
        <label>Soil Moisture</label>
        <Slider
          className="slider"
          value={soilMoisture}
          min={0}
          max={100}
          onChange={(value) => setSoilMoisture(value)}
        />
        <span>{soilMoisture}%</span>
      </div>

      <div className="form-group">
        <label>CO<sub>2</sub> Level</label>
        <input
          type="text"
          value={co2Level}
          onChange={(e) => setCo2Level(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>LUX</label>
        <input
          type="text"
          value={lux}
          onChange={(e) => setLux(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Electrical Conductivity</label>
        <input
          type="text"
          value={electricalConductivity}
          onChange={(e) => setElectricalConductivity(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>NPK Level</label>
      </div>
      {/* <div className="form-group ">
        <label>NPK Level</label>        
        <div className="npk-sliders">
          <div className="npk-slider-container">
            <label className="npk-label">N</label>
            <Slider
              className="slider"
              value={npkLevel_N}
              min={0}
              max={100}
              onChange={(value) => setNpkLevel_N(value)}
            />
            <span>{npkLevel_N}%</span>
          </div>
          <div className="npk-slider-container">
            <label className="npk-label">P</label>
            <Slider
              className="slider"
              value={npkLevel_P}
              min={0}
              max={100}
              onChange={(value) => setNpkLevel_P(value)}
            />
            <span>{npkLevel_P}%</span>
          </div>
          <div className="npk-slider-container">
            <label className="npk-label">K</label>
            <Slider
              className="slider"
              value={npkLevel_K}
              min={0}
              max={100}
              onChange={(value) => setNpkLevel_K(value)}
            />
            <span>{npkLevel_K}%</span>
          </div>
        </div>
      </div> */}
      <div className="form-group">
        <label>N</label>
        <Slider
          className="slider"
          value={npkLevel_N}
          min={0}
          max={100}
          onChange={(value) => setNpkLevel_N(value)}
        />
        <span>{npkLevel_N}%</span>
      </div>

      <div className="form-group">
        <label>P</label>
        <Slider
          className="slider"
          value={npkLevel_P}
          min={0}
          max={100}
          onChange={(value) => setNpkLevel_P(value)}
        />
        <span>{npkLevel_P}%</span>
      </div>

      <div className="form-group">
        <label>K</label>
        <Slider
          className="slider"
          value={npkLevel_K}
          min={0}
          max={100}
          onChange={(value) => setNpkLevel_K(value)}
        />
        <span>{npkLevel_K}%</span>
      </div>
      
      <div className="form-group">
        <label>O<sub>2</sub> Level</label>
        <Slider
          className="slider"
          value={o2Level}
          min={0}
          max={100}
          onChange={(value) => setO2Level(value)}
        />
        <span>{o2Level}%</span>
      </div>

      <div className="button-group">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ManualOperationForm;

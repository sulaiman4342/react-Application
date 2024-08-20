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
  const [npkLevel, setNpkLevel] = useState('N');
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
      npkLevel,
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

      {/* <div className="form-group">
        <label>Humidity</label>
        <Slider
          className="slider"
          value={humidity}
          min={0}
          max={100}
          onChange={(value) => setHumidity(value)}
        />
        <span>{humidity}%</span>
      </div> */}

      {/* <div className="form-group">
        <label>Soil Moisture</label>
        <Slider
          className="slider"
          value={soilMoisture}
          min={0}
          max={100}
          onChange={(value) => setSoilMoisture(value)}
        />
        <span>{soilMoisture}%</span>
      </div> */}

      {/* <div className="form-group">
        <label>CO2 Level</label>
        <input
          type="text"
          value={co2Level}
          onChange={(e) => setCo2Level(e.target.value)}
        />
      </div> */}

      {/* <div className="form-group">
        <label>NPK Level</label>
        <select value={npkLevel} onChange={(e) => setNpkLevel(e.target.value)}>
          <option value="N">N</option>
          <option value="P">P</option>
          <option value="K">K</option>
        </select>
      </div> */}

      {/* <div className="form-group">
        <label>O2 Level</label>
        <Slider
          className="slider"
          value={o2Level}
          min={0}
          max={100}
          onChange={(value) => setO2Level(value)}
        />
        <span>{o2Level}%</span>
      </div> */}

      <div className="button-group">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ManualOperationForm;

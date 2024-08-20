import React from 'react';
import './AddDeviceForm.css';

const AddDeviceFormComponent = () => {
  return (
    <div className="add-device-container">
      <h2>ADD DEVICE</h2>
      <div className="add-device-form">
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="device-id">Device ID :</label>
            <input type="text" id="device-id" name="device-id" required />
          </div>
          <div className="form-group">
            <label htmlFor="tunnel-name">Tunnel Name :</label>
            <input type="text" id="tunnel-name" name="tunnel-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="mac-address">MAC Address :</label>
            <input type="text" id="mac-address" name="mac-address" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reading-types">Reading Types :</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="reading-types" value="temperature" />
              Temperature
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="humidity" />
              Humidity
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="soil-moisture" />
              Soil Moisture
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="co2-level" />
              CO₂ Level
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="lux" />
              LUX
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="electrical-conductivity" />
              Electrical Conductivity
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="npk-level" />
              NPK Level
            </label>
            <label>
              <input type="checkbox" name="reading-types" value="o2-level" />
              O₂ Level
            </label>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-close">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddDeviceFormComponent;

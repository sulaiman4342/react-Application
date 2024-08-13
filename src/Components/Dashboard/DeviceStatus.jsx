import React from "react";
import DeviceCard from "./DeviceCard";
import './DeviceStatus.css';

const DeviceStatus = () => {
    return(
        <div className="device-status">
            <h2>Devices</h2>
            <div className="tunnel">
                <h3>Tunnel Name: Tunnel 01</h3>
                <div className="status-cards">
                    <DeviceCard title="Temerature" value="35" unit="°C" icon="🌡️" />
                </div>
                <div className="status-cards">
                    <DeviceCard title="Temerature" value="35" unit="°C" icon="🌡️" />
                </div>
            </div>
            <div className="tunnel">
                <h3>Tunnel Name: Tunnel 01</h3>
                <div className="status-cards">
                    <DeviceCard title="Temerature" value="35" unit="°C" icon="🌡️" />
                </div>
            </div>
        </div>
    );
};

export default DeviceStatus;
    
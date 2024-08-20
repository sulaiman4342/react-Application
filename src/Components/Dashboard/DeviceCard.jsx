import React from "react";
import './DeviceCard.css';

const DeviceCard = ({title, value, icon, unit}) => {
    return(
        <div className="device-card">
            <div className="card-icon">{icon}</div>
            <div className="card-title">{title}</div>
            <div className="card-value">{value} {unit}</div>
        </div>
    );
};

export default DeviceCard;
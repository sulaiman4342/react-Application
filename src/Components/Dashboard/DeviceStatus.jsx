import React from 'react';
import DeviceCard from './DeviceCard';
import './DeviceStatus.css';

const statusColors = {
    Online: 'green',
    Offline: 'red',
  };
const DeviceStatus = () => {
  const tunnelData = [
    {
      name: 'Tunnel 01',
      status: 'Online',
      operation: 'Auto',
      cards: [
        { title: 'Temperature', value: '35', unit: '°C', icon: '🌡️' },
        { title: 'Humidity', value: '60%', unit: '', icon: '💧' },
        
      ],
    },
    {
      name: 'Tunnel 02',
      status: 'Offline',
      operation: 'Manual',
      cards: [
        { title: 'Temperature', value: '33', unit: '°C', icon: '🌡️' },
        { title: 'Humidity', value: '68%', unit: '', icon: '💧' },
        
      ],
    },
  ];

  return (
    <div className="device-status">
      <h2>Devices</h2>
      {tunnelData.map((tunnel, index) => (
        <div className="tunnel" key={index}>
        <h3>
            Tunnel Name: {tunnel.name} | Status:
            <span style={{ color: statusColors[tunnel.status] }}>
              {tunnel.status}
            </span>
            | Operation: {tunnel.operation}
            
          </h3>
          <div className="status-cards">
            {tunnel.cards.map((card, cardIndex) => (
              <DeviceCard key={cardIndex} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceStatus;

// components/ServerComponent.tsx
import React from 'react';

interface ServerComponentProps {
  serverData: string; // Zamijeni 'string' sa stvarnim tipom podataka
}

const ServerComponent: React.FC<ServerComponentProps> = ({ serverData }) => {
  return (
    <div>
      <p>Server Data: {serverData}</p>
    </div>
  );
};

export default ServerComponent;

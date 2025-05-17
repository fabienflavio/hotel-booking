import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import React from 'react';

interface PrivateRouteProps {
    element: React.ComponentType<any>;
}

const PrivateRouteClient: React.FC<PrivateRouteProps> = ({ element: Element, ...rest }) => {
    const { role, token} = useContext(DataContext);
    return (role === "default" && token) ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRouteClient;

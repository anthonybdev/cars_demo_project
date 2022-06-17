import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';

const InitComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details/:id" element={<DetailsPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default InitComponent;

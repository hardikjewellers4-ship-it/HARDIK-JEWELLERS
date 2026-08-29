import React from 'react';
import { renderToString } from 'react-dom/server';
import AdminDashboard from './src/pages/AdminDashboard.jsx';

try {
  console.log("Rendering AdminDashboard...");
  renderToString(<AdminDashboard />);
  console.log("Render successful!");
} catch (e) {
  console.error("Render failed:");
  console.error(e);
}

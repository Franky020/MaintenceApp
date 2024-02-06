import './index.css'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

{/*
import { createRoot } from 'react-dom/client';
const contenedor = document.getElementById('root');
const root = createRoot(contenedor);

root.render(<App />); */}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Importamos tus páginas (Asegúrate de que las rutas coincidan con tus carpetas)
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ChoferView from './Pages/Chofer/ChoferView';
import ClienteMap from './Pages/Cliente/ClienteMap';

// Importamos el CSS global (asegúrate de tener Leaflet aquí si no lo pusiste en main.tsx)
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <BrowserRouter>
      {/* NAV TEMPORAL: Solo para que pruebes las vistas. 
        Después lo borraremos cuando tengamos el Login.
      */}
      <div style={{ 
        position: 'fixed', 
        bottom: 10, 
        left: 10, 
        zIndex: 9999, 
        display: 'flex', 
        gap: '10px',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '8px'
      }}>
        <a href="/admin" style={{color: 'white', fontSize: '12px'}}>Admin</a>
        <a href="/chofer" style={{color: 'white', fontSize: '12px'}}>Chofer</a>
        <a href="/cliente" style={{color: 'white', fontSize: '12px'}}>Cliente</a>
      </div>

      <Routes>
        {/* Ruta para el Administrador */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Ruta para el Chofer */}
        <Route path="/chofer" element={<ChoferView />} />

        {/* Ruta para el Cliente (Mapa interactivo) */}
        <Route path="/cliente" element={<ClienteMap />} />

        {/* Redirección por defecto: Si entras a la raíz, te manda al mapa de clientes */}
        <Route path="/" element={<Navigate to="/cliente" />} />
        
        {/* Manejo de error 404: Si la ruta no existe */}
        <Route path="*" element={<div className="p-10">404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
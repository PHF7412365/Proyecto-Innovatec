import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { ShieldCheck, Video, Users } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Izquierda */}
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="font-bold flex items-center gap-2 mb-6">
          <ShieldCheck className="text-blue-700" /> Admin Panel
        </h2>
        <nav className="space-y-4">
          <div className="p-2 bg-blue-50 text-blue-700 rounded cursor-pointer">Unidades Activas</div>
          <div className="p-2 hover:bg-gray-50 rounded cursor-pointer text-gray-600">Reportes de Ruta</div>
          <div className="p-2 hover:bg-gray-50 rounded cursor-pointer text-gray-600">Gestión de Choferes</div>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col">
        <div className="h-2/3 border-b-2 border-gray-200">
          <MapContainer center={[-12.046, -77.042]} zoom={14} style={{ height: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-12.046, -77.042]} />
          </MapContainer>
        </div>

        {/* Sección de Cámaras en Tiempo Real */}
        <div className="h-1/3 p-4 overflow-y-auto bg-white">
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
            <Video size={16} /> Monitoreo de Cámaras (Unidad 001)
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map(cam => (
              <div key={cam} className="min-w-[200px] h-32 bg-black rounded flex items-center justify-center text-xs text-gray-600">
                Streaming Cámara {cam}...
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
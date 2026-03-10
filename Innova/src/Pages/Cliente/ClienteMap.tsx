import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Bus, MapPin } from 'lucide-react';

// Datos de ejemplo (Mock data)
const paradas = [
  { id: 1, nombre: "Estación Central", coords: [-12.046, -77.042] as [number, number] },
  { id: 2, nombre: "Paradero Norte", coords: [-12.050, -77.035] as [number, number] },
];

export default function ClienteMap() {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-sm font-bold flex items-center gap-2">
          <Bus size={18} className="text-blue-600" /> Seguimiento en Vivo
        </h2>
      </div>
      
      <MapContainer center={[-12.046, -77.042]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {paradas.map(p => (
          <Marker key={p.id} position={p.coords}>
            <Popup>{p.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
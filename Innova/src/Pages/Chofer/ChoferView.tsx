import { Camera, Navigation } from 'lucide-react';

export default function ChoferView() {
  // Simularemos 4 cámaras del ESP32-CAM
  const camaras = [1, 2, 3, 4];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Navigation className="text-green-400" /> Panel del Chofer
        </h1>
        <span className="bg-green-600 px-3 py-1 rounded-full text-xs">GPS Activo</span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {camaras.map(cam => (
          <div key={cam} className="aspect-video bg-black border border-gray-700 rounded-lg flex flex-col items-center justify-center relative">
            <Camera size={48} className="text-gray-700 mb-2" />
            <p className="text-gray-500 text-sm font-mono">ESP32_CAM_{cam} - SIN SEÑAL</p>
            <div className="absolute top-2 left-2 bg-red-600 text-[10px] px-2 py-0.5 rounded">REC</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-400">Próxima Parada: <span className="text-white font-bold italic">Estación Central</span></p>
      </div>
    </div>
  );
}
import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Yapay Zeka Asistanınız
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        İşlerinizi otomatikleştirin, verimliliğinizi artırın ve yapay zeka destekli asistanınızla 
        daha akıllı çalışın.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center">
          Hemen Başla <ChevronRight className="ml-2 h-5 w-5" />
        </button>
        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center">
          Demo İzle <MessageCircle className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
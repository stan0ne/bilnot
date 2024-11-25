import React from 'react';
import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AsisTürk</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2">Özellikler</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2">Fiyatlandırma</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Ücretsiz Dene
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
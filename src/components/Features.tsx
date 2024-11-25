import React from 'react';
import { Sparkles, Shield, Zap } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "Yapay Zeka Destekli",
      description: "En son AI teknolojileri ile güçlendirilmiş akıllı asistan"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Güvenli ve Özel",
      description: "Verileriniz şifrelenir ve güvenle saklanır"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Hızlı Entegrasyon",
      description: "Dakikalar içinde sisteminize entegre edin"
    }
  ];

  return (
    <section id="features" className="py-20 mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Öne Çıkan Özellikler</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
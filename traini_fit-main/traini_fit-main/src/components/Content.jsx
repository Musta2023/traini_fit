import React from 'react';
import { ChartBarIcon, ClipboardCheckIcon, CalendarIcon, FireIcon } from '@heroicons/react/24/outline';

export default function Content() {
  const features = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
      title: 'Suivi de vos progres',
      description: 'Suivez vos entrainements quotidiens, enregistrez vos performances et visualisez votre evolution avec des graphiques details.',
    },
    {
      icon: <ClipboardCheckIcon className="h-8 w-8 text-blue-600" />,
      title: 'Programmes personnalises',
      description: 'Creer votre propre programme d entrainement en fonction de vos objectifs : perte de poids, prise de masse ou remise en forme.',
    },
    {
      icon: <CalendarIcon className="h-8 w-8 text-blue-600" />,
      title: 'Organisation facile',
      description: 'Planifiez vos seances dans un calendrier interactif et recevez des rappels pour rester motive chaque jour.',
    },
    {
      icon: <FireIcon className="h-8 w-8 text-blue-600" />,
      title: 'Suivi nutritionnel',
      description: 'Notez vos repas, suivez vos macros et obtenez des recommandations personnalisees selon vos besoins nutritionnels.',
    },
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-700">
        Pourquoi choisir FitTrack ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ icon, title, description }, idx) => (
          <div key={idx} className="flex space-x-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

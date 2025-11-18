import React from 'react';
import Hero from '../components/Hero';
import data from '../data/db.json';

const ThreatsPage = () => {
    const { hero, threatList } = data.threats;

    return (
        <div>
            <Hero title={hero.title} subtitle={hero.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {threatList.map((threat, index) => (
                             <article key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4 border-l-4 border-red-500">
                                <div className="text-4xl">{threat.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{threat.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{threat.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThreatsPage;
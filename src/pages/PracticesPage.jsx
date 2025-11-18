import React from 'react';
import Hero from '../components/Hero';
import data from '../data/db.json';

const PracticesPage = () => {
    const { hero, practiceList } = data.practices;

    return (
        <div>
            <Hero title={hero.title} subtitle={hero.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {practiceList.map((practice, index) => (
                            <article key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4 border-l-4 border-accent-green">
                                <div className="text-4xl">{practice.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{practice.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{practice.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PracticesPage;
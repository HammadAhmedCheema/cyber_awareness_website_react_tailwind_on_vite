import React from 'react';
import Hero from '../components/Hero';
import AiChat from '../components/AiChat';
import data from '../data/db.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { hero, quickTips } = data.home;

    return (
        <div>
            <Hero title={hero.title} subtitle={hero.subtitle} />
            
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-8">Quick Safety Tips</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {quickTips.map((tip, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <div className="text-5xl mb-4">{tip.icon}</div>
                                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{tip.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-white dark:bg-secondary-dark py-12 text-center">
                <div className="container mx-auto px-4">
                    <Link to="/practices" className="bg-accent-green text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-green-700 transition-colors">
                        Learn Safe Practices
                    </Link>
                </div>
            </section>

             <section className="py-16">
                <div className="container mx-auto px-4">
                    <AiChat />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
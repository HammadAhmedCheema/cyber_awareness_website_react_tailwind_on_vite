import React from 'react';
import Hero from '../components/Hero';
import data from '../data/db.json';
import quishing from '../assets/quishing.mp4';

const ResourcesPage = () => {
    const { hero, downloadable, additional } = data.resources;

    return (
        <div>
            <Hero title={hero.title} subtitle={hero.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {downloadable.map((item, index) => (
                            <article key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-primary-blue flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                                </div>
                                <a href="#" className="mt-auto bg-primary-blue text-white text-center py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                                    Download PDF
                                </a>
                            </article>
                        ))}
                    </div>

                        <div className="mb-16">
                            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Training Video</h3>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                                <video 
                                    controls 
                                    className="w-full rounded-lg shadow-md"
                                    preload="metadata"
                                >
                                    <source src={quishing} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm">
                                    Click the play button to start the training video
                                </p>
                            </div>
                        </div>
                                            <div>
                        <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Additional Online Resources</h3>
                         <div className="grid md:grid-cols-3 gap-8">
                            {additional.map((item, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-primary-blue">
                                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
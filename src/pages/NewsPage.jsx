import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { fetchNewsArticles } from '../services/apiService';

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchNewsArticles();
                setArticles(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, []); // Empty dependency array means this runs once on mount

    const heroData = {
        title: "Latest Security News & Alerts",
        subtitle: "Stay informed about the latest cybersecurity threats and important security updates from around the web."
    };

    return (
        <div>
            <Hero title={heroData.title} subtitle={heroData.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {loading && <p className="text-center text-xl">Loading news...</p>}
                    {error && <p className="text-center text-xl text-red-500">Error: {error}</p>}
                    {!loading && !error && (
                        <div className="space-y-8">
                            {articles.map(article => (
                                <article key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-primary-blue">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{article.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{article.body}</p>
                                    <div className="mt-4 flex gap-2">
                                        {article.tags.map(tag => (
                                             <span key={tag} className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
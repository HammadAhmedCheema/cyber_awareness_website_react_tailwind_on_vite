import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
// Import our new function from the service file
import { fetchHackerNewsStories } from '../services/ApiService';

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                // Call the new Hacker News fetcher
                const data = await fetchHackerNewsStories();
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
        title: "Latest Tech & Security News",
        subtitle: "Stay informed with the top stories from the Hacker News community."
    };

    return (
        <div>
            <Hero title={heroData.title} subtitle={heroData.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {loading && <p className="text-center text-xl">Loading top stories...</p>}
                    {error && <p className="text-center text-xl text-red-500">Error: {error}</p>}
                    
                    {!loading && !error && (
                        <div className="space-y-6">
                            {articles.map(article => (
                                // Use the article's unique ID as the key
                                <article key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-primary-blue transform hover:scale-[1.02] transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-3 text-secondary-dark dark:text-white">{article.title}</h3>
                                    
                                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <div className="font-semibold">
                                            <span>By: {article.by}</span>
                                            <span className="mx-2">|</span>
                                            <span>{article.score} Points</span>
                                        </div>
                                        {/* The 'url' property contains the link to the actual story */}
                                        <a 
                                            href={article.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-primary-blue text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Read Story
                                        </a>
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
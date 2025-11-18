import React, { useState } from 'react';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm) return;

        setIsLoading(true);
        setError(null);
        setHasSearched(true);

        try {
            const response = await axios.get(`${GITHUB_API_URL}?q=${searchTerm}`);
            if (response.data.items.length === 0) {
                setError('// No users found.');
                setUsers([]);
            } else {
                setUsers(response.data.items);
                console.log(response.data.items);
            }
        } catch (err) {
            console.error("GitHub API Error:", err);
            setError('// Error: Connection to GitHub mainframe terminated. Please try again.');
            setUsers([]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderResults = () => {
        if (isLoading) {
            return <div className="loading-state">// Accessing GitHub Mainframe... Searching for target...</div>;
        }

        if (error) {
            return <div className="error-state">{error}</div>;
        }

        if (!hasSearched) {
             return <div className="ready-state">// System ready. Awaiting user input...</div>;
        }
        
        if (users.length > 0) {
            return (
                <div className="user-grid">
                    {users.map(user => (
                        <a 
                            href={user.html_url} 
                            key={user.id} 
                            className="user-card"
                        >
                            <img 
                                src={user.avatar_url} 
                                alt={`${user.login}'s avatar`}
                                className="user-avatar"
                            />
                            <h3 className="user-name">{user.login}</h3>
                            <p className="user-profile-link">View Profile</p>
                        </a>
                    ))}
                </div>
            );
        }
        
        return null;
    };

    return (
        <div className="terminal-container">
            <header className="terminal-header">
                <h1 className="terminal-title">
                    __GitHub_User_Search__
                </h1>
            </header>

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter username to track..."
                    className="search-input"
                />
                <button
                    type="submit"
                    className={`search-button ${isLoading ? 'search-button-disabled' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Searching...' : '[Execute]'}
                </button>
            </form>

            <main className="mt-8">
                {renderResults()}
            </main>
        </div>
    );
};

export default App;
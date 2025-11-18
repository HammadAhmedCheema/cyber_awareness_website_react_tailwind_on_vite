import React, { useState } from 'react';

// IMPORTANT: Keep your secret API key here.
const API_KEY = "AIzaSyDHlm5_izn3Ud5obiRDlcXp1Lu5pnsEc84";

const AiChat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setResponse('');
    setError(null);

    // CHANGE 1: The API Key is REMOVED from the end of this URL.
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

    try {
      const apiResponse = await fetch(
        API_URL, // Use the URL without the key
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // CHANGE 2: The API Key is now sent in the 'x-goog-api-key' header, just like in your curl command.
            'X-goog-api-key': API_KEY, 
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a cybersecurity expert. Answer the following question concisely and clearly: "${prompt}"`
              }]
            }]
          }),
        }
      );

      if (!apiResponse.ok) {
        // This will give a more detailed error in the console now
        const errorBody = await apiResponse.json();
        console.error("API Error Response:", errorBody);
        throw new Error(`API request failed with status ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      
      const aiText = data.candidates[0].content.parts[0].text;
      setResponse(aiText);

    } catch (err) {
      console.error("Error calling Gemini API:", err);
      setError("Sorry, I couldn't get a response. Please check that your API key is correct and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto border-l-4 border-primary-blue">
      <h3 className="text-2xl font-bold mb-4 text-secondary-dark dark:text-white">Ask AI</h3>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md min-h-[100px] mb-4 whitespace-pre-wrap">
        {isLoading && <p className="text-gray-500">Thinking...</p>}
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {response && <p className="text-gray-800 dark:text-gray-200">{response}</p>}
      </div>
      <form onSubmit={handlePromptSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a cybersecurity question..."
            className="flex-grow p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isLoading ? 'Wait...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiChat;
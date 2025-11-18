import React, { useState } from 'react';

const AiChat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    setResponse('');

    // Simulate an AI API call with a delay
    setTimeout(() => {
      let aiResponse = "I'm a demo AI. I can answer basic questions. ";
      if (prompt.toLowerCase().includes('password')) {
        aiResponse += "A strong password should be long, unique, and include a mix of letters, numbers, and symbols.";
      } else if (prompt.toLowerCase().includes('phishing')) {
        aiResponse += "Phishing is a cyber attack where attackers disguise themselves as a trustworthy entity to trick you into revealing sensitive information.";
      } else {
        aiResponse += "Please ask me about cybersecurity topics like 'passwords' or 'phishing'.";
      }
      setResponse(aiResponse);
      setIsLoading(false);
    }, 1500); // 1.5-second delay
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto border-l-4 border-primary-blue">
      <h3 className="text-2xl font-bold mb-4 text-secondary-dark dark:text-white">Ask AI</h3>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md min-h-[100px] mb-4">
        {isLoading && <p className="text-gray-500">Thinking...</p>}
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
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiChat;
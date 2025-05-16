'use client';
import React, { useState } from 'react';

const ChatGptSearch = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: query }), // Fixed body format
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      // Extract the response text from the API response
      const responseText =
        data.choices?.[0]?.message?.content || 'No response received';

      setResponse(responseText);
    } catch (error: any) {
      setError(error.message || 'Error: Unable to fetch response');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>ChatGptSearch</h1>
      <input
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {response && (
        <div>
          <h2>Response from ChatGpt:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGptSearch;

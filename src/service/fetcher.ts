// services/fetcher.ts

interface FetcherOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; // extend if needed
  token?: string;
  body?: any;
  headers?: Record<string, string>;
}

export const fetcher = async (url: string, options: FetcherOptions = {}) => {
  const { method = 'GET', token, body, headers = {} } = options;

  const finalHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (token) {
    finalHeaders['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method,
    headers: finalHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Fetch failed: ${errorText}`);
  }

  return response.json().catch(() => null); // If no JSON response, just return null
};

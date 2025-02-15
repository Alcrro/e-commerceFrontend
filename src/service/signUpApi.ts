import { API_SERVER } from '@/constants/apiConstants';

// Define request payload type
interface SignUpRequestPayload {
  email?: FormDataEntryValue | null;
  password?: FormDataEntryValue | null;
}

// Define response data type (adjust based on your API response structure)
interface SignUpResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    // other user data here
  };
}

export const signUpApi = async (
  email?: FormDataEntryValue | null,
  password?: FormDataEntryValue | null
): Promise<SignUpResponse> => {
  // Ensure email and password are provided
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  // Prepare the request payload
  const requestPayload: SignUpRequestPayload = { email, password };

  const response = await fetch(`${API_SERVER}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestPayload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Error ${response.status}: ${errorData.message || 'Sign-up failed'}`
    );
  }

  // If response is successful, parse the response JSON and return the data
  return await response.json();
};

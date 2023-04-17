export async function login(email, password) {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (response.ok && !!data.token) {
    return data.token;
  } else {
    throw new Error('Invalid email or password');
  }
}

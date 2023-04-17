import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok && data.token) {
      router.push('/users');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <main className={styles.login}>
        <div>
          <h1>Login</h1>
        </div>
        {error && <p>{error}</p>}
        <form 
          onSubmit={handleSubmit}
          className={styles.form}>
          <div className={styles.form_input}>
            <label 
              className='form-label'
              htmlFor="email">
                Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className='form-control'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className={styles.form_input}>
            <label className={styles.form_label} htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className='form_control form-control'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button  
            type="submit"
            className='form_button btn btn-primary mt-4'
            >Submit</button>
        </form>        
      </main>
      <style jsx>{`
        .form-control {
          border-radius: 18px;
        }
        .form_button {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 286px;
          border-radius: 18px;
        }  
      `}</style>
    </>
  );
}

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Qui puoi aggiungere la logica di autenticazione, come chiamate API o altro

    if (email === 'example@example.com' && password === 'password') {
      // Autenticazione riuscita
      setError('');
      alert('Login riuscito!');
    } else {
      // Autenticazione fallita
      setError('Credenziali non valide. Riprova.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col m-2'>
        <div className='flex flex-col p-2'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='flex flex-col p-2'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default LoginForm;

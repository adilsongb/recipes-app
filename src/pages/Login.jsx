import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (emailCheck) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCheck);

  const setLocalStorage = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    const objectEmail = { email };
    localStorage.setItem('user', JSON.stringify(objectEmail));
    history.push('/comidas');
  };

  const MAX_LENGTH = 6;
  const disabled = password.length > MAX_LENGTH && isEmailValid(email);
  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !disabled }
        onClick={ setLocalStorage }
      >
        Entrar

      </button>
    </form>
  );
}
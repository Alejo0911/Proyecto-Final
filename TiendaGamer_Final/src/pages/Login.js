
import React, { useState } from 'react';
import Alert from '../components/Alert';
import api from '../api';
import './Login.css';

const Login = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simula validación con el backend
      const response = await api.post('/users/login', credentials);
      setAlert({ type: 'success', message: 'Inicio de sesión exitoso' });
      setTimeout(() => {
        window.location.href = '/store'; // Redirigir a la tienda
      }, 2000);
    } catch (error) {
      setAlert({ type: 'error', message: 'Credenciales inválidas o error del servidor' });
    }
  };

  return (
    <div className="login-container">
      {alert.message && <Alert type={alert.type} message={alert.message} />}
      <h1>Bienvenido a la Tienda Gamer</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingresa tu usuario"
          required
          onChange={handleChange}
        />
        
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          required
          onChange={handleChange}
        />
        
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

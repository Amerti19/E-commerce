import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import users from '../context/demo.json';

function Login() {
  const { dispatch } = useContext(UserContext);
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.username) setUsername(location.state.username);
    if (location.state?.password) setPassword(location.state.password);
  }, [location.state]);

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      dispatch({ type: 'LOGIN', payload: foundUser });
      dispatch({ type: 'ADD_ORDER', payload: foundUser.orders || [] });
      alert('Login successful');
      navigate('/products');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-600 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Welcome Back</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 transition"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="mt-6 w-full bg-black-600 text-white py-3 rounded-md font-semibold bg-gray-700 transition"
        >
          Log In
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-black-600 hover:underline font-semibold">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

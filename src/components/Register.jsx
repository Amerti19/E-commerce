import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { dispatch } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
    const newUser = { username, password };
    dispatch({ type: 'REGISTER', payload: newUser });
    alert('Registration successful');
    navigate('/login', { state: { username, password } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-600 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Create an Account</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 transition"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 transition"
          />
        </div>
        <button
          type="submit"
          onClick={handleRegister}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md font-semibold bg-gray-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-black-600 hover:underline font-semibold">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;

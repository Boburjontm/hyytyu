import React from 'react';
import { Link } from 'react-router-dom';
import Photo from "../../public/img/sectionright.svg"; // Rasm manzili

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Chap tomon */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-extrabold text-white">Login to your account</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {/* Password input */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Link to SignUp page */}
              <div className="text-sm">
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Don't have an account? Sign Up
                </Link>
              </div>
            </div>

            {/* Login button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>

            {/* Google login button */}
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* O'ng tomon (rasm) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Photo})` }}>
        {/* Rasm fonida qo'shimcha matn yoki effekt qo'shishingiz mumkin */}
      </div>
    </div>
  );
}

export default Login;

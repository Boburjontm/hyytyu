import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Photo from "../../public/img/sectionright.svg"; // Rasm manzili

const SignUp: React.FC = () => {
  const navigate = useNavigate(); // Navigatsiya uchun hook

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Bu yerda forma ma'lumotlarini olish va yuborish lozim
    console.log('Sign Up form submitted!');

    // Sign Up muvaffaqiyatli bo'lgandan so'ng foydalanuvchini login sahifasiga yo'naltirish
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Chap tomon */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-extrabold text-white">Create a new account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="sr-only text-white">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
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
              <div className="text-sm">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Log in
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* O'ng tomon (rasm) */}
      <div
        className="hidden lg:flex flex-1 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Photo})` }}
      >
        {/* Rasm fonida qo'shimcha matn yoki effekt qo'shishingiz mumkin */}
      </div>
    </div>
  );
};

export default SignUp;

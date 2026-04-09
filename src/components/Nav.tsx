import Link from 'next/link';

import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800">SaaS Training</a>
          </Link>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800">Accueil</a>
          </Link>
          <Link href="/create">
            <a className="text-gray-600 hover:text-gray-800">Créer</a>
          </Link>
          <Link href="/modules">
            <a className="text-gray-600 hover:text-gray-800">Modules</a>
          </Link>
          <Link href="/practice">
            <a className="text-gray-600 hover:text-gray-800">Practice</a>
          </Link>
          <Link href="/evaluation">
            <a className="text-gray-600 hover:text-gray-800">Evaluation</a>
          </Link>
          <Link href="/community">
            <a className="text-gray-600 hover:text-gray-800">Community</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
          </Link>
          <Link href="#features">
            <a className="text-gray-600 hover:text-gray-800">Fonctionnalités</a>
          </Link>
          <Link href="#contact">
            <a className="text-gray-600 hover:text-gray-800">Contact</a>
          </Link>
          <Link href="/login">
            <a className="text-gray-600 hover:text-gray-800">Se connecter</a>
          </Link>
          <Link href="/register">
            <a className="text-gray-600 hover:text-gray-800">Inscription</a>
          </Link>
          <Link href="/admin/users">
            <a className="text-gray-600 hover:text-gray-800">Admin</a>
          </Link>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-800">Accueil</a>
            </Link>
            <Link href="/create">
              <a className="text-gray-600 hover:text-gray-800">Créer</a>
            </Link>
            <Link href="/modules">
              <a className="text-gray-600 hover:text-gray-800">Modules</a>
            </Link>
            <Link href="/practice">
              <a className="text-gray-600 hover:text-gray-800">Practice</a>
            </Link>
            <Link href="/evaluation">
              <a className="text-gray-600 hover:text-gray-800">Evaluation</a>
            </Link>
            <Link href="/community">
              <a className="text-gray-600 hover:text-gray-800">Community</a>
            </Link>
            <Link href="/dashboard">
              <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
            </Link>
            <Link href="#features">
              <a className="text-gray-600 hover:text-gray-800">Fonctionnalités</a>
            </Link>
            <Link href="#contact">
              <a className="text-gray-600 hover:text-gray-800">Contact</a>
            </Link>
            <Link href="/login">
              <a className="text-gray-600 hover:text-gray-800">Se connecter</a>
            </Link>
            <Link href="/register">
              <a className="text-gray-600 hover:text-gray-800">Inscription</a>
            </Link>
            <Link href="/admin/users">
              <a className="text-gray-600 hover:text-gray-800">Admin</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-dark-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-secondary text-3xl font-heading font-extrabold">HixTeam</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-light focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-light hover:text-secondary font-medium transition">Home</Link>
            <a href="#pc-download" className="text-light hover:text-secondary font-medium transition">PC Download</a>
            <a href="#mobile-download" className="text-light hover:text-secondary font-medium transition">Mobile Download</a>
            <a href="#trailer" className="text-light hover:text-secondary font-medium transition">Trailer</a>
            <a href="#blog" className="text-light hover:text-secondary font-medium transition">Blog</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-light hover:text-secondary font-medium transition py-2 border-b border-dark-secondary">Home</Link>
            <a href="#pc-download" className="text-light hover:text-secondary font-medium transition py-2 border-b border-dark-secondary">PC Download</a>
            <a href="#mobile-download" className="text-light hover:text-secondary font-medium transition py-2 border-b border-dark-secondary">Mobile Download</a>
            <a href="#trailer" className="text-light hover:text-secondary font-medium transition py-2 border-b border-dark-secondary">Trailer</a>
            <a href="#blog" className="text-light hover:text-secondary font-medium transition py-2">Blog</a>
          </div>
        </nav>
      </div>
    </header>
  );
}


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, CirclePlus, User, Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Track', path: '/track', icon: Search },
    { name: 'Invest', path: '/invest', icon: CirclePlus },
    { name: 'Credits', path: '/credits', icon: CirclePlus },
    { name: 'Dashboard', path: '/dashboard', icon: User },
    { name: 'Investor', path: '/investor-dashboard', icon: TrendingUp },
  ];

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo with enhanced design */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/457a733f-f8ef-400c-b010-9d6aa9be9f34.png" 
                alt="BeeTrace" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-green-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              BeeTrace
            </span>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 shadow-lg'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-green-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                
                {/* Active indicator */}
                {isActive(item.path) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button with enhanced styling */}
          <div className="hidden md:block">
            <Link to="/dashboard">
              <Button className="btn-modern bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button with enhanced design */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-3 rounded-2xl text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 glass-card"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with enhanced styling */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 glass-card-dark rounded-b-2xl mt-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 mx-2 stagger-animation ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 shadow-lg'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-green-50'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="mx-2 mt-4">
                <Button className="w-full btn-modern bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-2xl shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

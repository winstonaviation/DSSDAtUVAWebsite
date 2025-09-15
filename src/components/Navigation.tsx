import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navigationLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/work-with-us', label: 'WORK WITH US' },
    { path: '/contact', label: 'CONTACT US' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo_dark.svg" alt="DS4SD Logo" className="h-8 w-auto" />
            <div className="hidden md:block text-xl font-bebas font-bold text-primary whitespace-nowrap">
              DATA SCIENCE FOR SUSTAINABLE DEVELOPMENT <span className="text-muted-foreground">at UVA</span>
            </div>
            <div className="md:hidden text-sm font-georgia text-muted-foreground">
              at uva
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-xl font-bebas font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`text-xl font-bebas font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/work-with-us" 
              className={`text-xl font-bebas font-medium transition-colors hover:text-primary ${
                isActive('/work-with-us') ? 'text-primary' : 'text-foreground'
              }`}
            >
              WORK WITH US
            </Link>
            <Link 
              to="/contact" 
              className={`text-xl font-bebas font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              CONTACT US
            </Link>
            <Button asChild variant="default" size="sm">
              <Link to="/apply" className="font-bebas text-lg">APPLY NOW</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-primary font-bebas">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-bebas font-medium py-3 px-4 rounded-md transition-colors ${
                        isActive(link.path) 
                          ? 'text-primary bg-primary/10' 
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="default" size="lg" className="mt-4">
                    <Link to="/apply" onClick={() => setIsOpen(false)} className="font-bebas">APPLY NOW</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
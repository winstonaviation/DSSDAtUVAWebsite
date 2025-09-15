import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bebas font-bold text-primary">DATA SCIENCE FOR SUSTAINABLE DEVELOPMENT</div>
                <div className="text-sm text-muted-foreground font-georgia">at UVA</div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Data Science for Sustainable Development at the University of Virginia. 
                Applying data science to create a more sustainable future.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 Data Science for Sustainable Development at UVA. 
                We are a student group acting independently of the University of Virginia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/work-with-us" className="hover:text-primary transition-colors">Work With Us</a></li>
                <li><a href="/apply" className="hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="mailto:dssduva@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
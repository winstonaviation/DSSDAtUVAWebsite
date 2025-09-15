import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
      {/* Animated bar graph background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 40" fill="none" stroke="hsl(210 80% 70%)" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated bars */}
          <g fill="hsl(210 80% 85%)" className="opacity-60 md:opacity-60">{/* Reduced opacity on mobile */}
            {/* Bar 1 */}
            <rect x="200" y="300" width="40" height="300" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="3s" repeatCount="indefinite" values="50;300;150;300;50"/>
              <animate attributeName="y" dur="3s" repeatCount="indefinite" values="550;300;450;300;550"/>
            </rect>
            
            {/* Bar 2 */}
            <rect x="280" y="250" width="40" height="350" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="4s" repeatCount="indefinite" values="100;350;200;350;100"/>
              <animate attributeName="y" dur="4s" repeatCount="indefinite" values="500;250;400;250;500"/>
            </rect>
            
            {/* Bar 3 */}
            <rect x="360" y="200" width="40" height="400" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="3.5s" repeatCount="indefinite" values="150;400;250;400;150"/>
              <animate attributeName="y" dur="3.5s" repeatCount="indefinite" values="450;200;350;200;450"/>
            </rect>
            
            {/* Bar 4 */}
            <rect x="440" y="350" width="40" height="250" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="2.8s" repeatCount="indefinite" values="80;250;120;250;80"/>
              <animate attributeName="y" dur="2.8s" repeatCount="indefinite" values="520;350;480;350;520"/>
            </rect>
            
            {/* Bar 5 */}
            <rect x="520" y="180" width="40" height="420" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="4.2s" repeatCount="indefinite" values="200;420;300;420;200"/>
              <animate attributeName="y" dur="4.2s" repeatCount="indefinite" values="400;180;300;180;400"/>
            </rect>
            
            {/* Bar 6 */}
            <rect x="600" y="280" width="40" height="320" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="3.3s" repeatCount="indefinite" values="120;320;180;320;120"/>
              <animate attributeName="y" dur="3.3s" repeatCount="indefinite" values="480;280;420;280;480"/>
            </rect>
            
            {/* Bar 7 */}
            <rect x="680" y="220" width="40" height="380" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="3.7s" repeatCount="indefinite" values="160;380;240;380;160"/>
              <animate attributeName="y" dur="3.7s" repeatCount="indefinite" values="440;220;360;220;440"/>
            </rect>
            
            {/* Bar 8 */}
            <rect x="760" y="300" width="40" height="300" rx="4" className="opacity-20 md:opacity-60">
              <animate attributeName="height" dur="2.9s" repeatCount="indefinite" values="100;300;150;300;100"/>
              <animate attributeName="y" dur="2.9s" repeatCount="indefinite" values="500;300;450;300;500"/>
            </rect>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[600px]">
        <div className="w-full flex justify-start">
          {/* Left-aligned content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              DATA SCIENCE FOR SUSTAINABLE DEVELOPMENT
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-blue-100 max-w-xl">
              Data Science for Sustainable Development at the University of Virginia is a student organization 
              dedicated to providing technical services to nonprofits, government agencies, and companies working in development and social impact with limited technological resources and capacity. 
              We aim to foster innovation through interdisciplinary collaboration, open-source technical knowledge, and the desire to provide solutions to humanitarian and development practitioners.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
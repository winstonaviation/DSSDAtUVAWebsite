import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Building, GraduationCap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between data science innovation and sustainable development through showing organizations the power of data science through analyzing their data and creating compelling visualizations. 
              We also provide custom built software solutions to our partners in order to further their missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For UVA Students */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">For UVA Students</CardTitle>
                <CardDescription>
                  Bolster your experience in data science, software solutions, or consulting through hands-on projects and mentorship
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Join our community of students working on impactful sustainability challenges. 
                  Gain experience with real-world projects while making a positive impact.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link to="/about" className="inline-flex items-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Organizations */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">For Organizations</CardTitle>
                <CardDescription>
                  Partner with us for data-driven sustainability solutions and software solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Leverage our expertise in data science to address your sustainability challenges. 
                  We provide consulting services and software solution.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link to="/work-with-us" className="inline-flex items-center">
                    Work With Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in applying data science to create a more sustainable future. 
            Whether you're a student or organization, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/apply">Apply to Join</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white bg-white/10 hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
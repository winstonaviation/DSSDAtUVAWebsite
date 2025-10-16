import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, BookOpen } from 'lucide-react';

const Apply = () => {
  const positions = [
    {
      title: "Data Engineer",
      department: "Data Science Track",
      type: "Project-based",
      description: "Engage in data cleaning, preprocessing, machine learning, and more for our sustainability-focused projects.",
      requirements: ["Strong background in statistics/data science", "Python/R programming experience", "Interest in environmental issues", "Undergraduate student"],
      commitment: "3-5 hours/week"
    },
    {
      title: "Software Engineer",
      department: "Software Track",
      type: "Project-based",
      description: "Engineer software-based and artificial intelligence automation solutions to address sustainability challenges.",
      requirements: ["Project management experience", "Strong communication skills", "Organized and detail-oriented", "Interest in sustainability"],
      commitment: "3-5 hours/week"
    },
    {
      title: "Technical/Business Consultant",
      department: "Business Consulting Track",
      type: "Project-based",
      description: "Work directly with partner organizations to reccomend, coordinate, and implement consulting solutions for sustainability challenges.",
      requirements: ["Advanced data science skills", "Experience with machine learning", "Client-facing experience preferred", "Graduate student preferred"],
      commitment: "3-5 hours/week"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with your resume and several questions.",
      timeline: "Fall and Spring semesters"
    },
    {
      step: 2,
      title: "Initial Review",
      description: "Our team reviews your application and assesses fit for available positions.",
      timeline: "1-2 weeks"
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Selected candidates participate in interviews with our executive team.",
      timeline: "2-3 weeks"
    },
    {
      step: 4,
      title: "Final Decision",
      description: "We make final selections and extend offers to successful candidates.",
      timeline: "1 week"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Apply Now</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our team and help shape the future of sustainable development through data science
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Join Data Science For Sustainable Development?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Be part of a community that's making a real difference in the world through data science and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Real Impact</h3>
              <p className="text-muted-foreground text-sm">
                Work on projects that create meaningful environmental and social change in our community and beyond.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Skill Development</h3>
              <p className="text-muted-foreground text-sm">
                Gain hands-on experience with cutting-edge data science tools and techniques while building your portfolio.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Network Building</h3>
              <p className="text-muted-foreground text-sm">
                Connect with like-minded peers, faculty mentors, and industry professionals in sustainability and tech.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Flexible Commitment</h3>
              <p className="text-muted-foreground text-sm">
                Choose from various roles and commitment levels that fit your academic schedule and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're currently recruiting for these exciting opportunities. Find the role that matches your skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{position.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{position.department}</CardDescription>
                    </div>
                    <Badge variant="secondary">{position.type}</Badge>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      <strong>Commitment:</strong> {position.commitment}
                    </span>
                    <Button size="sm" onClick="">Apply</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined application process is designed to be thorough yet efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {phase.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {phase.timeline}
                  </Badge>
                </div>
                {index < applicationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-border transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards joining our mission. We're excited to learn about your passion for 
            data science and sustainability, and how you can contribute to our growing community.
          </p>
          <div className="flex justify-center">
            <Button variant="secondary" size="lg" className="font-bebas">
              Start Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
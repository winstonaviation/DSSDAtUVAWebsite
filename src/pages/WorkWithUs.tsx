import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Zap, TreePine, BarChart3, Users, Heart } from 'lucide-react';

const WorkWithUs = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Interactive Maps & Dashboards",
      description: "Custom interactive visualizations and dashboards for environmental monitoring, sustainability tracking, and stakeholder engagement. From plastics pollution audits to solar energy monitoring systems."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Web Applications & Calculators",
      description: "Purpose-built web applications and calculators for sustainability decision-making, such as electric bus cost savings calculators and renewable energy ROI tools for organizations."
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Digital Storytelling & Storymaps",
      description: "Compelling narrative-driven visualizations that communicate your organization's impact through interactive storymaps, showcasing sustainability initiatives and community engagement."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Databases & Knowledge Platforms",
      description: "Comprehensive databases and searchable platforms for organizing and sharing sustainability data, SDG tracking, and creating accessible knowledge repositories for stakeholders."
    }
  ];

  const partnershipOptions = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Custom Development Projects",
      description: "Partner with our student teams to build custom interactive maps, dashboards, web applications, and digital platforms. Our projects range from environmental monitoring systems to stakeholder engagement tools, all tailored to your organization's specific needs.",
      benefits: ["Interactive visualizations", "Custom web applications", "Ongoing maintenance", "Student innovation"]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Data Consulting & Analytics",
      description: "Leverage our expertise in geospatial analysis, sustainability metrics, and data visualization to transform your organization's data into actionable insights. We specialize in environmental impact assessment and sustainability reporting.",
      benefits: ["Geospatial analysis", "Sustainability metrics", "Data visualization", "Academic expertise"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Work With Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Data science industry consulting and services for sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Partnership Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer flexible partnership models to meet your organization's unique needs and sustainability goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipOptions.map((option, index) => (
              <Card key={index} className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{option.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {option.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of data science services designed specifically for sustainability challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collaborative approach that ensures your sustainability goals are met with precision and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We start by understanding your organization's sustainability challenges and data landscape." },
              { step: "02", title: "Planning", description: "Our team develops a comprehensive project plan with clear milestones and deliverables." },
              { step: "03", title: "Execution", description: "We implement data science solutions using industry best practices and cutting-edge techniques." },
              { step: "04", title: "Delivery", description: "You receive actionable insights, visualizations, and recommendations for sustainable impact." }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how data science can accelerate your sustainability initiatives. 
            Contact us today to explore partnership opportunities and get started on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-black border-white hover:bg-white hover:text-primary">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white bg-white/10 hover:bg-white hover:text-primary">
              <Link to="/apply">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
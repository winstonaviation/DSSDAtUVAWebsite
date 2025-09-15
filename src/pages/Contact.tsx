import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Calendar, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to explore collaboration opportunities, ask questions, or learn more about our work
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Reach out for general inquiries, partnership opportunities, or project discussions.
                    </p>
                    <a href="mailto:dssduva@gmail.com" className="text-primary hover:underline font-medium">
                      dssduva@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Where Are We</h3>
                    <p className="text-muted-foreground mb-2">
                      Find us on the University of Virginia campus in Charlottesville.
                    </p>
                    <p className="text-foreground">
                      <br />
                      <br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground mb-2">
                      Schedule a remote or in-person meeting during our office hours.
                    </p>
                    <p className="text-foreground">
                      TBD<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-sm">General Inquiry</h4>
                      <p className="text-xs text-muted-foreground mt-1">Questions about Data Science for Sustainable Development</p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-sm">Partnership</h4>
                      <p className="text-xs text-muted-foreground mt-1">Collaboration opportunities</p>
                    </CardContent>
                  </Card>
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-sm">Meeting</h4>
                      <p className="text-xs text-muted-foreground mt-1">Schedule a discussion</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24-48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@virginia.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your organization or company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Partnership Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, inquiry, or how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Data Science for Sustainable Development at the University of Virginia and our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can my organization partner with Data Science for Sustainable Development?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer various partnership models including research collaborations, consulting projects, 
                  and sponsorship opportunities. Contact us to discuss your specific needs and how we can work together.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What types of projects do you work on?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our projects focus on sustainability challenges including climate change analysis, renewable energy 
                  optimization, environmental impact assessment, and social sustainability metrics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can students get involved?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students can join through our application process for various roles including research positions, 
                  project management, and community outreach. Check our Apply page for current openings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity, typically ranging from 8-16 weeks for 
                  consulting projects and longer for research collaborations. We'll discuss timelines during initial consultations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
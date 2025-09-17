import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Calendar, Mail } from 'lucide-react';

const About = () => {
  const officers = [
    {
      name: "Vinith Jayamani",
      position: "President",
      interests: ["Health Science Analytics", "Machine Learning", "Sports Analytics"],
      image: "../../images/VinithJayamani.jpeg",
      linkedin: "https://www.linkedin.com/in/vinith-jayamani-0892692b0/",
      email: "uhe5bj@virginia.edu"
    },
    {
      name: "Winston Shek",
      position: "President of Technology",
      interests: ["Hydrogen-Powered Aircraft", "Software Solutions", "Sustinable Aviation Fuel"],
      image: "https://media.licdn.com/dms/image/v2/D4E03AQH2S7BXguDnDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730055051325?e=1759363200&v=beta&t=VsyaiN2z9mP4bsn7kArs40DWeW98eCb33NXmfn2Nnuw",
      linkedin: "https://www.linkedin.com/in/winston-shek",
      email: "vwy6cc@virginia.edu"
    },
    {
      name: "Dhruv Sarang",
      position: "President of Business Development",
      interests: ["Corporate Sustainability", "Sustainable Solutions", "Business Consulting"],
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGAp-IXPjXwWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701633206496?e=1759363200&v=beta&t=JrQn7MbjpMRHUJ9Pf-OeY5jJXhYMzu4Pr5zZ1vEDBo4",
      linkedin: "https://www.linkedin.com/in/dhruv-sarang/",
      email: "kwc3am@virginia.edu"
    },
    {
      name: "Siddharth Laks",
      position: "Vice President of Business Development",
      interests: ["Deep Learning", "Computer Vision", "Environmental Monitoring"],
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGafzozqBNmIQ/profile-displayphoto-shrink_400_400/B4EZbRiSCUHYAg-/0/1747272147452?e=1759363200&v=beta&t=jftxNxeFYMEKGM4S22E8Eb5UO4EQVjoaKVHQrx4U0xc",
      linkedin: "https://www.linkedin.com/in/siddharth-laks-41876a235/",
      email: "egm8hu@virginia.edu"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering data science education and research for sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Data Science for Sustainable Development at UVA bridges the gap between cutting-edge data science 
                techniques and real-world sustainability challenges. We empower students to develop technical 
                skills while working on projects that create meaningful environmental and social impact.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2025, our organization has grown to become a leading voice in the intersection of 
                technology and sustainability at the University of Virginia. We collaborate with faculty, 
                local organizations, and global partners to tackle complex problems using data-driven solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Climate Change</Badge>
                <Badge variant="secondary">Renewable Energy</Badge>
                <Badge variant="secondary">Biodiversity</Badge>
                <Badge variant="secondary">Social Impact</Badge>
                <Badge variant="secondary">Policy Analysis</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-accent to-accent/50 rounded-lg p-8 w-full max-w-md">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground mb-6">Active Members</div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground mb-6">Active Projects</div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated students leading our mission to apply data science for sustainable development.
              To schedule a meeting with any of our officers, click the calendar icon in their contact section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {officers.map((officer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={officer.image} 
                      alt={officer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{officer.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{officer.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-foreground mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-1">
                      {officer.interests.map((interest, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={officer.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${officer.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Commitment</h3>
              <p className="text-muted-foreground">
                Every project we undertake is guided by principles of environmental stewardship and social responsibility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔬</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Innovation</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge data science techniques to uncover insights and drive meaningful change.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Impact</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnerships and community engagement to amplify our impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin, Phone, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "Click here",
      link: "mailto:gaganreachsky73@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Click here",
      link: "https://www.linkedin.com/in/gagandeep-d-06b88b297/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangalore, India",
      link: null,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
              Currently open to UI/UX design work and collaborations. Let’s create meaningful and impactful user experiences together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {contact.label}
                  </h3>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resume & Portfolio Links */}
          <div className="flex justify-center mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/15 hover:to-primary/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Download Resume
                </h3>
                <p className="text-muted-foreground mb-6 text-justify">
                  Get a detailed overview of my experience, skills, and educational background.
                </p>
                <Button variant="default" size="lg" className="min-w-[160px]">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Availability Status */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-green-100">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-green-700 font-semibold">Available for Projects</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Ready to Collaborate
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-justify">
                I'm open to new design opportunities and collaborations. Whether it’s a mobile app, website redesign, or a full design system, I’d be excited to contribute and bring impactful ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => window.open('mailto:gaganreachsky73@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/gagandeep-d-06b88b297/', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

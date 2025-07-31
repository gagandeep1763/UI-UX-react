import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin, Phone, ExternalLink } from "lucide-react";

const ContactPage = () => {
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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

          {/* Always Learning Section */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-12">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                🌱 Always Learning
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                With hands-on project experience, internships, and constant curiosity, I stay updated with the latest design trends and user experience best practices.
                <br/><br/>
                Let's collaborate and create something impactful.
              </p>
            </CardContent>
          </Card>

          {/* Availability Status */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-green-700 font-semibold">Available for Projects</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Ready to Collaborate
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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

export default ContactPage;

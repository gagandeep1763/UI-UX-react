import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.1 });
  const [contactCardsRef, isContactCardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [linksRef, isLinksVisible] = useScrollAnimation({ threshold: 0.1 });
  const [availabilityRef, isAvailabilityVisible] = useScrollAnimation({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "gagandeep.designer@gmail.com",
      link: "mailto:gagandeep.designer@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/gagandeep-d",
      link: "https://linkedin.com/in/gagandeep-d",
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
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently open to freelance or internship opportunities in UI/UX Design.
              Let's collaborate and create something amazing together!
            </p>
          </div>

          {/* Contact Cards */}
          <div
            ref={contactCardsRef}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${isContactCardsVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 group h-full"
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
              </div>
            ))}
          </div>

          {/* Resume & Portfolio Links */}
          <div
            ref={linksRef}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div
              className={`transition-all duration-1000 ${isLinksVisible ? 'animate-slide-up' : 'opacity-0'}`}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/15 hover:to-primary/10 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and educational background.
                  </p>
                  <Button variant="default" size="lg" className="min-w-[160px]">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 ${isLinksVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: `200ms` }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm hover:from-accent/15 hover:to-accent/10 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <ExternalLink className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    View Portfolio
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Explore more projects and detailed case studies on my portfolio platforms.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Figma
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Behance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability Status */}
          <div
            ref={availabilityRef}
            className={`transition-all duration-1000 ${isAvailabilityVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
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
                  I'm currently accepting new freelance projects and internship opportunities.
                  Whether you need a complete design system, mobile app interface, or website redesign,
                  I'd love to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => window.open('mailto:gagandeep.designer@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Start a Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://linkedin.com/in/gagandeep-d', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

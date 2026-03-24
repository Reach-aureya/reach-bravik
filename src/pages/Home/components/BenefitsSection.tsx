import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Factory-Ready Tech Packs",
      description:
        "Create clear, structured tech packs with specifications, measurements, and BOM details that reduce errors and improve production accuracy."
    },
    {
      icon: Users,
      title: "Consistent Brand Documents",
      description:
        "Maintain uniform layouts, typography, and branding across catalogs, packaging, and presentations for a strong brand identity."
    },
    {
      icon: TrendingUp,
      title: "Faster Workflow & Updates",
      description:
        "Use reusable templates and master layouts to quickly update collections, saving time during seasonal launches."
    },
    {
      icon: Star,
      title: "Better Team Alignment",
      description:
        "Ensure design, production, merchandising, and marketing teams work from the same clear and structured documents."
    },
    {
      icon: Clock,
      title: "High-Quality Print Output",
      description:
        "Export press-ready PDFs with accurate colors, bleed, and professional print settings for packaging and catalogs."
    },
    {
      icon: Users,
      title: "Stronger Sales Presentations",
      description:
        "Create impactful catalogs, line sheets, and decks that improve buyer engagement and support better sales conversions."
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH Bravik
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Layout and DTP Software for Bags Design
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-f8b8d1 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ea6aad mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
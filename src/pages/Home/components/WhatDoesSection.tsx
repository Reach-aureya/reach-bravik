export const WhatDoesSection = () => {
  return (
    <section className="py-10 bg-white text-primary">
      <div className="container mx-auto px-4">
          <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "#a61042" }}>
        What does REACH Bravik do?
      </h2>

        
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH Bravik for Bags Design is a professional layout and documentation solution that helps bag brands convert ideas into factory-ready, marketing-ready, and retail-ready assets with clarity and precision.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            It brings together all product information such as sketches, technical drawings, specifications, colorways, branding, and marketing content into a single structured layout environment. Teams can create tech packs, spec sheets, line sheets, catalogs, and packaging designs that are easy to understand and ready for production.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Using advanced layout tools like grids, master pages, typography control, and color management, users can maintain consistency across large product ranges. Complex documents with images, tables, and annotations can be organized clearly, improving communication across teams and suppliers.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH Bravik also supports export of press-ready and digital PDFs with professional print settings such as bleeds, crop marks, and color profiles, ensuring smooth workflows between design, production, and marketing teams.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;
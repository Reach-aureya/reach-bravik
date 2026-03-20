const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-f8b8d1">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Bravik For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Bravik for Bags Design is built for brands, manufacturers, and teams who need clear, structured documentation and professional layouts for design, production, and sales workflows.
        </p>

        {/* Bag brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Bag and luggage brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Brands managing multiple collections and SKUs that need consistent tech packs, catalogs, and product documentation.
            </li>
            <li>
              Teams that want to align design, merchandising, production, and marketing through structured layouts.
            </li>
          </ul>
        </div>

        {/* Manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM / ODM manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers developing bags for global brands who need standardized spec sheets and tech packs.
            </li>
            <li>
              Teams aiming to reduce sampling errors and improve communication with international clients.
            </li>
          </ul>
        </div>

        {/* Merchandising */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Sourcing, merchandising, and buying teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Teams comparing styles, pricing, and colorways using structured line sheets and visual documents.
            </li>
            <li>
              Professionals who require clear, standardized PDFs for faster approvals and decisions.
            </li>
          </ul>
        </div>

        {/* Design studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design studios and freelance designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Designers delivering professional tech packs, spec decks, and presentation documents for clients.
            </li>
            <li>
              Studios working with multiple brands and requiring scalable, consistent documentation workflows.
            </li>
          </ul>
        </div>

        {/* Export houses */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Export houses and trading companies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Exporters preparing structured proposals combining specifications, pricing, and branding.
            </li>
            <li>
              Teams looking to present polished documentation to secure international orders.
            </li>
          </ul>
        </div>

        {/* Suppliers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Component and material suppliers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Suppliers of zippers, fabrics, trims, and hardware creating product cards and mini-catalogs.
            </li>
            <li>
              Teams showcasing finishes, sizes, and combinations aligned with bag design workflows.
            </li>
          </ul>
        </div>

        {/* Product teams */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Product development teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              In-house teams documenting construction methods, packaging standards, and design intent.
            </li>
            <li>
              Organizations managing global teams and requiring consistent documentation formats.
            </li>
          </ul>
        </div>

        {/* Service providers */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Tech-pack and PLM service providers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Service providers creating structured documentation layered on top of PLM or ERP systems.
            </li>
            <li>
              Teams delivering high-quality documentation as a value-added service to clients.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
import Image from "next/image";

const clientLogos = [
  { name: "Indiska", description: "Fashion & Interior Retail" },
  { name: "Insula", description: "Investment & Property" },
  { name: "NK", description: "Department Store" },
  { name: "Kesko", description: "Finnish Retail Group" },
  { name: "Cervera", description: "Home & Tableware" },
  { name: "Villeroy & Boch", description: "Premium Tableware" },
  { name: "Unilever", description: "Consumer Goods" },
  { name: "Gallerix", description: "Art & Framing" }
];

export function LogoCloudSection() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6">
          FÖRTROENDET FRÅN LEDANDE FÖRETAG
        </h3>
        <div className="relative">
          <div className="grid grid-cols-2 place-items-center gap-4 md:gap-6 lg:grid-cols-4 xl:gap-x-8 2xl:grid-cols-8">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="group text-center px-2 py-3 transition-all duration-300 hover:scale-105"
                title={client.description}
              >
                <div className="text-lg font-bold text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300 tracking-wider">
                  {client.name}
                </div>
                <div className="text-xs text-muted-foreground/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.description}
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
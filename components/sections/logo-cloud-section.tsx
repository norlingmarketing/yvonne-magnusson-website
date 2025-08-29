import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

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

const LogoCard = ({ client }: { client: { name: string; description: string } }) => (
  <div
    className="group text-center px-6 py-4 mx-4 transition-all duration-300 hover:scale-105 cursor-pointer"
    title={client.description}
  >
    <div className="text-lg font-bold text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300 tracking-wider whitespace-nowrap">
      {client.name}
    </div>
    <div className="text-xs text-muted-foreground/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {client.description}
    </div>
  </div>
);

export function LogoCloudSection() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
          FÖRTROENDET FRÅN LEDANDE FÖRETAG
        </h3>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {clientLogos.map((client, idx) => (
              <LogoCard key={idx} client={client} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-20 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-20 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
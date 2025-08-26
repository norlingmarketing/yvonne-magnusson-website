import Image from "next/image";

const clientLogos = [
  "Indiska",
  "Insula", 
  "NK",
  "Kesko",
  "Cervera",
  "VilleroyBoch",
  "Unilever",
  "Gallerix"
];

export function LogoCloudSection() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6">
          FÖRTROENDET FRÅN LEDANDE FÖRETAG
        </h3>
        <div className="relative">
          <div className="grid grid-cols-2 place-items-center gap-2 md:gap-4 lg:grid-cols-4 xl:gap-x-6 2xl:grid-cols-8">
            {clientLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                width={160}
                height={40}
                className="h-10 w-40 px-2 brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                alt={`${logo} logo`}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
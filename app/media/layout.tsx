import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Press - Pressresurser och Expertkommentarer",
  description: "Presskit, mediematerial och expertkommentarer från Yvonne Magnusson. Tillgänglig för intervjuer, keynotes och expertanalys inom transformation och retail.",
  keywords: [
    "media kit",
    "press resources",
    "expert commentary",
    "keynote speaker",
    "media appearances",
    "transformation expert",
    "retail expert",
    "press releases",
    "speaking engagements",
    "media interviews"
  ],
  openGraph: {
    title: "Media & Press - Pressresurser och Expertkommentarer | Yvonne Magnusson",
    description: "Presskit, mediematerial och expertkommentarer från transformationsexperten Yvonne Magnusson.",
    url: "https://yvonnemagnusson.com/media",
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
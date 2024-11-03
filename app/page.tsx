"use client";
import { lazy, useEffect, useState } from "react";
const Header = lazy(() => import("@/components/Header"));
const Partners = lazy(() => import("@/components/Partners"));
const FeatArtCat = lazy(() => import("@/components/FeatArtCat"));
const LatMaster = lazy(() => import("@/components/LatMaster"));
const Services = lazy(() => import("@/components/Services"));
const Solutions = lazy(() => import("@/components/Solutions"));
const Quotes = lazy(() => import("@/components/Quotes"));
const Incredible = lazy(() => import("@/components/Incredible"));
const ArtEvents = lazy(() => import("@/components/ArtEvents"));
const AddMore = lazy(() => import("@/components/AddMore"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    const refreshWidth = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", refreshWidth);
    }

    return () => window.removeEventListener("reset", refreshWidth);
  });

  return (
    <>
      <Header width={width} />
      <main>
        <Partners />
        <FeatArtCat />
        <LatMaster />
        <Services />
        <Solutions width={width} />
        <Quotes width={width} />
        <Incredible />
        <ArtEvents />
        <AddMore width={width} />
      </main>
      <Footer />
    </>
  );
}

"use client";
import { lazy } from "react";
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
  return (
    <>
      <Header />
      <main>
        <Partners />
        <FeatArtCat />
        <LatMaster />
        <Services />
        <Solutions />
        <Quotes />
        <Incredible />
        <ArtEvents />
        <AddMore />
      </main>
      <Footer />
    </>
  );
}

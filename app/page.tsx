import { Header } from "@/components/Header";
import { Partners } from "@/components/Partners";
import { FeatArtCat } from "@/components/FeatArtCat";
import { LatMaster } from "@/components/LatMaster";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <FeatArtCat />
      <LatMaster />
      <Services />
    </>
  );
}

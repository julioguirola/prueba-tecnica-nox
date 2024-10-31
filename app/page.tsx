import { Header } from "@/components/Header";
import { Partners } from "@/components/Partners";
import { FeatArtCat } from "@/components/FeatArtCat";
import { LatMaster } from "@/components/LatMaster";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <FeatArtCat />
      <LatMaster />
      <Services />
      <Solutions />
    </>
  );
}

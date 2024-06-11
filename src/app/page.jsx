import Image from "next/image";
import Products from "./components/AllProducts";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BestProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <BestProductGrid />
    </main>
  );
}

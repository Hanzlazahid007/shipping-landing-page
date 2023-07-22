import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Shipping from "@/components/Shipping";
import Delivery from "@/components/Delivery";
import Editbag from "@/components/Editbag";

import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

import Services from "@/components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Shipping />
      <Delivery />
      <Editbag />
      <Cart />

      <Services />
      <Footer />
    </>
  );
}

'use client'
import { Navbar } from "@/app/components/index";
import {Main, Details} from "@/app/pages/index"; 
import "@/app/globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />

    </div>
  );
}

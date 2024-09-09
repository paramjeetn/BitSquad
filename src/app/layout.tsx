// src/app/layout.tsx
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Rail Madad",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          {/* <div id="modal-root"></div>  */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

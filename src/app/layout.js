// src/app/layout.js (or src/app/RootLayout.js)
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar"; // Import Navbar
import "./globals.css";

export const metadata = {
  title: "Test Rainbow-Kids Achievement Center",
  description: "Helping kids achieve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://rainbowkids-ac.com/wp-content/uploads/2018/04/favicon.png"
        />
      </head>
      <body className="layoutContainer">
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

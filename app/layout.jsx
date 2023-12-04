import Header from "@/components/header";
import Footer from "@/components/footer";

import "@/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto ">
      <body className="flex flex-col  font-sans bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

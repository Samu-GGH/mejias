import { FC, PropsWithChildren } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "@/app/ui/globals.css";
import { montserrat } from "./ui/fonts";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className={`${montserrat.className} bg-slate-50`}>
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

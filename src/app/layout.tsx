import { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";
import { montserrat } from "./ui/fonts";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className={`${montserrat.className} bg-slate-50`}>{children}</body>
    </html>
  );
};

export default RootLayout;

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl"  data-theme="mytheme">
      <body className="antialiased font-sans" data-theme="mytheme">
      {/* <div className="container mx-auto"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}

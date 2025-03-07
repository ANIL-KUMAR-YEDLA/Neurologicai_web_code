import "./globals.css";
import { Poppins, Inter, K2D } from "next/font/google"; 

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],  
});

const inter = Poppins({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],  
});

const k2d = Poppins({
  weight: ["400", "500", "600", "700"],  
  subsets: ["latin"],  
});

export const metadata = {
  title: "NeurologicAI",
  description: "Transforming Business with Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

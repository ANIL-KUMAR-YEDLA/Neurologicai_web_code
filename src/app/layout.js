import "./globals.css";

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

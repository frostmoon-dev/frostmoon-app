import "./globals.css";

export const metadata = {
  title: "frostmoon",
  description:
    "A developer's portfolio with the haunting elegance of Columbina from Genshin Impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
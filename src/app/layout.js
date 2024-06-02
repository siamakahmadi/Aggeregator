import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Aggeregator Admin",
  description: "This is the aggeregator Platform Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

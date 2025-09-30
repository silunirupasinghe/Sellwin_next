import type { Metadata } from "next";
import ThemeRegistry from "@/components/theme";
import Navigation from "@/components/navbar"; // your navbar
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Sellwin Holdings",
  description: "Premium Canned Fish Distributor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navigation />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

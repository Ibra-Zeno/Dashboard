import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | The GraphFather",
    default: "The GraphFather",
  },
  description: "The GraphFather dashboard built using Next.js and Tailwind CSS",
  // metadataBase: new URL("https://the-graphfather.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

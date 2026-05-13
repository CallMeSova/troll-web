// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import FloatingDisclaimer from "@/components/FloatingDisclaimer"; // Import ปุ่มเข้ามา

export const metadata: Metadata = {
  title: "Bast Auth System",
  description: "Minimal Troll Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505]">
        {/* วางไว้ตรงนี้เพื่อให้แสดงผลทับทุกหน้า */}
        <FloatingDisclaimer />

        <main>{children}</main>
      </body>
    </html>
  );
}
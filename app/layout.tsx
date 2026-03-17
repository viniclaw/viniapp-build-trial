import "./globals.css";

export const metadata = {
  title: "Hello World Test",
  description: "Test viniapp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}

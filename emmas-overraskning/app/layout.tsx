import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300">
        {children}
      </body>
    </html>
  );
}
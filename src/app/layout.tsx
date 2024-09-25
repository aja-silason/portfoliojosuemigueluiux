import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

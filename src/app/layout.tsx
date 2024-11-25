"use client"

import "./shared/styles/globals.css";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import Navbar from "@/app/widgets/Navbar/ui/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider value={defaultSystem}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

'use client';

import '@/shared/styles/globals.css';
import {Box, ChakraProvider, defaultSystem} from '@chakra-ui/react';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import {QueryClient} from '@tanstack/query-core';
import {QueryClientProvider} from '@tanstack/react-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={defaultSystem}>
            <Navbar />
            <Box>{children}</Box>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

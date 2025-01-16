import './globals.css';
import Header from './components/Header';  
import React, { Suspense } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website built with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
      </Suspense>
      <body className="font-sans">{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Finance Tracker',
  description: 'Finance Tracker to track your budget and expenses at one place at your convenience.',
}

import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark font-inter`}>
      <body>{children}</body>
    </html>
  )
}

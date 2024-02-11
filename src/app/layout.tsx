import type { Metadata } from 'next';
import { Inria_Sans, Fira_Code } from 'next/font/google';
import '@/styles/globals.scss';
import { GlobalStorage } from "@/contexts/GlobalContext";

import cn from '@/constants/filters/cn';

const inriaSans = Inria_Sans({ subsets: ['latin'], weight: ["400", "700"], variable: "--font-inria-sans"});
const firaCode = Fira_Code({subsets: ['latin'], weight: "variable", variable: "--font-fira-code"});

export const metadata: Metadata = {
  title: 'Andre Mendonca - UX/UI Designer & Front-end Developer',
  description: '-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalStorage>
      <html lang="en-AU" className={cn("devMode", firaCode.variable, inriaSans.variable)}>
        <body className={cn("bg-r-bg text-r-text font-copy relative td-150", inriaSans.className)}>
          <div className="bg-r-bg relative td-150">
            {children}
          </div>
        </body>
      </html>
    </GlobalStorage>
  )
}
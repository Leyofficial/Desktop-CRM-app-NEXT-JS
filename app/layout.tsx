import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "@/Providers/Providers";
import React from "react";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {sideBarList} from "@/consts/side-bar-list";
import {Header} from "@/components/Header/Header";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRM - system',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <main>
              <div>
                  <Sidebar list={sideBarList}/>
              </div>
              <section className={'w-full px-4 pl-28'}>
                  <div>
                      <header className={'w-full'}>
                          <Header title={'Dashboard'}/>
                      </header>
                      <section>
                          {children}
                      </section>
                  </div>
              </section>
          </main>

      </Providers></body>
    </html>
  )
}

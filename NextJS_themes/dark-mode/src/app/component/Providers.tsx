"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <ThemeProvider attribute='class'>{children}</ThemeProvider>
        </div>
    )
}

export default Providers

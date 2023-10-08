'use client'
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default layout
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max[h-screen]'>
            <Navbar />
            {children}
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default layout

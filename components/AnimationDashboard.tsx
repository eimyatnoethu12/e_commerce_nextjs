'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider, TrackDetails } from "keen-slider/react"
import Image from 'next/image'
const images = [
    // "/man/all-3.avif",
    // "/man/all-1.avif",
    // "/man/all-2.avif",
    // "/man/man4.avif",
    // "/man/man5.avif",
    "/man/shoe2.jpg",
    "/man/man-bg2.jpg",
    "/man/girl-bg2.jpg",
    // "/man/girl-bg.avif",
    "/man/girl-bg1.jpg",

    "/man/man-bg3.jpg",

]
const AnimationDashboard = () => {
    const [details, setDetails] = React.useState<TrackDetails | null>(null)

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        detailsChanged(s) {
            setDetails(s.track.details)
        },
        initial: 2,
    })

    function scaleStyle(idx: number) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        }
    }
    return (
        <div className='-mt-10 sm:-mt-2 md:-mt-12 lg:mt-0'>
            <div ref={sliderRef} className="keen-slider zoom-out">
                {images.map((src, idx) => (
                    <div key={idx} className="keen-slider__slide zoom-out__slide">

                        <div style={scaleStyle(idx)}
                            className=' flex justify-center
                            w-full  '>

                            <Image src={src} width={350}
                                height={300}
                                className=" 
             object-none object-left-top 
              lg:w-3/12 
              md:w-1/12
               
             " alt='image' />
                            <Image src={src} width={950}
                                height={800}
                                className=" 
                                 w-full  mt-20
                                 sm:mt-12 sm:w-2/3
                                  lg:mt-0 lg:w-5/6 lg:h-1/6
                                max-h-screen object-left-top" alt='image' />
                            <Image src={src} width={950}
                                height={800}
                                className=" 
                                 object-none object-left-bottom
                                  w-50 lg:h-1/6 lg:-mt-14
                                 " alt='image' />

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AnimationDashboard


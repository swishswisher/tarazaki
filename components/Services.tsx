import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-cover bg-no-repeat z-10 bg-img pb-5">
      <div className="z-1 flex w-full text-center items-center justify-center  bg-black/80 ">
          <h2 className="bold-40 lg:bold-64 items-center backdrop-blur-md p-4 rounded-md text-center text-white">Our Services</h2>
      </div>
      
      <div className="max-container padding-container relative w-full flex justify-end md:pt-20">      
        <ul className="pt-10 grid gap-10 md:grid-cols-2 lg:pt-20 lg:gap-20 ">
          {FEATURES.map((feature) => (
            <FeatureItem 
              key={feature.title}
              icon={feature.icon}
              variant={feature.variant}
              description={feature.description}
              title={feature.title}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string
  icon: string
  variant: string
  description: string
}

const FeatureItem = ({title, icon, variant, description}: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start backdrop-blur-md bg-black/30 p-4 rounded-md hover:motion-safe:animate-bounce">
      <div className="rounded-full p-4 lg:p-7 mt-6">
        <Image src={icon} alt="icon" width={40} height={40} />
      </div>

      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-blue-70">
        {title}
      </h2>

      <p className="regular-16 mt-5 text-white lg:mt-[30px] lg:bg-none py-5 h-36">
        {description}
      </p>
    </li>
  )
}

export default Services
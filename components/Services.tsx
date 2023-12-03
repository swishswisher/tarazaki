import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24 z-10 bg-img ">
      <div className="z-10 flex w-full flex-col items-center">
          <h2 className="bold-40 lg:bold-64">Our Services</h2>
      </div>
      <div className="max-container padding-container relative w-full flex justify-end">
        

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
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7">
        <Image src={icon} alt="icon" width={40} height={40} />
      </div>

      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>

      <p className="regular-16 mt-5 bg-white text-gray-30 lg:mt-[30px] lg:bg-none px-2 py-5 rounded-md h-36">
        {description}
      </p>
    </li>
  )
}

export default Services
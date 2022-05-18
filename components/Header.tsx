import React from 'react'
import Image from 'next/image'
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
} from '@heroicons/react/solid'

import { StarIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div>
      <div className="relative h-10 w-20">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>

      <div className="">
        <HomeIcon />
        <p>Home</p>
        <ChevronDownIcon />
      </div>
    </div>
  )
}

export default Header

import React from 'react'
// import comming from "public/comming.gif"
import Image from 'next/image'

const page = () => {
  return (
    <Image
    src="/commingsoon.png"
    // width={1500}
    // height={300}
    fill
    alt="Picture of the author"
  />
  )
}

export default page
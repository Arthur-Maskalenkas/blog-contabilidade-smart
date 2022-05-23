import React from 'react'
import Image from 'next/image'

const LogoDesktop = () => (
  <div data-logo-desktop>
    <Image
      width={128}
      height={34}
      src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1653302484/blog-m%C3%A3e/alume-logo-desktop_qtlnlo.png"
      layout="fixed"
      alt="logo"
    />
  </div>
)

export default LogoDesktop

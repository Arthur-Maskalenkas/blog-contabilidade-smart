import { listOfMenuLinks } from 'helpers/data/links-menu'
import Link from 'next/link'
import React from 'react'

const LinksMenuList = () => (
  <>
    {listOfMenuLinks.map(({ label, href }) => (
      <Link href={`/${href}`} key={href} data-link>
        {label}
      </Link>
    ))}
  </>
)

export default LinksMenuList

import Header from 'components/organisms/Header'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import 'styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp

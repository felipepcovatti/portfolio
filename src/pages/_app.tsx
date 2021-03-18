import type { AppProps /*, AppContext */ } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

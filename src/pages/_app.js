import { store } from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout( <Provider store={store}>
    <Component {...pageProps} />
  </Provider>,)
}

/*
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout( <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>)
}

*/
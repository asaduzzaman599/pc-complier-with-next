import { store } from '@/redux/store'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return  (<SessionProvider session={pageProps.session}>
    <Provider store={store}>{
    getLayout(
    <Component {...pageProps} />
    )
    }
    </Provider>
 </SessionProvider>)
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
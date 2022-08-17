import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider} from 'next-themes';
import { NextPage } from 'next';
import {ReactElement, ReactNode} from 'react';


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute={'class'} defaultTheme={'system'}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp);

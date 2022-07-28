import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Layout from "../components/Layout";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// configure fontawesome styles
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

import '../styles/global.scss';
import Layout from "../components/Layout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {AppPropsWithLayout} from "@model/index";

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

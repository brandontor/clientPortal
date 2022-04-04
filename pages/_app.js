import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { AuthProvider } from '../lib/authcontext'
import Router from 'next/router';


function MyApp({ Component, pageProps }) {

  switch (Router.pathname) {
    case '/':
        return (
            <>
                <AuthProvider>
                  <Component {...pageProps} />
                </AuthProvider>
            </>
        )
    default:
        return (
            <>
              <AuthProvider>
                <Layout>
                  <Component {...pageProps} />  
                </Layout>
              </AuthProvider>
            </>
        )
    }
}

export default MyApp

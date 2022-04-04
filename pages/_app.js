import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { AuthProvider } from '../lib/authcontext'


function MyApp({ Component, pageProps }) {


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

export default MyApp

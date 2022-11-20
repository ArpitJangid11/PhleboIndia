import Navbar from '../components/navbar'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  {/* <Footer/> */}
  </>
}

export default MyApp

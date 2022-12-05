import Navbar from './navbar';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <div className="container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
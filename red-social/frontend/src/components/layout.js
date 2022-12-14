import Navbar from "./navbar";
import PostModal from "./post-modal";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div id="main-container" className="container mb-5">
        {children}
      </div>
      <PostModal />
    </>
  );
}

export default Layout;

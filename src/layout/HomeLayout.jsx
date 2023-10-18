//react-router-dom
import { Outlet } from "react-router-dom";
//components
import { Header, Navbar, Footer } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;

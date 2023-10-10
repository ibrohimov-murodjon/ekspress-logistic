import { Outlet } from "react-router-dom";
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

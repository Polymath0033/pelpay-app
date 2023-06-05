import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <>
      <Header />
      <main className="App" style={{ position: "relative", top: 113 + "px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;

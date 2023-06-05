import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Root = () => {
  return (
    <>
      <Header />
      <div className="App" style={{ position: "relative", top: 113 + "px" }}>
        <Outlet />
      </div>
    </>
  );
};
export default Root;

import Directory from "components/directory/Directory";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;

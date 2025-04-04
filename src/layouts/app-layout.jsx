import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-5 text-center bg-gray-300 mt-10">
        Made with 💗 by Symbiote
      </div>
    </div>
  );
};

export default AppLayout;

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2025 Gagandeep D. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;

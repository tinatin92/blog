import Header from "../../components/header";

import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col w-full">
     <Header />
      <main className="px-4 py-8 flex-grow">
        <Outlet />
      </main>
      <footer>Footer</footer>
     </div>
    
    </>
  );
};

export default DefaultLayout;

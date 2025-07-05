import React from "react";
import { LandingPageNavbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col py-5 px-10 xl:px-10">
      <LandingPageNavbar />
      Page
    </div>
  );
};
export default Layout;

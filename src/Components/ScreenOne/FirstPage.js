import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

const FirstPage = () => {
  return (
    <div>
      <Topbar />
      {/* <Main /> */}

      <Sidebar />
      <Searchbar />
    </div>
  );
};

export default FirstPage;

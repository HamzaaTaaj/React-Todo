import React from "react";
import Header from "../../components/Header";
import Create from "../../components/createTask";
import Search from "../../components/searchbox";
import Empty from "../../components/emptyTaks";

const Index = () => {
  return (
    <div>
      <Header />
      <Search />
      <Create />
      <Empty />
    </div>
  );
};

export default Index;

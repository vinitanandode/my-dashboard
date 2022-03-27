import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

export default Home;

const Div = styled.div`
  position: relative;
`;

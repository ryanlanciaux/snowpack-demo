import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #eac;
  padding: 8px;
  border: 1px solid #ccc;
`;

const Card = styled.div`
  padding: 16px;
  border: 1px solid #eac;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => <Card>Another one</Card>;

ReactDOM.render(<App />, document.getElementById("app"));

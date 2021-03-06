import React from "react";

import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Input from "../Input-Page-Main.js";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MemoryRouter>
      <Input match={{ params: { scriptId: "some script Id" } }} />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

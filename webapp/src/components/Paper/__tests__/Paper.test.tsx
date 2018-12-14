import React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";

import Paper from "../Paper";

describe("<Paper />", () => {
  it("renders properly", () => {
    const { container } = render(<Paper>Hello, paper!</Paper>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

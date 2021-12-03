import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./utils/test/render";

it("renders learn react link", () => {
  render(<App />);
  console.log("FOO");
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

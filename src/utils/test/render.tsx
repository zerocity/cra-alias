import { ChakraProvider } from "@chakra-ui/react";
import {
  queries,
  Queries,
  render,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import React from "react";

const AllTheProviders: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

function customRender<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options: RenderOptions<Q, Container> = {}
): RenderResult<Q, Container> {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };

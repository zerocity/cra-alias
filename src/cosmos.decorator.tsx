import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Decorator: React.FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default Decorator;

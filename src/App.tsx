import { ChakraProvider, Text } from "@chakra-ui/react";
import { Layout } from "@component/Layout/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Text>hello</Text>
      </Layout>
    </ChakraProvider>
  );
}

export default App;

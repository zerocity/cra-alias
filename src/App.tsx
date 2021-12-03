import { ChakraProvider, Text } from "@chakra-ui/react";
import { Layout } from "@app/component";
import { Button } from "@app/primitives";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Text>hello</Text>
        <Button>asd</Button>
      </Layout>
    </ChakraProvider>
  );
}

export default App;

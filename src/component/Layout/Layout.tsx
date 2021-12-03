import { Flex } from "@chakra-ui/layout";

export const Layout: React.FC = (props) => {
  return <Flex>{props.children}</Flex>;
};

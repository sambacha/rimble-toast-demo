import React from "react";
import { Box, Flex, Link, Button, Heading } from "rimble-ui";

class Header extends React.Component {
  render() {
    return (
      <Box bg="primary" p={3} justifyContent="center" flexDirection="column">
        <Flex justifyContent="flex-end">
          <Link
            href="https://t.me/freighttrust/"
            target="_blank"
          >
            <Button>Telegram</Button>
          </Link>
        </Flex>

        <Box width="400px" mx="auto">
          <Heading.h2 color={"white"}>Staking and Node Management Portal</Heading.h2>
        </Box>
      </Box>
    );
  }
}

export default Header;

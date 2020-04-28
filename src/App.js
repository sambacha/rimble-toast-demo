import React, { Component } from "react";
import { ThemeProvider, Box, Text, Flex } from "rimble-ui";

import RimbleWeb3 from "./utilities/RimbleWeb3";

import Header from "./components/Header";
import PrimaryCard from "./components/PrimaryCard";
import InstructionsCard from "./components/InstructionsCard";
import MissingWeb3Provider from "./components/MissingWeb3Provider";

import theme from "./theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #efefef;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className="App">
        <Header />
        <Flex justifyContent="center" p={4}>
          <Text width="400px">
            This is the Portal that you can use to manage your $EDI staking,
            Transfer your $EDI to $xEDI or, learn more about the network!
          </Text>
        </Flex>

        <RimbleWeb3>
          <RimbleWeb3.Consumer>
            {({ web3 }) => (
              <Box>
                {/* Conditionally render child comonents dependent on web3 being loaded */}
                {!web3 ? <MissingWeb3Provider /> : <PrimaryCard />}
              </Box>
            )}
          </RimbleWeb3.Consumer>
        </RimbleWeb3>
        <InstructionsCard />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;

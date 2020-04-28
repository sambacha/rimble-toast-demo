import React from "react";
import { Flex, Heading, MetaMaskButton } from "rimble-ui";

class ConnectButton extends React.Component {
  render() {
    return (
      <Flex flexDirection="column" alignItems="center" px={3} py={5}>
        <Heading.h3 textAlign="center" pb={4}>
          Connect with MetaMask and Join the Network!
        </Heading.h3>

        <MetaMaskButton
          size={"medium"}
          mx="auto"
          onClick={this.props.initAccount}
          disabled={this.props.account}
        >
          Connect with web3 wallet
        </MetaMaskButton>
      </Flex>
    );
  }
}

export default ConnectButton;

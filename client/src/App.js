import React, { Component } from "react";
import contract from "./contracts/Token.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./css/App.css";
import './css/responsive.css';
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize";

import {Tabs, Tab} from 'react-materialize';

import ERC20Wallet from './utils/ERC20Wallet';
import Talk from './utils/Talk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null, accounts: null, contract: null,
      W_disabled: true, T_disabled: false
    };
    this.disabled = this.disabled.bind(this);
  }

  componentDidMount = async () => {
    try {

      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(contract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  disabled = () => {
    if(this.state.W_disabled === true) {
      this.setState({W_disabled: false, T_disabled:true});
    } else {
      this.setState({W_disabled: true, T_disabled: false});
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <main className="App container">
        <Tabs className='main-tab z-depth-1'>

          <Tab tabWidth={6} title="Wallet" active={true} /*disabled={this.state.W_disabled}*/ onClick={this.disabled} >
            <ERC20Wallet accounts={this.state.accounts} contract={this.state.contract} />
          </Tab>

          <Tab tabWidth={6} title="Talk" /*disabled={this.state.T_disabled}*/ onClick={this.disabled} >
            <Talk accounts={this.state.accounts} contract={this.state.contract} />
          </Tab>

        </Tabs>
      </main>
    );
  }
}

export default App;

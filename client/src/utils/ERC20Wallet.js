import React, {Component} from 'react';

import Transfer from './Transfer';
import Receive from './Receive';

import {Button, Modal} from 'react-materialize';

class ERC20Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', symbol: '', totalSupply: 0, decimals: 0, balance: 0
    }
  }

  componentDidMount = async(props) => {

    const symbol = await this.props.contract.symbol();
    const name = await this.props.contract.name();
    const decimals = await this.props.contract.decimals();

    let totalSupply = await this.props.contract.totalSupply();
    totalSupply = Math.round(totalSupply.toNumber() /10 ** decimals.toNumber());

    let balance = await this.props.contract.balanceOf(this.props.accounts[0], {from: this.props.accounts[0]});
    //balanceOf = Math.round(balanceOf.toNumber() / 10 ** decimals.toNumber()).toFixed(3);
    balance = Math.floor(balance.toNumber() / 10 ** decimals.toNumber() * 100) / 100;

    this.setState({
      totalSupply,
      balance,
      symbol,
      name,
      decimals: decimals.toNumber()
    });
  }

  render(props) {
    return(
      <div className="container">
        <div className="row">

          <div className="wallet card col s12 m8 offset-m2">
            <div className="card-content">

              <span className="card-title center-align">ERC20 Wallet</span>
              <span className="card-title second center-align">{this.state.name}</span>

              <div className="info col s5 offset-s7">
                <p>Token Name:<span>{this.state.name}</span></p>
                <p>Token Symbol:<span>{this.state.symbol}</span></p>
                <p>TotalSupply:<span>{this.state.totalSupply}</span></p>
                <p>Decimals:<span>{this.state.decimals}</span></p>
              </div>

              <div className="accounts col s12 center-align">
                <span className="card-title">Balance</span>
                <p className="address">{this.props.accounts}</p>
                <p className="balance">{this.state.balance}</p>
              </div>

            </div>
          </div>

          <div className="action center-align">

            <div className="col s6">
              <Modal
                header='' trigger={<Button className="waves-effect waves-light btn">送金</Button>}>
                <Transfer accounts={this.props.accounts} contract={this.props.contract} decimals={this.state.decimals} />
              </Modal>
            </div>

            <div className="col s6">
              <Modal
                header='' trigger={<Button className="waves-effect waves-light btn">受け取り</Button>}>
                <Receive accounts={this.props.accounts} contract={this.props.contract} />
              </Modal>
            </div>

          </div>

        </div>
      </div>


    );
  }
}

export default ERC20Wallet;
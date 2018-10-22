import React, {Component} from 'react';
import QrReader from "react-qr-reader";

import {Button, Modal} from 'react-materialize';

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '', amount: '', bool: false, legacy: true
    };
    this.inputAddress = this.inputAddress.bind(this);
    this.inputAmount = this.inputAmount.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.openImageDialog = this.openImageDialog.bind(this);
    this.switch = this.switch.bind(this);
  }
  componentDidMount = () => {
    try {
      this.transfer = this.transfer.bind(this);
    } catch(error) {
      console.log(error)
    }
  }

  inputAddress = event => {
    this.setState({ address: event.target.value });
  };
  inputAmount = event => {
    this.setState({ amount: event.target.value });
  }

  transfer = async(props) => {
    const amount = this.state.amount * (10 ** this.props.decimals);
    await this.props.contract.transfer(
      this.state.address, amount ,
      {from: this.props.accounts[0]}
    );
    alert(`send To ${this.state.address}    value: ${amount}`);
  }

  handleScan = data => {
    if(data) {
      this.setState({address: data});
    }
  }
  handleError = err => {
    console.error(err);
  }

  switch = () => {
    if(this.state.legacy === true) {
      this.setState({legacy: false});
    }
    else {
      this.setState({legacy: true});
    }
  }

  openImageDialog() {
    this.refs.qrReader1.openImageDialog();
  }


  render(props) {
    return(
      <div className="Transfer row center-align">

        <div className="row">
          <h2>Transfer</h2>

          <div className="input-field col s12">
            <input
              placeholder="Address" id="first_name" type="text" className="validate" required
              value={this.state.address} onChange={this.inputAddress}
            />
          </div>

          <div className="input-field col s12">
            <input
              placeholder="Amount" id="first_name" type="number" min={1 / (10 ** this.props.decimals)} step={1 / (10 ** this.props.decimals)} required className="validate"
              value={this.state.amount} onChange={this.inputAmount}
            />
          </div>

          <div className="col s12">
            <button className="waves-effect waves-light btn" onClick={this.transfer}>送金</button>
          </div>
        </div>

        <Modal trigger={<Button className="QR waves-effect waves-light btn">QR読み込み</Button>}>
          <div className="col s12 center-align">

            <button className="QR enter waves-effect waves-light btn" onClick={this.switch}>起動する</button>
            <QrReader
              delay={500}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "50%", margin: "auto" }}
              legacyMode={this.state.legacy}
              ref="qrReader1"
            />
            <Button className="QR waves-effect waves-light btn" onClick={this.openImageDialog} >写真からQRコードを読み込む</Button>
          
          </div>
        </Modal>

      </div>
    );
  }
}

export default Transfer;
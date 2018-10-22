import React, {Component} from 'react';
import QRCode from "qrcode.react";
import Copy from 'react-copy';

class Receive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '', amount: ''
    };
    this.inputAmount = this.inputAmount.bind(this);
  }
  componentDidMount = (props) => {
    try {
      this.setState({address: this.props.accounts[0]});
    } catch(error) {
      console.log(error)
    }
  }

  inputAmount = event => {
    this.setState({amount: event.target.value});
  }

  render(props) {
    return(
      <div className="receive row center-align">
        <div className="row">

          <h2>Receive</h2>

          <div className="col s12">
            <p>アドレス</p>
            <QRCode value={this.state.address} />
          </div>

          <div className="copy col s12">
            <Copy textToBeCopied={this.state.address}>
              <button className="col s8 offset-s2 waves-effect waves-light btn">Copy</button>
            </Copy>
          </div>

        </div>
      </div>
    );
  }
}

export default Receive;
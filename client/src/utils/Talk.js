import React, {Component} from 'react';


class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null, address: [],
      inputMessage: ''
    }
    this.inputMessage = this.inputMessage.bind(this);

  }

  componentDidMount = async(props) => {
    try {
      this.sendMessage = this.sendMessage.bind(this);

      this.setState(this.getMessage);

    } catch(error) {
      console.log(error);
    }
  }

  inputMessage = event => {
    this.setState({inputMessage: event.target.value});
  }

  sendMessage = async(props) => {
    await this.props.contract.sendMessage(
      this.state.inputMessage,
      {from: this.props.accounts[0]}
    );
  }

  getMessage = async(props) => {
    const length = await this.props.contract.getTalk(0);

    const message = [];

    if(length[2].toNumber() > 0) {
      for(let i = length[2].toNumber(); i > 0; i--) {

        var results = await this.props.contract.getTalk(i - 1);
        message.push(results);
      }
    }
    const talks = message.map((talk, index) =>
      <li key={index}>
        <span className="truncate">{talk[0].substr(0, 5) + '...'}</span> {talk[1]}
      </li>
    );
    this.setState({message: talks});

  }
  /*
  event = async(props) => {
    await this.props.contract.events.logSendMessage();
  }
  */

  render() {
    return(
      <div className="container">
        <div className="row">

          <div className="talk card col s12 m8 offset-m2">

            <div className="card-content">
              <span className="card-title center-align">Talk Board</span>
              <ul>
                {this.state.message}
              </ul>
            </div>

            <div className="card-action">
              <div className="row">

                <div className="input-field col s9">
                  <input
                    type="text" className="validate"
                    value={this.state.inputMessage} onChange={this.inputMessage} 
                  />
                </div>
                <div className="input-field center-align col s3">
                  <button className="waves-effect waves-light btn" onClick={this.sendMessage} >
                    send
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    );

  }
}

export default Talk;
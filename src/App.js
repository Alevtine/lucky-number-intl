import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';

class App extends Component {
  state = {
    lang: this.props.userLang,
    messages: this.props.messages,
    luckyNumber: '',
  }

  componentDidMount() {
    const luckyOnInit = this.calculateNumber();
    this.setState({
      lang: 'en',
      luckyNumber: luckyOnInit,
    })
  }

  calculateNumber() {
    return Math.floor(Math.random()*43);
  }

  onButtonGetLucky = () => {
    const luckyByUser = this.calculateNumber();
    this.setState({
      luckyNumber: luckyByUser,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormattedMessage
              id="app.title"
              defaultMessage="Your lucky number for today"
              description="Welcome header on main page" />
        </header>
        <p>
          <FormattedMessage
            id="app.randomQuote"
            defaultMessage="My style is unique and random"
            description="Text on main page" />
        </p>
        <div>
          <p>
            <FormattedMessage
              id="app.chooseLang"
              defaultMessage="Preferred language: "
              description="Choose app language" />
            <button type="button" className="lang en">EN</button>
            <button type="button" className="lang ru">RU</button>
            <button type="button" className="lang al">DE</button>
          </p>
          <p>
            <button type="button" className="lucky-button" onClick={this.onButtonGetLucky}>GET LUCKY</button>
          </p>
          <p className="lucky-text">
            {this.state.luckyNumber}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

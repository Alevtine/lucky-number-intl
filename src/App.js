import React, { Component } from 'react';
import { FormattedMessage, FormattedTime, FormattedDate, FormattedPlural } from 'react-intl';
import './App.css';

class App extends Component {
  state = {
    luckyNumber: '',
  }

  componentDidMount() {
    const luckyOnInit = this.calculateNumber();
    this.setState({
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
    const { currentLang } = this.props;

    const currentPhrazeLang = {
      'en': <FormattedPlural
        value={this.state.luckyNumber}
        one="awesome fruit"
        other="awesome fruits" />,
      'ru': <FormattedPlural
        value={this.state.luckyNumber}
        one="вкусняшный фрукт"
        few="вкусняшных фрукта"
        many="вкусняшных фруктов"
        other="вкусняшных фруктов" />,
      'de': <FormattedPlural
        value={this.state.luckyNumber}
        one="lecker Frucht"
        other="lecker Früchte" />
    }

    let phrazeNode;
    switch(currentLang) {
      case 'en':
        phrazeNode = currentPhrazeLang['en'];
        break;
      case 'ru':
        phrazeNode = currentPhrazeLang['ru'];
        break;
      case 'de':
        phrazeNode = currentPhrazeLang['de'];
        break;
      default: phrazeNode = currentPhrazeLang['en'];
    }

    return (
      <div className="App">
        <header className="App-header">
          <FormattedMessage
              id="app.title"
              defaultMessage="Your lucky number for today"
              description="Welcome header on main page" />
          <FormattedTime value={new Date()} /><FormattedDate value={new Date()} year="numeric" month="long" day={"2-digit"} />
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
            <button type="button" className="lang en" onClick={() => this.props.onChangeLocale('en')}>EN</button>
            <button type="button" className="lang ru" onClick={() => this.props.onChangeLocale('ru')}>RU</button>
            <button type="button" className="lang al" onClick={() => this.props.onChangeLocale('de')}>DE</button>
          </p>
          <p>
            <button type="button" className="lucky-button" onClick={this.onButtonGetLucky}>GET LUCKY</button>
          </p>
          <div className="lucky-text">
            <FormattedMessage
              id="app.luckyPhraze"
              defaultMessage={'You gotta {luckyNumber} awesome {fruits} '}
              values={{
                luckyNumber: (
                  <span>{this.state.luckyNumber}</span>
                ),
                fruits: (
                  <span>{phrazeNode}</span>
                )
              }}>
            </FormattedMessage>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

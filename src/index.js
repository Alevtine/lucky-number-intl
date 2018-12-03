import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_ru from 'react-intl/locale-data/ru';
import messages_de from './translations/de.json';
import messages_en from './translations/en.json';
import messages_ru from './translations/ru.json';

const messages = {
    'de': messages_de,
    'en': messages_en,
    'ru': messages_ru,
};

let language = navigator.language.split(/[-_]/)[0];
addLocaleData([...locale_de, ...locale_en, ...locale_ru]);


ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]} defaultLocale={language}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import BankAccountsForm from './RegistrationFormRedux';
import FieldArraysForm from './FieldArraysForm.js'
import './styles/index.css';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = (values) => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

ReactDOM.render(
  <Provider store={store}>
    <FieldArraysForm onSubmit={showResults}/>
  </Provider>,
  document.getElementById('root')
);

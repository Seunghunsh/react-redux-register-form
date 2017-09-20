# react-redux-register-form
[Live Demo](https://biographer-ada-38367.netlify.com)

## What it does
Nested forms using create-react-app, redux-form.

Currently it validates, First Name, Last Name, Email, Bank Account IBAN, Bank

Name using `iban` library, regex.

## To Run
Clone the repo, cd into the repo, run

`yarn install && yarn start` or

`npm install && npm start`

## Things to be done for the improvement
custom styling: 1hr
  Using `react-bootstrap` or `sass` with `react inline-style` for a creative design, UI.

create nested input forms without redux-form: 1hr
  Assign unique key values to react input components
  write one validation function that takes `bankAccounts[0].iban` `bankAccounts[1].iban` ... and return validation errors like
  `bankAccountErrors.iban = ibanValid ? '' : ' is invalid IBAN';
   bankAccountsArrayErrors[bankAccountIndex] = bankAccountErrors`

## Created by Seunghun Lee

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

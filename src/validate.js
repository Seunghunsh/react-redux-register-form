import IBAN from 'iban';

const validate = values => {
  const errors = {}
  if (!/^[A-Za-z]+$/.test(values.firstName)) {
    errors.firstName = 'Only Letters Required'
  }
  if (!/^[A-Za-z]+$/.test(values.lastName)) {
    errors.lastName = 'Only Letters Required'
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'Valid Email Required'
  }
  if (!values.bankAccounts || !values.bankAccounts.length) {
    errors.bankAccounts = { _error: 'At least one bankAccount must be entered' }
  } else {
    const bankAccountsArrayErrors = []
    values.bankAccounts.forEach((bankAccount, bankAccountIndex) => {
      const bankAccountErrors = {}
      if (!bankAccount || !bankAccount.iban || bankAccount.iban.trim()) {
        let ibanValid = IBAN.isValid(bankAccount.iban);
        bankAccountErrors.iban = ibanValid ? '' : ' is invalid IBAN';
        bankAccountsArrayErrors[bankAccountIndex] = bankAccountErrors
      }

      if (!bankAccount || !bankAccount.bankname || !bankAccount.bankname.trim()) {
        bankAccountErrors.bankname = 'Required'
        bankAccountsArrayErrors[bankAccountIndex] = bankAccountErrors
      }
    })
    if (bankAccountsArrayErrors.length) {
      errors.bankAccounts = bankAccountsArrayErrors
    }
  }
  return errors
}

export default validate

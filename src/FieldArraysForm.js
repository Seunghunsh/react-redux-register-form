import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>


const renderBankAccounts = ({ fields, meta: { error, submitFailed } }) =>
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Bank Account
      </button>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </li>
    {fields.map((bankAccount, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>
          Bank Account #{index + 1}
        </h4>
        <Field
          name={`${bankAccount}.iban`}
          type="text"
          component={renderField}
          label="IBAN"
        />
        <Field
          name={`${bankAccount}.bankname`}
          type="text"
          component={renderField}
          label="Bank Name"
        />
      </li>
    )}
  </ul>

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email Name"
      />
      <FieldArray name="bankAccounts" component={renderBankAccounts} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(FieldArraysForm)

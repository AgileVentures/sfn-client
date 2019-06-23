import React from 'react'
import ContactForm from './ContactForm'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { mount } from 'enzyme'

describe('<ContactForm />', () => {
  let contactFormWrapper
  const reducers = {
    form: formReducer
  }
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

  beforeEach(() => {
    contactFormWrapper = mount(<Provider store={store} ><ContactForm /></Provider>)
  })

  it('has an input field to fill in with the name', () => {
    expect(contactFormWrapper.find("input[name='name']").length).toEqual(1)
  })

  it('has an input field to fill in with the email address', () => {
    expect(contactFormWrapper.find("input[name='email']").length).toEqual(1)
  })

  it('has an input field to fill in with the subject of the email', () => {
    expect(contactFormWrapper.find("input[name='subject']").length).toEqual(1)
  })

  it('has a textfield to type a message for Sing for Needs', () => {
    expect(contactFormWrapper.find('textarea').length).toEqual(1)
  })

  it('has a button to send the email to Sing for Needs', () => {
    expect(contactFormWrapper.find('input.button').length).toEqual(1)
  })
})

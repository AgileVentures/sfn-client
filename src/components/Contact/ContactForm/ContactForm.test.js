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

  afterEach(() => {
    contactFormWrapper.unmount()
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

  it('displays an error when the email field is left blank', () => {
    contactFormWrapper.find('input').find('[name="name"]').simulate('blur')
    expect(contactFormWrapper.find('.error.message').length).toEqual(1)
  })

  it('displays no errors when all the fields have been filled in', () => {
    const inputsWrapper = contactFormWrapper.find('input')
    inputsWrapper.not('[type="submit"]').forEach(node => {
      node.simulate('change', { target: { value: 'asdf' } })
      node.simulate('blur')
    })
    expect(contactFormWrapper.find('.error.message').length).toEqual(0)
  })
})

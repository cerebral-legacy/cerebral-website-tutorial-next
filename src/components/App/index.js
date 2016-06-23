import {Component, h} from 'cerebral-view-snabbdom'
import Items from '../Items'

export default Component('App', {
  newItemTitle: 'app.newItemTitle',
  items: 'app.items',
  isSaving: 'app.isSaving'
}, props => {

  function onFormSubmit(event) {
    event.preventDefault()
    props.signals.app.newItemTitleSubmitted()
  }

  function onInputChange(event) {
    props.signals.app.newItemTitleChanged({
      title: event.target.value
    })
  }

  return h('div', [
    h('form', {
      on: {
        submit: onFormSubmit
      }
    }, [
      h('input', {
        props: {
          type: 'text',
          value: props.newItemTitle,
          disabled: props.isSaving
        },
        on: {
          input: onInputChange
        }
      })
    ]),
    Items()
  ])
})

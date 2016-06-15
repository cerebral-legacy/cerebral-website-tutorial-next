import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react'
import Items from '../Items'

@Cerebral({
  newItemTitle: 'app.newItemTitle',
  isSaving: 'app.isSaving'
})
class App extends React.Component {
  onFormSubmit(event) {
    event.preventDefault()
    this.props.signals.app.newItemTitleSubmitted()
  }
  onInputChange(event) {
    this.props.signals.app.newItemTitleChanged({
      title: event.target.value
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isSaving && !this.props.isSaving) {
      this.input.focus()
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            autoFocus
            type="text"
            ref={node => this.input = node}
            disabled={this.props.isSaving}
            value={this.props.newItemTitle}
            onChange={event => this.onInputChange(event)}
          />
        </form>
        <Items />
      </div>
    )
  }
}

export default App

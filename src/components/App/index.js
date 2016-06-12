import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react'
import Items from '../Items'

@Cerebral({
  newItemTitle: 'app.newItemTitle'
})
class App extends React.Component {
  onFormSubmit(event) {
    event.preventDefault()
    this.props.signals.newItemSubmitted()
  }
  onInputChange(value) {
    this.props.signals.newItemTitleChanged({
      title: value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            type="text"
            value={this.props.newItemTitle}
            onChange={event => this.onInputChange(event)}
          />
        </form>
        <Items />
      </div>
    )
  }
}

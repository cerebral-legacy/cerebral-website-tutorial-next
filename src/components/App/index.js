import Inferno from 'inferno'
import Component from 'inferno-component'
import {connect} from 'cerebral-view-inferno'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  isSaving: 'app.isSaving',
  error: 'app.error'
}, {
  newItemTitleSubmitted: 'app.newItemTitleSubmitted',
  newItemTitleChanged: 'app.newItemTitleChanged'
},
  class App extends Component {
    componentDidUpdate(prevProps) {
      if (prevProps.isSaving && !this.props.isSaving) {
        this.input.focus()
      }
    }
    onFormSubmit(event) {
      event.preventDefault()
      this.props.newItemTitleSubmitted()
    }
    onInputChange(event) {
      this.props.newItemTitleChanged({
        title: event.target.value
      })
    }
    render() {
      return (
        <div>
          <form onSubmit={event => this.onFormSubmit(event)}>
            <input
              autoFocus
              type="text"
              onAttached={node => this.input = node}
              disabled={this.props.isSaving}
              value={this.props.newItemTitle}
              onInput={event => this.onInputChange(event)}
            />
            {
              this.props.error ?
                <span style={{color: 'red', paddingLeft: '10px'}}>{this.props.error}</span>
              :
                null
            }
          </form>
          <Items />
        </div>
      )
    }
  }
)

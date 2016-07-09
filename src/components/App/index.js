import Inferno from 'inferno'
import Component from 'inferno-component'
import {connect} from 'cerebral-view-inferno'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  isSaving: 'app.isSaving',
  error: 'app.error'
},
  class App extends Component {
    componentDidUpdate(prevProps) {
      if (prevProps.isSaving && !this.props.isSaving) {
        this.input.focus()
      }
    }
    onFormSubmit(event) {
      event.preventDefault()
      this.props.signals.app.newItemTitleSubmitted()
    }
    onInputChange(event) {
      this.props.signals.app.newItemTitleChanged({
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
              onChange={event => this.onInputChange(event)}
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

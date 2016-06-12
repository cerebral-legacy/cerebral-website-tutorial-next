import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemSubmitted from './signals/newItemSubmitted'
import itemCompletedToggled from './signals/itemCompletedToggled'

export default module => {

  module.addState({
    items: [],
    newItemTitle: '',
    isSaving: false
  })

  module.addSignals({
    newItemTitleChanged: {
      chain: newItemTitleChanged,
      immediate: true
    },
    newItemSubmitted,
    itemCompletedToggled
  })

}

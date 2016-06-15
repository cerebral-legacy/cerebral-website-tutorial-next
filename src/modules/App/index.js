import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemTitleSubmitted from './signals/newItemTitleSubmitted'

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
    newItemTitleSubmitted
  })

}

import changeItemTitle from './chains/changeItemTitle'
import submitNewTitle from './chains/submitNewTitle'

export default module => {

  module.addState({
    items: [],
    newItemTitle: '',
    isSaving: false,
    error: null
  })

  module.addSignals({
    newItemTitleChanged: {
      chain: changeItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewTitle
  })

}
